from cookbookdatabase.tables.mongodb_table import MongoDbTable
from bson.objectid import ObjectId
from logger import log

class UsersTable(MongoDbTable):

    def __init__(self, table):
        super().__init__("users_table", table)

    def login(self, user):
        user_id = user['googleId']

        if not super().does_id_exist(user_id):
            self.add_user(user)

    def get_user(self, user_id):
        return super().find('user_id', user_id)

    def add_user(self, new_user):
        new_user['_id'] = new_user['googleId']
        del new_user['googleId']
        log('User added to the database: ' + str(new_user))
        super().insert(new_user)

    def follow(self, follower_id, leader_id):
        super().add_to_set(follower_id, 'followingList', leader_id)
        super().add_to_set(leader_id, 'followerList', follower_id)

    def unfollow(self, follower_id, leader_id):
        super().delete_from_set(follower_id, 'followingList', leader_id)
        super().delete_from_set(leader_id, 'followerList', follower_id)

    def add_recipe(self, user_id, recipe_id):
        super().add_to_set(user_id, 'recipes', recipe_id)

    def delete_recipe(self, user_id, recipe_id):
        super().delete_from_set(user_id, 'recipes', recipe_id)


    def modify(self):
        pass

    def delete_user(self, user_id):
        super().delete(user_id)