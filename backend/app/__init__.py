#!flask/bin/python

from flask import Flask
from flask_loginmanager import LoginManager
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config')

db = SQLAlchemy(app)
migrate = Migrate(app, db)
login = LoginManager(app)

from app.models import user
from app import routes
from app.models import user


