from cookbookdatabase.tables.mongodb_table import MongoDbTable
import cookbookdatabase.db_connection as db_connection
from logger import log
from datetime import datetime
from bson.objectid import ObjectId

class RecipesTable(MongoDbTable):

    def __init__(self, table):
        super().__init__('recipes_table', table)

    def add_recipe(self, recipe):
        recipe['date_added'] = datetime.now().strftime('%B %d, %Y %H:%M')
        insert_result = super().insert(recipe)
        log('Recipe added to the database: ' + str(recipe))
        db_connection.USERS_TABLE.add_recipe( recipe['user_id'], insert_result.inserted_id)

    def get_recipes_from_tag(self, tag):
        return super().get_all('tags', tag)

    def update_recipe(self, newRecipeData):
        recipe_id = ObjectId(newRecipeData['recipe_id'])
        del recipe['_id']

        if ('ratings' in newRecipeData.keys()):
           avg_rating = compute_rating_avg(newRecipeData['ratings'])
           newRecipeData['rating'] = avg_rating

        super().update(recipe_id, recipe)

    def delete_recipe(self, user_id, recipe_id):
        super().delete(recipe_id)
        log('Deleted recipe from database: ' + str(recipe_id))
        db_connection.USERS_TABLE.delete_recipe(user_id, recipe_id)

    def add_comment(self, recipe_id, comment_id):
        super().add_to_set(recipe_id, 'comments', comment_id)

    def get_users_recipes(self, user_id):
        return super().get_all('user_id', user_id)

    def get_n_random_recipes(self, number):
        return super().get_random_docs(number)

    def compute_rating_avg(self, ratings):
        return sum(ratings) / len(ratings)

