import sqlite3
conn = sqlite3.connect("career.db")
cursor =conn.cursor()
cursor.execute("""create table if not exists  users(
               id integer primary key
               autoincrement,
               name text,
               education text)"""
)

conn.commit()
conn.close()
