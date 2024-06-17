# # Use the base image
# FROM python:3.9-alpine

# # Environment variables to prevent Python from writing .pyc files
# ENV PYTHONUNBUFFERED=1
# ENV PYTHONDONTWRITEBYTECODE=1

# # Set the working directory
# WORKDIR /app

# # Copy dependency files and install
# COPY ./requirements.txt /app
# RUN pip install --no-cache-dir -r requirements.txt

# # Copy the application code
# COPY . /app

# # Create a virtual environment and install dependencies
# RUN python -m venv /py && /py/bin/pip install --no-cache-dir -r requirements.txt

# # Add an unprivileged user and set permissions
# RUN adduser --disabled-password --no-create-home app && chown -R app /app

# # Set the virtual environment path
# ENV PATH="/py/bin:$PATH"

# # Set the entrypoint script

# # Expose port 8000
# EXPOSE 8000

# # Switch to the unprivileged user
# USER app

# # Command to run the Django development server
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# Utiliser une image de base Python
FROM python:3.9

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier requirements.txt dans le conteneur
COPY requirements.txt .

# Installer les dépendances système nécessaires
RUN apt-get update && apt-get install -y \
    build-essential \
    default-libmysqlclient-dev \
    pkg-config

# Installer les dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Copier le reste de l'application dans le conteneur
COPY . .

# Commande pour lancer l'application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]