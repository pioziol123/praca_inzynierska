import datetime

from flask import Flask, request, abort, jsonify, url_for
from flask_jwt_extended import JWTManager, create_access_token
from app import db
from app.models.user import Users, Keywords

from app import app
import config

if __name__ == '__main__':
    app.run(debug = config.APP_DEBUG)
