from mongodb_table import MongoDbTable
from table_names import USERS_TABLE_NAME

class UsersTable(MongoDbTable):

    def __init__(self):
        super().__init__(USERS_TABLE_NAME)

    def insert(self):
        pass

    def modify(self):
        pass

    def remove(self):
        pass