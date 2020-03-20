import datetime

from flask_jwt_extended import create_access_token
from flask_sqlalchemy import SQLAlchemy

from resources import app, db
from flask import  request, abort, jsonify, url_for

from resources.models.user import User


# extensions
db = SQLAlchemy(app)

class Routes():

    @app.route('/')
    def hello_world(self):
        return 'I am on Azure!'

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
        return 'dupa'

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
    def add_keyword(self):
        return 'aa'

    @app.route('/keywords', methods=['GET'])
    def list_keywords(self):
        uname = request.form['uname']
        mail = request.form['mail']
        passw = request.form['passw']

    @app.route('/keywords/{id}', methods=['DELETE'])
    def remove_keyword(self):
        return 'success'

    def init_endpoints(api):
        return 'aaaawaria'





