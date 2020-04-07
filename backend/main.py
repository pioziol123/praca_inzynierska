import datetime

from flask import Flask, request, abort, jsonify, url_for
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token
from app import db
from app.models.user import Users, Keywords

app = Flask(__name__)

bcrypt = Bcrypt(app)
jwt = JWTManager(app)


@app.shell_context_processor
def make_shell_context():
    return {'User': User, 'Keywords': Keywords}


@app.route('/login', methods=['POST'])
def login(self):
    body = request.get_json()
    email = User.objects.get(email=body.get('email'))
    authorized = email.check_password(body.get('password'))
    if not authorized:
        return {'error': 'Email or password invalid'}, 401
    expires = datetime.timedelta(days=7)
    access_token = create_access_token(identity=str(email.id), expires_delta=expires)
    return {'token': access_token}, 200


@app.route('/logout', methods=['POST'])
def logout(self):
    return 'An user has been logged out successfully'


@app.route('/user', methods=['POST'])
def register():
    username = request.json.get('email')
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
    keyword = request.json.get('keyword')
    if keyword is None:
        abort(400)
    db.session.add(keyword)


@app.route('/keywords', methods=['GET'])
def list_keywords(self):
    uname = request.form['uname']
    mail = request.form['mail']
    passw = request.form['passw']


@app.route('/keywords/{id}', methods=['DELETE'])
def remove_keyword(self):
    keyword = request.json.get('keyword')
    if keyword is None:
        abort(400)


if __name__ == '__main__':
    app.run()
