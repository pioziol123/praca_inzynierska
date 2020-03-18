from flask import Flask
from flask_jwt_extended import JWTManager

from resources import db
from resources.models.models import User, Dictionary

app = Flask(__name__)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy dog'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True


@app.shell_context_processor
def make_shell_context():
    return {'db' : db, 'User' : User, 'Dictionary' : Dictionary}

if __name__ == '__main__':
    app.run()





