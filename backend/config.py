# edit the URI below to add your RDS password and your AWS URL
# The other elements are the same as used in the tutorial
# format: (user):(password)@(db_identifier).amazonaws.com:3306/(db_name)

SQLALCHEMY_DATABASE_URI = 'mysql://root:R5bSxurJxkHL7E32voVFSHicUtPtawox7hnMiGtPX@database-2.cqb08tr5s18b.eu-central-1.rds.amazonaws.com:3306/backendDb'

SQLALCHEMY_POOL_RECYCLE = 3600

WTF_CSRF_ENABLED = True
SECRET_KEY = 'dsaf0897sfdg45sfdgfdsaqzdf98sdf0a'