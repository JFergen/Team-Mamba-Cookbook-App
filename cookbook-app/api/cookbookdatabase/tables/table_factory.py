from cookbookdatabase.tables.table_names import USERS_TABLE_NAME, RECIPES_TABLE_NAME
from cookbookdatabase.tables.users_table import UsersTable
from cookbookdatabase.tables.recipes_table import RecipesTable
from logger import log

class TableFactory:
    __tables = {
        RECIPES_TABLE_NAME: RecipesTable,
        USERS_TABLE_NAME: UsersTable, 
    }

    @staticmethod
    def createTable(tableName, table):
        log('TableFactory.py: Creating ' + tableName)
        return TableFactory.__tables[tableName](table)