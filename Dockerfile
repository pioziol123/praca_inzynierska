FROM python:3
RUN apt update && apt update &&  apt install -y libmariadb-dev
COPY ./praca_inzynierska/backend/requirements.txt ./requirements.txt
RUN pip install -r requirements.txt
RUN pip install flask-httpauth
WORKDIR /var/www/app