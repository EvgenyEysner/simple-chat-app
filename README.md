# 💬 Simple Chat App

[![Django](https://img.shields.io/badge/Django-4.1-green.svg)](https://www.djangoproject.com/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Python](https://img.shields.io/badge/Python-3.9-blue.svg)](https://www.python.org/)
[![Docker](https://img.shields.io/badge/Docker-Supported-blue.svg)](https://www.docker.com/)

A real-time chat application built with Django and React, using modern web technologies and best practices.

## 🚀 Features

- ⚡ Real-time messaging using Django Channels
- 🔐 User authentication and authorization
- 📱 Responsive React frontend
- 🐳 Docker containerization
- 🔄 Celery for asynchronous tasks
- 📊 Monitoring with Flower
- 🗄️ MariaDB database
- 📝 Redis for caching and messaging

## 🛠️ Tech Stack

### Backend

- Django 4.1
- Django Channels 4.0
- Celery 5.2.7
- MariaDB 10.2
- Redis
- Python 3.9

### Frontend

- React 18
- TypeScript
- Create React App
- CSS Modules

## 🏃‍♂️ Running the Application

### Using Docker Compose (Recommended)

```bash
docker-compose up
```

This will start:

- Frontend on http://localhost:3000
- Backend on http://localhost:8000
- Celery Flower monitoring on http://localhost:5555
- MariaDB on port 3307
- Redis on port 6380

### Manual Setup

#### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
# OR
venv\Scripts\activate  # Windows
```
```bash
pip install pipenv
pipenv install

python manage.py migrate
manage.py runserver
```

#### Frontend

```bash
cd frontend
npm install
npm start
```