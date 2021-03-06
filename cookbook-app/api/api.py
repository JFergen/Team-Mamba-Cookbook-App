from flask import Flask, request, g
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
from logger import log
import json
from bson.json_util import dumps
import cookbookdatabase.db_connection as db_connection
from cookbookdatabase.tables.table_names import *

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/getAllRecipes/')
def getAllRecipes():
    return dumps(db_connection.getTable(RECIPES_TABLE_NAME).getAll())

@app.route('/login/', methods=['POST'])
def login():
    user_info = request.get_json()
    db_connection.USERS_TABLE.login(user_info)
    return 'ok', 200

@app.route('/addRecipe/', methods=['POST'])
def addRecipe():
    recipe = request.get_json()
    db_connection.RECIPES_TABLE.add_recipe(recipe)
    return 'ok', 200

@app.route('/deleteRecipe/<recipe>', methods=['DELETE'])
def deleteRecipe(recipe):
    recipe = json.loads(recipe)
    db_connection.RECIPES_TABLE.delete_recipe(recipe['user_id'], recipe['recipe_id'])
    return 'ok', 200


if __name__ == "__main__":
    app.run(debug=True)
  