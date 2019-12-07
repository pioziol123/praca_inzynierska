
from resources import app, db
from resources.models import User, Dictionary


@app.shell_context_processor
def make_shell_context():
    return {'db' : db, 'User' : User, 'Dictionary' : Dictionary}

if __name__ == '__main__':
    app.run()





