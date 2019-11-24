from resources import app
from resources.forms import LoginForm
from flask import flash, redirect, render_template

@app.route('/')
def hello_world():
    return 'I am on Azure!'

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        flash('Login requested for user {}, remember_me={}'.format(
            form.username.data, form.remember_me.data))
        return redirect('/index')
    return render_template(form=form)