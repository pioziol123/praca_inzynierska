from datetime import datetime

from resources import db
from resources import login

class Dictionary(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    UserID = db.Column(db.Integer, db.ForeignKey('user.id'))
    Userdictionary = db.Column(db.VARCHAR)
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)

    def __repr__(self):
        return '<User {}'.format(self.Userdictionary)