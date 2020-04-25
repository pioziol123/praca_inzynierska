#!flask/bin/python

from flask import Flask
from flask_loginmanager import LoginManager
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

application = app = Flask(__name__)
app.config.from_object('config')

bcrypt = Bcrypt(application)
db = SQLAlchemy(application)

migrate = Migrate(application, db)
login = LoginManager(application)

from app.models import user
from app import routes
from app.models import user


