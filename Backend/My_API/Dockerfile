
FROM python:3.11.2

# Définir les variables d'environnement
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Définir le répertoire de travail dans le conteneur
WORKDIR /code

# Installer les dépendances système
RUN apt-get update && apt-get install -y \
    gcc \
    python3-dev \
    libmariadb-dev-compat \
    && apt-get clean
RUN apt-get update && apt-get -y dist-upgrade
RUN apt-get -y install build-essential libssl-dev libffi-dev libblas3 libc6 liblapack3 gcc python3-dev python3-pip cython3
RUN apt-get -y install python3-numpy python3-scipy 
RUN apt install -y netcat
# Installer les dépendances Python
COPY requirements.txt /code/
RUN pip install --no-cache-dir -r requirements.txt

# Copier le projet Django dans le conteneur
COPY . /code/

# Lancer le serveur de développement Django (vous pouvez remplacer cette commande par celle pour exécuter votre serveur en production)
CMD ["python", "manage.py", "runserver", "0.0.0.0:5000"]

