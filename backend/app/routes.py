import collections
import datetime

import flask

from flask_bcrypt import check_password_hash
from app import application, db
from flask import request, abort, jsonify, Response, make_response, Blueprint
from app import word_analyzer
from app.models.user import Users, Keywords, BlockedUsers, Comments

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
        expire_date = datetime.datetime.now()
        expire_date = expire_date + datetime.timedelta(days=90)
        res = flask.make_response(jsonify(user.id))
        res.set_cookie('userId', value=str(user.id), httponly=True, expires=expire_date)
        return res
    else:
        response_object = {
            'status': 'fail',
            'message': 'User does not exist.'
        }
        return make_response(jsonify(response_object)), 404


@application.route('/users/logout', methods=['POST'])
def logout():
    if request.cookies.get('userId') is not None:
        result = flask.make_response(jsonify('Successfully logged out'))
        result.set_cookie('userId', '', expires=0)
        return result
    else:
        return Response("Brak dostepu", status=405, mimetype='application/json')


@application.route('/user', methods=['POST'])
def register():
    email = request.json.get('username')
    password = request.json.get('password')
    repeat_password = request.json.get('repeat_password')
    if email is None:
        Response("Nalezy podac adres email", status=400, mimetype='application/json')  # missing arguments
    if password is None or repeat_password is None:
        Response("Nieprawidlowo wypelnione haslo", status=400, mimetype='application/json')
    if password != repeat_password:
        Response("Hasla sie nie zgadzaja", status=400, mimetype='application/json')
    if Users.query.filter_by(email=email).first() is not None:
        Response("Taki uzytkownik juz istnieje", status=400, mimetype='application/json')  # existing user
    user = Users(email=email, password=password)
    user.email = email
    user.created_at = datetime.datetime.now()
    user.last_login = datetime.datetime.now()
    db.session.add(user)
    db.session.commit()
    response_object = {
        'status': 'success',
        'message': 'Successfully registered.',
        'user_id': user.id,
    }
    return make_response(jsonify(response_object)), 201


@application.route('/keywords', methods=['POST'])
def add_keyword():
    user_id = request.cookies.get('userId')
    if user_id is not None:
        keyword = request.json.get('keyword')
        if keyword is None:
            Response("Zly request", status=400, mimetype='application/json')
        if Keywords.query.filter_by(added_by=user_id, word=keyword).first() is not None:
            return Response("Takie slowo juz istnieje dla podanego uzytkownika", status=400,
                            mimetype='application/json')
        new_word = Keywords(word=keyword)
        new_word.word = keyword
        new_word.added_at = datetime.datetime.now()
        new_word.added_by = request.cookies.get('userId')
        new_word.word_topic = request.json.get('word_topic')
        db.session.add(new_word)
        db.session.commit()
        responseObject = {
            'status': 'success',
            'message': 'Successfully added keyword.',
            'keyword_id': new_word.id
        }
        return jsonify({'Response': responseObject})
    else:
        return Response("Brak dostepu", status=405, mimetype='application/json')


@application.route('/keywords', methods=['GET'])
def list_keywords():
    user_id = request.cookies.get('userId')
    if user_id is not None:
        keywords_obj = Keywords.query.filter_by(added_by=str(user_id)).all()
        keywords_list = [e.serialize() for e in keywords_obj]
        return jsonify(keywords_list)
    else:
        return Response("Brak dostepu", status=405, mimetype='application/json')


@application.route('/keywords', methods=['DELETE'])
def remove_keyword():
    if request.cookies.get('userId') is not None:
        keyword = request.json.get('keyword')
        if keyword is None:
            abort(400)
        keyword_obj = Keywords.query.filter_by(word=keyword).first()
        if keyword_obj is None:
            abort(Response('Nie ma takiego slowa w liscie.'))  # No such word
        db.session.delete(keyword_obj)
        db.session.commit()
        response_object = {
            'status': 'success',
            'message': 'Successfully removed keyword from list.'
        }
        return jsonify({'Response': response_object})
    else:
        return Response("Brak dostepu", status=405, mimetype='application/json')


@application.route('/blocks', methods=['GET'])
def list_blocked_users():
    user_id = request.cookies.get('userId')
    if user_id is not None:
        blocked_users = BlockedUsers.query.filter_by(blocked_by=user_id).all()
        blocked_users_list = [e.serialize() for e in blocked_users]
        return jsonify({'Response': blocked_users_list})
    else:
        return Response("Brak dostepu", status=405, mimetype='application/json')


