from __future__ import absolute_import, unicode_literals

import os
from pathlib import Path

from celery import Celery
from celery.signals import worker_ready, worker_shutdown, beat_init

from apps.config.celery_bootstrap.bootstraps import LivenessProbe
from apps.config.settings import (
    CELERY_BROKER_URL,
    CELERY_RETRY_MAX_TIMES,
    CELERY_RETRY_DELAY,
)

# File for validating worker readiness
READINESS_FILE = Path("/tmp/celery_ready")

# set the default Django settings module for the 'celery_bootstrap' program.
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "apps.config.settings")

# Setup celery
celery_app = Celery(
    "afh",
    broker=CELERY_BROKER_URL,
    worker_cancel_long_running_tasks_on_connection_loss=True,
)

# Add liveness probe for k8s
celery_app.steps["worker"].add(LivenessProbe)

# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
# - namespace='CELERY' means all celery_bootstrap-related configuration keys
#   should have a `CELERY_` prefix.
celery_app.config_from_object("django.conf:settings", namespace="CELERY")

# Load task modules from all registered Django app configs.
celery_app.autodiscover_tasks()

# This will make sure the app is always imported when Django starts so that shared_task will use this app.
__all__ = ("celery_app", CELERY_RETRY_DELAY, CELERY_RETRY_MAX_TIMES)


@beat_init.connect
def beat_ready(**_):
    READINESS_FILE.touch()


@worker_ready.connect
def worker_ready(**_):
    READINESS_FILE.touch()


@worker_shutdown.connect
def worker_shutdown(**_):
    READINESS_FILE.unlink(missing_ok=True)
