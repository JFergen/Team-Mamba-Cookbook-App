from flask import Flask, request, g
from pymongo import MongoClient
from flask_cors import CORS, cross_origin
from logger import log
import json
from bson.json_util import dumps
from bson.objectid import ObjectId
import cookbookdatabase.db_connection as db_connection
from cookbookdatabase.tables.table_names import *

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/getRecipesFromTag/<tag>', methods=['GET'])
def get_recipes_from_tag(tag):
  return db_connection.RECIPES_TABLE.get_recipes_from_tag(tag)


# Users Table

@app.route('/login/', methods=['POST'])
def login():
    user_info = request.get_json()

    db_connection.USERS_TABLE.login(user_info)

    return 'ok', 200


@app.route('/deleteUser/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    db_connection.USERS_TABLE.delete_user(user_id)

    return 'ok', 200

@app.route('/deleteComment/<comment_id>', methods=['DELETE'])
def delete_comment(comment_id):
    db_connection.COMMENTS_TABLE.delete_comment(comment_id)

    return 'ok', 200

# End Users Table


# Recipes Table

@app.route('/addRecipe/', methods=['POST'])
def add_recipe():
    recipe = request.get_json()

    db_connection.RECIPES_TABLE.add_recipe(recipe)

    return 'ok', 200
    


@app.route('/updateRecipe/', methods=['POST'])
def update_recipe():
    recipe = request.get_json()

    db_connection.RECIPES_TABLE.update_recipe(recipe)

    return 'ok', 200

# @app.route('/updateComment/', methods=['POST'])
# def update_comment():
#     comment = request.get_json()

#     db_connection.COMMENTS_TABLE.update_comment(comment)

#     return 'ok', 200

# @app.route('/getRecipeComments/<recipe_id>', methods=['GET'])
# def get_recipe_comments(recipe_id):
#   return db_connection.COMMENTS_TABLE.get_recipe_comments(recipe_id)


@app.route('/getUsersRecipes/<user_id>', methods=['GET'])
def get_users_recipes(user_id):
  return db_connection.RECIPES_TABLE.get_users_recipes(user_id)


# @app.route('/get5RandomRecipes/<number>', methods=['GET'])
# def get_5_random_recipes(number):
#   return db_connection.RECIPES_TABLE.get_5_random_recipes(int(number))
    


@app.route('/deleteRecipe/<recipe>', methods=['DELETE'])
def delete_recipe(recipe):
    recipe = json.loads(recipe)

    user_id = recipe['user_id']
    recipe_id = ObjectId(recipe['recipe_id'])

    db_connection.RECIPES_TABLE.delete_recipe(user_id, recipe_id)

    return 'ok', 200

# End Recipes Table



# Comments Table

@app.route('/addComment/', methods=['POST'])
def add_comment():
    comment = request.get_json()

    db_connection.COMMENTS_TABLE.add_comment(comment)

    return 'ok', 200

# end Comments Table

if __name__ == "__main__":
    app.run(debug=True)