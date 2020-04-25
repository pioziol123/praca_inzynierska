import datetime

from flask_bcrypt import check_password_hash
from app import application, db
from flask import request, abort, jsonify, Response, make_response, Blueprint

from app.models.user import Users, Keywords, BlacklistToken


auth_blueprint = Blueprint('auth', __name__)

@application.shell_context_processor
def make_shell_context(self):
    return {'User': Users, 'Keywords': Keywords}


@application.route('/login', methods=['POST'])
def login():
    email = request.json.get('username')
    password = request.json.get('password')
    user = Users.query.filter_by(
        email=email
    ).first()
    if user and check_password_hash(
            user.password, password
    ):
        auth_token = user.encode_auth_token(user.id)
        if auth_token:
            responseObject = {
                'status': 'success',
                'message': 'Successfully logged in.',
                'auth_token': auth_token.decode()
            }
            return make_response(jsonify(responseObject)), 200
    else:
        responseObject = {
            'status': 'fail',
            'message': 'User does not exist.'
        }
        return make_response(jsonify(responseObject)), 404




@application.route('/logout', methods=['POST'])
def logout():
    # get auth token
    auth_header = request.headers.get('Authorization')
    if auth_header:
        auth_token = auth_header
    else:
        auth_token = ''
    if auth_token:
        resp = Users.decode_auth_token(auth_token)
        if not isinstance(resp, str):
            # mark the token as blacklisted
            blacklist_token = BlacklistToken(token=auth_token)
            try:
                # insert the token
                db.session.add(blacklist_token)
                db.session.commit()
                responseObject = {
                    'status': 'success',
                    'message': 'Successfully logged out.'
                }
                return make_response(jsonify(responseObject)), 200
            except Exception as e:
                responseObject = {
                    'status': 'fail',
                    'message': e
                }
                return make_response(jsonify(responseObject)), 200
        else:
            responseObject = {
                'status': 'fail',
                'message': resp
            }
            return make_response(jsonify(responseObject)), 401
    else:
        responseObject = {
            'status': 'fail',
            'message': 'Provide a valid auth token.'
        }
        return make_response(jsonify(responseObject)), 403


@application.route('/user', methods=['POST'])
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
    user = Users(email=email, password=password)
    user.email = email
    user.created_at = datetime.datetime.now()
    user.last_login = datetime.datetime.now()
    db.session.add(user)
    db.session.commit()
    auth_token = user.encode_auth_token(user.id)
    responseObject = {
        'status': 'success',
        'message': 'Successfully registered.',
        'auth_token': auth_token.decode()
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
    db.session.add(new_word)
    db.session.commit()
    responseObject = {
        'status': 'success',
        'message': 'Successfully added keyword.'
    }
    return jsonify({'Response': responseObject})

@application.route('/keywords', methods=['GET'])
def list_keywords():
    uname = request.form['uname']
    mail = request.form['mail']
    passw = request.form['passw']


@application.route('/keywords/{id}', methods=['DELETE'])
def remove_keyword(self):
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

@application.route('/', methods=['GET'])
def hello_world():
    return 'hello world'