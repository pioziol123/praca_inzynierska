from flask_bcrypt import generate_password_hash, check_password_hash
from werkzeug.security import generate_password_hash
from passlib.hash import pbkdf2_sha256 as sha256
from app import db


class Keywords(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    keyword = db.Column(db.String(80), index=True, unique=False)


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(200), index=True, unique=True)
    password = db.Column(db.String(200), index=True, unique=True)
    created_at = db.Column(db.DateTime, index=True, unique=False)
    last_login = db.Column(db.DateTime, index=True, unique=True)

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def test_hash_password(self, password):
        return sha256.hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    @staticmethod
    def verify_hash(password, hash):
        return sha256.verify(password, hash)
