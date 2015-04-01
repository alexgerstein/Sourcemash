import os
from flask import Flask

def create_app(env=None):
	app = Flask(__name__, instance_relative_config=True,
				template_folder='frontend/templates',
				static_folder='frontend/static')

	# Load the default configuration
	app.config.from_object('config.default')

	# Load the configuration from the instance folder
	app.config.from_pyfile('config.py', silent=True)

	# Load the file specified by the APP_CONFIG_FILE environment variable
	# Variables defined here will override those in the default configuration
	env_config_file = os.environ.get('APP_CONFIG_FILE') or env

	if env_config_file:
	    app.config.from_object('config.%s' % env_config_file)

	from sourcemash.api import bp as api_bp
	app.register_blueprint(api_bp)

	# SQLAlchemy Database
	from sourcemash.database import db, user_datastore, security, migrate
	db.init_app(app)
	db.app = app
	migrate.init_app(app, db)

	security.init_app(app, user_datastore)

	# Frontend Components (Flask-Assets)
	from sourcemash.frontend import frontend, assets
	app.register_blueprint(frontend.bp)
	assets.init_app(app)

	return app
