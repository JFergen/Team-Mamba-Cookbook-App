from cookbookdatabase.tables.mongodb_table import MongoDbTable
from logger import log

class CommentsTable(MongoDbTable):

    def __init__(self, table):
        super().__init__('comments_table', table)

    def add_comment(self, post_id, comment):
        pass