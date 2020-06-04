import datetime

from flask_bcrypt import generate_password_hash
from app import db, application
import jwt


class Keywords(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    word = db.Column(db.String(80), index=True, unique=True)
    added_at = db.Column(db.String(200), index=True, unique=False)
    added_by = db.Column(db.Integer, index=True, unique=False)

    def serialize(self):
        return {
            'id': self.id,
            'word': self.word,
            'added_at': self.added_at,
            'added_by': self.added_by
        }


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(200), index=True, unique=True)
    password = db.Column(db.String(200), index=True, unique=True)
    created_at = db.Column(db.DateTime, index=True, unique=False)
    last_login = db.Column(db.DateTime, index=True, unique=True)

    def __init__(self, email, password, admin=False):
        self.email = email
        self.password = generate_password_hash(
            password, application.config.get('BCRYPT_LOG_ROUNDS')
        ).decode()
        self.registered_on = datetime.datetime.now()
        self.admin = admin

    def encode_auth_token(self, user_id):
        """
        Generates the Auth Token
        :return: string
        """
        try:
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, minutes=5),
                'iat': datetime.datetime.utcnow(),
                'sub': user_id
            }
            return jwt.encode(
                payload,
                application.config.get('SECRET_KEY'),
                algorithm='HS256'
            )
        except Exception as e:
            return e


class BlockedUsers(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_name = db.Column(db.String(200), index=True, unique=True)
    blocked_by = db.Column(db.Integer, index=True, unique=True)
    blocked_at = db.Column(db.DateTime, index=True, unique=False)

    def __init__(self, user_name, blocked_by):
        self.user_name = user_name
        self.blocked_by = blocked_by
        self.blocked_at = datetime.datetime.now()

    def serialize(self):
        return {
            'id': self.id,
            'user_name': self.user_name,
            'blocked_by': self.blocked_by,
            'blocked_at': self.blocked_at
        }


