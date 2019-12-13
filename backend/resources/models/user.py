from datetime import datetime

from flask_loginmanager import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

from resources import db
from resources import login


###
#User Loader Function
###

@login.user_loader()
def load_user(id):
    return User.query.get(int(id))

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    surname = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128), index=True, unique=True)
    Userdictionaries = db.relationship('Dictionary', backref='author', lazy='dynamic')

    def __repr__(self):
        return '<User {}'.format(self.username)


    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)