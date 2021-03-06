from pymongo import MongoClient
from cookbookdatabase.tables.table_names import TABLE_NAMES, COOKBOOK_DATABASE_NAME
from cookbookdatabase.tables.recipes_table import RecipesTable
from cookbookdatabase.tables.users_table import UsersTable
from cookbookdatabase.tables.comments_table import CommentsTable
from cookbookdatabase.credentials import DB_CONNECTION_URI

from logger import log

# class DatabaseConnection:
#     __theInstance = None

#     __mongoClient = MongoClient(DB_CONNECTION_URI)
#     __db = __mongoClient.get_database(COOKBOOK_DATABASE_NAME)

#     __cookbookTables = None

#     @staticmethod
#     def getInstance():
#         if DatabaseConnection.__theInstance == None:
#             return DatabaseConnection()
#         else:
#             return DatabaseConnection.__theInstance

#     def __init__(self):
#         if DatabaseConnection.__theInstance != None:
#             raise Exception("This class is a singleton. Use getInstance() instead.")
#         else:
#             self.__initializeTables()
#             DatabaseConnection.__theInstance = self

#     def __initializeTables(self):
#         print('initializing tables', file=sys.stderr)
#         self.__cookbookTables = { table_name: TableFactory.createTable(table_name, self.__db.get_collection(table_name)) for table_name in TABLE_NAMES }

__MONGO_CLIENT = MongoClient(DB_CONNECTION_URI)

log('Connected to Database')

__DB = __MONGO_CLIENT.get_database(COOKBOOK_DATABASE_NAME)

USERS_TABLE = UsersTable( __DB.get_collection('users_table') )

RECIPES_TABLE = RecipesTable( __DB.get_collection('recipes_table') )

COMMENTS_TABLE = CommentsTable( __DB.get_collection('comments_table') )
