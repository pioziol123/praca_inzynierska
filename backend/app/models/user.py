import datetime

from flask_bcrypt import generate_password_hash
from app import db, application
import jwt


class Keywords(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    keyword = db.Column(db.String(80), index=True, unique=True)
    added_at = db.Column(db.String(200), index=True, unique=False)
    added_by = db.Column(db.Integer, index=True, unique=False)


class BlacklistToken(db.Model):
    """
    Token Model for storing JWT tokens
    """

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    token = db.Column(db.String(500), unique=True, nullable=False)
    blacklisted_on = db.Column(db.DateTime, nullable=False)

    def __init__(self, token):
        self.token = token
        self.blacklisted_on = datetime.datetime.now()

    def __repr__(self):
        return '<id: token: {}'.format(self.token)


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

    @staticmethod
    def decode_auth_token(auth_token):

        try:
            payload = jwt.decode(auth_token, application.config.get('SECRET_KEY'))
            is_blacklisted_token = BlacklistToken.check_blacklist(auth_token)
            if is_blacklisted_token:
                return 'Token blacklisted. Please log in again.'
            else:
                return payload['sub']
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'





class BlockedUsers(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_name = db.Column(db.String(200), index=True, unique=True)
    blocked_by = db.Column(db.Integer, index=True, unique=True)
    blocked_at = db.Column(db.DateTime, index=True, unique=False)

    def __init__(self, user_name, blocked_by):
        self.user_name = user_name
        self.blocked_by = blocked_by
        self.blocked_at = datetime.datetime.now()