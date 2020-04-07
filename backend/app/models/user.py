from flask_bcrypt import generate_password_hash, check_password_hash
from app import db


class Keywords(db.Model):
    keyword = db.Column(db.Integer, primary_key=True)
    added_at = db.Column(db.String(64), index=True, unique=True)
    genres = db.Column(db.String(64), index=True, unique=True)
    added_by = db.Column('User')


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(64), index=True, unique=True)
    password = db.Column(db.String(64), index=True, unique=True)
    keywords = db.Column(db.String(64), index=True, unique=True)

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def check_password(self, password):
        return check_password_hash(self.password, password)

