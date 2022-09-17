# I'm migrating my portfolio in Flask now because it's easy to handle pages and scale everything

from flask import Flask, render_template
from flaskwebgui import FlaskUI
from flask import current_app, g
import os
import sqlite3

app = Flask(__name__, template_folder='./portfolio/templates', static_folder='./portfolio/static')

@app.route('/index.html')
def index():
    return render_template('index.html')

@app.route('/gnupg.html')
def gnupg():
    return render_template('gnupg.html')

if __name__ == "__main__":
    app.run(debug=True)

