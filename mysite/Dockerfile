FROM python:3.8-slim

COPY . /app

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

CMD ["python", "apps.py"]