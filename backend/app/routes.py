import datetime

from flask_jwt_extended import create_access_token
from app import app, db
from flask import request, abort, jsonify, url_for, Response

from app.models.user import Users, Keywords


@app.shell_context_processor
def make_shell_context(self):
    return {'User': Users, 'Keywords': Keywords}


@app.route('/login', methods=['POST'])
def login(self):
    body = request.get_json()
    email = Users.objects.get(email=body.get('email'))
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
    email = request.json.get('username')
    password = request.json.get('password')
    repeat_password = request.json.get('repeat_password')
    if email is None:
        abort(Response('Brak adresu email')) # missing arguments
    if password is None or repeat_password is None:
        abort(Response('Nie podano hasla prawidlowo.'))
    if password != repeat_password:
        abort(Response('Haslo sie nie zgadza.'))
    if Users.query.filter_by(email=email).first() is not None:
        abort(Response('Taki uzytkownik juz istnieje.'))  # existing user
    user = Users(email=email)
    user.email = email
    user.test_hash_password(password)
    user.created_at = datetime.datetime.now()
    user.last_login = datetime.datetime.now()
    db.session.add(user)
    db.session.commit()
    return jsonify({'username': user.email}), 201, {'Location': 'Poznan'}


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
