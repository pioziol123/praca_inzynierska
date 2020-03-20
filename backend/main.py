import datetime

from flask import Flask, request, abort, jsonify, url_for
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token
from resources.models.db import db
from resources.models.user import User, Movie

app = Flask(__name__)

bcrypt = Bcrypt(app)
jwt = JWTManager(app)


@app.shell_context_processor
def make_shell_context():
    return {'User': User, 'Dictionary': Movie}


@app.route('/login', methods=['POST'])
def login(self):
    body = request.get_json()
    user = User.objects.get(email=body.get('email'))
    authorized = user.check_password(body.get('password'))
    if not authorized:
        return {'error': 'Email or password invalid'}, 401

    expires = datetime.timedelta(days=7)
    access_token = create_access_token(identity=str(user.id), expires_delta=expires)
    return {'token': access_token}, 200


@app.route('/logout', methods=['POST'])
def logout(self):
    return 'Log out has ben'


@app.route('/user', methods=['POST'])
def register(self):
    username = request.json.get('username')
    password = request.json.get('password')
    if username is None or password is None:
        abort(400)  # missing arguments
    if User.query.filter_by(username=username).first() is not None:
        abort(400)  # existing user
    user = User(username=username)
    user.hash_password(password)
    db.session.add(user)
    db.session.commit()
    return jsonify({'username': user.username}), 201, {'Location': url_for('get_user', id=user.id, _external=True)}


@app.route('/keywords', methods=['POST'])
def add_keyword():
    return 'aa'


@app.route('/keywords', methods=['GET'])
def list_keywords(self):
    uname = request.form['uname']
    mail = request.form['mail']
    passw = request.form['passw']


@app.route('/keywords/{id}', methods=['DELETE'])
def remove_keyword(self):
    return 'success'


@app.route('/')
def hello_world():
    return 'I am on Azure!'


if __name__ == '__main__':
    app.run()
