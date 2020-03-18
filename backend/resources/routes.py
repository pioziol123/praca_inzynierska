from flask_sqlalchemy import SQLAlchemy
from pip._vendor.requests.auth import HTTPBasicAuth

from resources import app, db
from resources.forms import LoginForm
from flask import flash, redirect, render_template, request, abort, jsonify, url_for

### Endpoints
# 1. '/'
# 2. '/login' (method = GET)
# 3. '/toggle
# 4. '/fetch_words (method = GET)
# 5.
from resources.models.models import User


# extensions
db = SQLAlchemy(app)
auth = HTTPBasicAuth()


@app.route('/')
def hello_world():
    return 'I am on Azure!'


@app.route('/login', method='POST')
def login():
    form = LoginForm()
    if form.validate_on_submit():
        flash('Login requested for user {}, remember_me={}'.format(
            form.username.data, form.remember_me.data))
        return redirect('/index')
    return render_template(form=form)


@app.route('/logout', method='POST')
def logout():
    return 'dupa'


@app.route('/user', method='POST')
def register():
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
    return jsonify({'username': user.username}), 201, {'Location': url_for('get_user', id =user.id, _external=True)}


@app.route('/keywords', method='POST')
def add_keyword():
    return 'aa'


@app.route('/keywords', method='GET')
def list_keywords():
    uname = request.form['uname']
    mail = request.form['mail']
    passw = request.form['passw']


@app.route('/keywords/{id}', method='DELETE')
def remove_keyword():
    return 'success'
