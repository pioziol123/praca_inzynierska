# edit the URI below to add your RDS password and your AWS URL
# The other elements are the same as used in the tutorial
# format: (user):(password)@(db_identifier).amazonaws.com:3306/(db_name)

APP_DEBUG = True

SQLALCHEMY_DATABASE_URI = 'mysql://root:secret@localhost:3306/mySchema'

SQLALCHEMY_POOL_RECYCLE = 3600

SESSION_COOKIE_SECURE = True
REMEMBER_COOKIE_SECURE = True

WTF_CSRF_ENABLED = True
SECRET_KEY = 'dsaf0897sfdg45sfdgfdsaqzdf98sdf0a'