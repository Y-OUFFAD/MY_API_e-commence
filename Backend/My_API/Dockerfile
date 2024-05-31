FROM python:3.8-slim

WORKDIR /app
COPY . /app

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt


CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