@application.route('/blocks', methods=['POST'])
def block_user():
    user_id = request.cookies.get('userId')
    if user_id is not None:
        name = request.json.get('user_name')
        if name is None:
            abort(400)
        query_result = BlockedUsers.query.filter_by(user_name=name, blocked_by=user_id).first()
        if query_result is not None:
            abort(Response('Taki uzytkownik juz jest zablokowany.'))  # existing user
        new_word = BlockedUsers(user_name=name, blocked_by=user_id)
        db.session.add(new_word)
        db.session.commit()
        response_object = {
            'status': 'success',
            'message': 'Successfully blocked user.',
            'blocked_user_id': new_word.id
        }
        return jsonify({'Response': response_object})
    else:
        return Response("Brak dostepu", status=405, mimetype='application/json')


@application.route('/comments_user', methods=['POST'])
def block_comment_by_user():
    user_id = request.cookies.get('userId')
    if user_id is not None:
        word_topic = request.json.get('word_topic')
        author = 'dupa'
        users = BlockedUsers.query.filter_by(blocked_by=user_id)
        users_list = [e.serialize() for e in users]
        for user in users_list:
            blocked_comment = Comments(keyword='', added_by=user_id, word_topic=word_topic, author=user)
            db.session.add(blocked_comment)
        db.session.commit()
        response_object = {
            'status': 'success',
            'message': 'Successfully blocked user.',
        }
        return Response(response_object, status=201, mimetype='application/json')
    else:
        return Response("Brak dostepu", status=405, mimetype='application/json')


@application.route('/comments_word', methods=['POST'])
def block_comment_by_keyword():
    user_id = request.cookies.get('userId')
    if user_id is not None:
        word_topic = request.json.get('word_topic')
        author = 'dupa'
        keywords_obj = Keywords.query.filter_by(added_by=user_id)
        keywords_list = [e.serialize() for e in keywords_obj]
        for keyword in keywords_list:
            blocked_comment = Comments(keyword=keyword['word'], added_by=user_id, word_topic=keyword['word_topic'], author=author)
            db.session.add(blocked_comment)
        db.session.commit()
        response_object = {
            'status': 'success',
            'message': 'Successfully blocked user.',
        }
        return Response("Success", status=201, mimetype='application/json')
    else:
        return Response("Brak dostepu", status=405, mimetype='application/json')


@application.route('/blocks', methods=['DELETE'])
def unblock_user():
    user_id = request.cookies.get('userId')
    if user_id is not None:
        blocked_user = request.json.get('blocked_user')
        if id is None:
            abort(400)
        blocked_user = BlockedUsers.query.filter_by(user_name=blocked_user, blocked_by=user_id).first()
        if blocked_user is None:
            abort(Response('Nie ma takiego uzytkownika na liscie zablokowanych uzytkownikow.'))
        db.session.delete(blocked_user)
     #  db.session.query(Comments).filter(Comments.author == blocked_user).delete()
        db.session.commit()
        response_object = {
            'status': 'success',
            'message': 'Successfully unblocked user.'
        }
        return jsonify({'Response': response_object})
    else:
        return Response("Brak dostepu", status=405, mimetype='application/json')


@application.route('/detection', methods=['GET'])
def suggest_word():
    #Initialization for appending string
    words_list = ""
    user_id = request.cookies.get('userId')
    same_word_count = 4
    word = request.json.get('word')
    if user_id is not '':
        keywords_obj = Keywords.query.filter_by(added_by=user_id)
        keywords_list = [e.serialize() for e in keywords_obj]
        words_topic = []
        for keyword in keywords_list:
            comments = Comments.query.filter_by(keyword=keyword['word']).filter(Comments.added_by != user_id)
            comments_list = [e.serialize() for e in comments]
            words_topic = words_topic + comments_list
        #here goes grouping for words topic
        words_grouped = {}
        for item in words_topic:
            if str(item['keyword']) not in words_list:
                words_list += str(item['keyword']) + " "
                words_grouped[item['word_topic']] = words_list
        words_count = len(keywords_list)
        word_analyzer.write_data(words_grouped, word)
        return 'dupa'


@application.route('/', methods=['GET'])
def hello_world():
    return 'hello world'
