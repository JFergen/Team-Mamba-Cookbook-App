from flask import Flask, request
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
import logging
import json
from bson.json_util import dumps
from logging.handlers import RotatingFileHandler
from cookbookdatabase.db_connection import DatabaseConnection
from cookbookdatabase.tables.table_names import *
import sys
import requests

app = Flask(__name__)

handler = RotatingFileHandler('log.log', maxBytes=10000, backupCount=1)
handler.setLevel(logging.INFO)
app.logger.addHandler(handler)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


# mongoClient = MongoClient('mongodb+srv://aaron:Fcdallas28%23@cluster0.h9bru.mongodb.net/Cookbook?retryWrites=true&w=majority')
# db = mongoClient.get_database('Cookbook')


dbConnection = DatabaseConnection.getInstance()
# names_col = dbConnection.getTable('users_table')


# @app.route('/addUser/<user>/')
# def addUser(user):
#     names_col.insert_one({"user": user.lower()})
#     return redirect(url_for('getUsers'))

# @app.route('/getUsers/')
# def getUsers():
#     names_json = []
#     if names_col.find({}):
#         for name in names_col.find({}).sort("user"):
#             names_json.append({"user": name['user'], "id": str(name['_id'])})
#     return json.dumps(names_json)

@app.route('/getAllRecipes/')
def getAllRecipes():
    return dumps(dbConnection.getTable(RECIPES_TABLE_NAME).find({}))

@app.route('/addRecipe/', methods=['POST'])
def addRecipe():
    body = request.get_json()
    dbConnection.getTable(RECIPES_TABLE_NAME).insert_one(body)
    return "ok", 200

if __name__ == "__main__":
    app.run(debug=True)
  