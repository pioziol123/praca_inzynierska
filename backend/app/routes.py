import datetime

import flask
from flask_bcrypt import check_password_hash
import jwt
from app import application, db
from flask_httpauth import HTTPBasicAuth
from flask import request, abort, jsonify, Response, make_response, Blueprint, session

from app.models.user import Users, Keywords, BlacklistToken, BlockedUsers

auth_blueprint = Blueprint('auth', __name__)


@application.shell_context_processor
def make_shell_context(self):
    return {'User': Users, 'Keywords': Keywords}


@application.route('/users/login', methods=['POST'])
def login():
    email = request.json.get('username')
    password = request.json.get('password')
    user = Users.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        res = flask.make_response(jsonify(user.id))
        res.set_cookie('userId', value=str(user.id), httponly=True)
        return res
    else:
        responseObject = {
            'status': 'fail',
            'message': 'User does not exist.'
        }
        return make_response(jsonify(responseObject)), 404


@application.route('/users/logout', methods=['POST'])
def logout():

    if request.cookies.get('userId') is not '':
        result = flask.make_response(jsonify('Successfully logged out'))
        result.set_cookie('userId', '')
        return result
    else:
        return make_response(jsonify('Invalid operation')), 401


@application.route('/user', methods=['POST'])
def register():
    email = request.json.get('username')
    password = request.json.get('password')
    repeat_password = request.json.get('repeat_password')
    if email is None:
        abort(Response('Brak adresu email'))  # missing arguments
    if password is None or repeat_password is None:
        abort(Response('Nie podano hasla prawidlowo.'))
    if password != repeat_password:
        abort(Response('Haslo sie nie zgadza.'))
    if Users.query.filter_by(email=email).first() is not None:
        abort(Response('Taki uzytkownik juz istnieje.'))  # existing user
    user = Users(email=email, password=password)
    user.email = email
    user.created_at = datetime.datetime.now()
    user.last_login = datetime.datetime.now()
    db.session.add(user)
    db.session.commit()
    responseObject = {
        'status': 'success',
        'message': 'Successfully registered.',
        'user_id': user.id,
    }
    return make_response(jsonify(responseObject)), 201


@application.route('/keywords', methods=['POST'])
def add_keyword():
    keyword = request.json.get('keyword')
    if keyword is None:
        abort(400)
    new_word = Keywords(keyword=keyword)
    new_word.keyword = keyword
    new_word.added_at = datetime.datetime.now()
    new_word.added_by = 1
    db.session.add(new_word)
    db.session.commit()
    responseObject = {
        'status': 'success',
        'message': 'Successfully added keyword.',
        'keyword_id': new_word.id
    }
    return jsonify({'Response': responseObject})


@application.route('/keywords', methods=['GET'])
def list_keywords():
    keywords_obj = Keywords.query.filter_by(Users.decode_auth_token())


@application.route('/keywords/{id}', methods=['DELETE'])
def remove_keyword():
    keyword = request.json.get('keyword')
    if keyword is None:
        abort(400)
    keyword_obj = Keywords.query.filter_by(keyword=keyword).first()
    if keyword_obj is None:
        abort(Response('Nie ma takiego slowa w liscie.'))  # No such word
    db.session.remove(keyword_obj)
    db.session.commit()
    responseObject = {
        'status': 'success',
        'message': 'Successfully removed keyword from list.'
    }
    return jsonify({'Response': responseObject})


@application.route('/blocks', methods=['GET'])
def list_blocked_users():
    keyword = request.json.get('keyword')
    if keyword is None:
        abort(400)
    blocked_users = BlockedUsers.query.filter_by(blocked_by=keyword)
    responseObject = {
        'status': 'success',
        'message': 'Successfully removed keyword from list.',
        'Users': blocked_users
    }
    return jsonify({'Response': responseObject})


@application.route('/blocks', methods=['POST'])
def block_user():
    name = request.json.get('name')
    if name is None:
        abort(400)
    keyword_obj = Keywords.query.filter_by(name=name).first()
    if keyword_obj is None:
        abort(Response('Nie ma takiego uzytkownika do zablokowania.'))  # No such word
    new_word = BlockedUsers
    new_word.user_name = name
    new_word.added_at = datetime.datetime.now()
    new_word.added_by = request.cookies.get('user.id')
    db.session.add(new_word)
    db.session.commit()
    responseObject = {
        'status': 'success',
        'message': 'Successfully removed keyword from list.'
    }
    return jsonify({'Response': responseObject})


@application.route('/blocks/{id}', methods=['DELETE'])
def unblock_user():
    id = request.args.get(0)
    if id is None:
        abort(400)
    blocked_user = BlockedUsers.query.filter_by(id=id).first()
    if blocked_user is None:
        abort(Response('Nie ma takiego uzytkownika na liscie zablokowanych uzytkownikow.'))
    db.session.remove(blocked_user)
    db.session.commit()
    responseObject = {
        'status': 'success',
        'message': 'Successfully unblocked user.'
    }
    return jsonify({'Response': responseObject})


@application.route('/', methods=['GET'])
def hello_world():
    return 'hello world'
