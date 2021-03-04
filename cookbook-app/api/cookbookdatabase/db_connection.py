from pymongo import MongoClient
from cookbookdatabase.tables.table_names import TABLE_NAMES, COOKBOOK_DATABASE_NAME
from cookbookdatabase.credentials import DB_CONNECTION_URI

class DatabaseConnection:
    __theInstance = None

    __mongoClient = MongoClient(DB_CONNECTION_URI)
    __db = __mongoClient.get_database(COOKBOOK_DATABASE_NAME)

    __cookbookTables = None 

    @staticmethod
    def getInstance():
        if DatabaseConnection.__theInstance == None:
            return DatabaseConnection()
        else:
            return DatabaseConnection.__theInstance

    def __init__(self):
        if DatabaseConnection.__theInstance != None:
            raise Exception("This class is a singleton. Use getInstance() instead.")
        else:
            self.__initializeTables()
            DatabaseConnection.__theInstance = self

    def __initializeTables(self):
        self.__cookbookTables = { table_name: self.__db.get_collection(table_name) for table_name in TABLE_NAMES }

    def getTable(self, table_name):
        return self.__cookbookTables[table_name]