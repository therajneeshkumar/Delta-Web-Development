# SQL Language

- A **schema** is a blueprint or framework that defines how data is organized, stored and managed.

## Database

- It is a collection of data in a format that can be easily accessed.

### Why Databases

- Can store large data.
- Features like security, scalability etc.
- Easier to insert, update, delete or search data.

---

## SQL v/s NoSQL

### SQL

- Relational Database (data stored in Tables(Relation))
- Example : MySQL, Orale, PostgreSQL etc.

### NoSQL

- Non Relational Database (data stored in document/key-value/graphs etc.)
- Example : MongoDB, Cassandra, Neo4j etc.

---

## SQL (Structured Query Language)

- SQL is a programming language used to interact with the relational databases.

---

## Database Queries

- **`CREATE`** **DATABASE** *db_name*;
  - If database exist than throw an error ***database exist***.
- **`DROP`** **DATABASE** *db_name*;
  - If database not exist than throw an error ***database doesn't exist***.
- **`CREATE`** **DATABASE IF NOT EXISTS** *db_name*;
  - If database exist than throw an warning ***can't create database, already exist***.  Otherwise create a new database.
- **`DROP`** **DATABASE IF EXISTS** *db_name*;
  - If database not exist than throw an warning ***can't drop database, doesn't exist***.  Otherwise delete a database.
- **`USE`** *db_name*;
  - Used to select a database for work.

```sql
-- Used to Create a new database
CREATE DATABASE db_name;
-- Used to Delete an existing database
DROP DATABASE db_name;
-- Used for working on a database
USE db_name;
-- Used to create database in existing or not-existing condition
CREATE DATABASE IF NOT EXISTS db_name;
-- Used to drop database in existing or not-existing condition
DROP DATABASE IF EXISTS db_name;
-- Used to show all databases in a server
SHOW DATABASES;
-- Used to show all tables in a database, before use this - select a database
SHOW TABLES;
```

- ***Example***

```sql
CREATE DATABASE _college;
create database xyz_company;
DROP DATABASE xyz_company;
USE _college;

CREATE DATABASE IF NOT EXISTS _college;
CREATE DATABASE IF NOT EXISTS instagram;
```

## Tables in SQL

- **Table** is known as ***Relation*** or ***Schema***.
- **Row** is known as ***Tuple*** or ***Record***.
- **Column** is known as ***Attribute*** or ***Field***.

- ***Syntax***

```sql
-- Used to create Tables
CREATE TABLE table_name (
    column_name1 datatype constraint,
    column_name2 datatype constraint,
    column_name3 datatype constraint
);
```

- ***Example***

```sql
CREATE TABLE student (
    rollno INT,
    name VARCHAR(30),
    age INT
);

INSERT INTO student
VALUES
(101, "adam", 12),
(102, "bob", 14);

SELECT * FROM student;
```

### Table Queries

- **CREATE** : Used to create a new table.
- **INSERT** : Used to insert data into table's row(record/tuple).
- **UPDATE** : Used to update existing rows.
- **ALTER** : Used to change the schema.
- **TURNCATE** : Used to delete table's data.
- **DELETE** : Used to delete existing rows.

- ***Syntax***

```sql
-- Create Table (Schema/Columns)
CREATE TABLE table_name1 (
    column_name1 datatype constraint,
    column_name2 datatype constraint,
    CONSTRAINT variable_name CHECK (condition);
);

CREATE TABLE table_name2 (
    column_name3 datatype constraint,
    column_name4 datatype constraint,
    -- CONSTRAINT variable_name CHECK (condition);
    FOREIGN KEY (column_name3) REFERENCES table_name1(column_name1)
);

-- Insert Data in a table
INSERT INTO table_name
(column_name1, column_name2)
VALUES
(Col1_V1, Col2_V1),
(Col1_V2, Col2_V2);

-- Update table
UPDATE table_name
SET col1 = val1, col2 = val2
WHERE condition;

-- Delete existing row
DELETE FROM table_name
WHERE condition;
```

- Order is most important when we **insert data** in a date. Values order must be followed by the column's requirement.
- When we want to **update data** first time then we get an error. To solve this error we run **`SET SQL_SAFE_UPDATES = 0;`** command. After that if we want to safe mode again then run **`SET SQL_SAFE_UPDATES = 1;`** this command.

- ***Example***

```sql
USE instagram;

CREATE TABLE user (
    id INT,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT DEFAULT 0,
    CONSTRAINT age_check CHECK (age >= 30)
);

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 14, "Adam", "adam@yahoo.in", 123, 145),
(2, 15, "Bob", "bob123@gmail.com", 200, 200),
(3, 16, "Casey", "casey@email.com", 300, 306),
(4, 17, "Donald", "donald@gmail.com", 200, 105);

SELECT id, name FROM user;
SELECT * FROM user;

CREATE TABLE post (
    id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

UPDATE user
SET followers = 600
WHERE age = 16;
-- Used to turn off safe update mode
SET SQL_SAFE_UPDATES = 0;

DELETE FROM user
WHERE age = 14;
```

### ***ALTER Queries & TURNCATE***

- ***Syntax***

```sql
-- ADD Column
ALTER TABLE table_name
ADD COLUMN column_name datatype constraint;

-- DROP Column
ALTER TABLE table_name
DROP COLUMN column_name;

-- RENAME Table
ALTER TABLE table_name
RENAME TO new_table_name;

-- CHANGE Column (rename)
ALTER TABLE table_name
CHANGE COLUMN old_name new_name new_datatype new_constraint;

-- MODIFY Column (modify datatype/constraint)
ALTER TABLE table_name
MODIFY col_name new_datatype new_constraint;

-- TURNCATE Table's Data
TRUNCATE TABLE table_name;
```

- **DROP** : Delete the whole table with data from databse.
- **TRUNCATE** : Table exist in databse after deleting the whole data from table.

- ***Example***

```sql
-- ADD a Column
ALTER TABLE user
ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";

-- DROP a Column
ALTER TABLE user
DROP COLUMN city;

SELECT * FROM user;

-- RENAME a exixting table
ALTER TABLE user
RENAME TO instaUser;

SELECT * FROM instaUser;

ALTER TABLE instaUser
RENAME TO user;

-- CHANGE Column (rename)
ALTER TABLE user
CHANGE COLUMN followers subs INT DEFAULT 0;

-- MODIFY Column (modify datatype/constraint)
ALTER TABLE user
MODIFY subs INT DEFAULT 5;

INSERT INTO user
(id, age, name, email, following)
VALUES
(5, 14, "Eve", "eve@yahoo.in", 145);

SELECT * FROM user;

DROP TABLE post;
-- TURNCATE Table/ Data
TRUNCATE TABLE user;

SELECT * FROM user;
```

---

## Data Types

| DATATYPE |                              DESCRIPTION                          |     USAGE   |
|----------|-------------------------------------------------------------------|-------------|
| CHAR     | string(0-255), can store characters of fixed length               | CHAR(50)    |
| VARCHAR  | string(0-255), can store characters up to given length            | VARCHAR(50) |
| BLOB     | string(0-65535), can store binary large object                    | BLOB(100)   |
| INT      | integer (-2,147,483,648 to 2,147,483,647)                         | INT         |
| TINYINT  | integer (-128 to 127)                                             | TINYINT     |
| BIGINT   | integer(-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)  | TINYINT     |
| BIT      | can store x-bit values. x can range from 1 to 64                  | BIT(2)      |
| FLOAT    | Decimal number - with precision to 23 digits                      | FLOAT       |
| DOUBLE   | Decimal number - with 24 to 53 digits                             | DOUBLE      |
| BOOLEAN  | Boolean values 0 or 1                                             | BOOLEAN     |
| DATE     | date in format of YYYY-MM-DD ranging from 1000-01-01 to 9999-12-31| DATE        |
| YEAR     | year in 4 digits format ranging from 1901 to 2155                 | YEAR        |

---

## Constraints

- Rules for data in the table.
- **NOT NULL** : Columns cannot have a null value.
- **UNIQUE** : All values in column are different.
- **DEFAULT** : Sets the default value of a column.
- **CHECK** : It can limit the values allowed in a column.

- ***Syntax***

```sql
column_name datatype constraint;
-- conditon should be single or multiple with operators(and, or, not). Variable_name is optional.
CONSTRAINT variable_name CHECK (condition);
```

- ***Example***

```sql
-- not null constraint
age INT NOT NULL,
-- unique constraint
email VARCHAR(50) UNIQUE,
-- default constraint
salary INT DEFAULT 15000,
-- check constraint
CONSTRAINT age_check CHECK (age >= 25 AND city="Delhi")
```

---

## Keys (Key Constraints)

- Keys are special columns in a table.

### Primary Key

- It is a column (or set of columns) in a table that uiquely identifiers each row (a uique id).
- There is only **1 PK** & it sholuld be ***NOT NULL***.

  > **In short :** Used to make a column unique & not null but used only for one.

### Foreign key

- A foreign key is a column (or set of columns) in a table that refers to the primary key in another table.
- **FKs** can have **duplicate** & **null** values.
- There can be multiple FKs.

  > Used to prevent actions the would destory links brtween tables.

- ***Syntax***

```sql
-- first method to make primary key
column_name datatype PRIMARY KEY,

-- second method to make primary key
column_name datatype,
PRIMARY KEY (column_name),

-- method to make foreign key
column_name_FT datatype,
FOREIGN KEY (column_name_FT) REFERENCES second_table(column_name_ST)

```

- ***Example***

```sql
CREATE TABLE table1 (
    id INT,
    PRIMARY KEY (id),
    name VARCHAR(50)
);


CREATE TABLE table2 (
    id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES table1(id)
);
```

### Visualising our tables

- First select **database** from top menu.
- Select **Reverse Engineer** or use **`ctrl + R`**.
- Select **stored connection** and press **next** then enter **password**.
- Select **Schema/databse** and press **next** then enter **password**.
- Finally press **execute**. and press **next** then press **Finish**.

  > ***NOTE :*** The diagram is shown is known as **ER Diagram** in database language. And the **Tables** are known as **Relation**.

---

## SELECT Command

- Used to select & show data from the DB (Databse).
- If a column have multiple same values then we can get a single value for all as unique value by using **DISTINCT** keyword before column name.

- ***Syntax***

```sql
-- Selects specific columns & data
SELECT col1, col2 FROM table_name;
-- Select to show all(*) columns & data
SELECT * FROM table_name;
-- Select with distinct(unique) values
SELECT DISTINCT column_name FROM table_name;
```

---

## Clauses

### ***WHERE Clause***

- Used to define some conditions.

- ***Syntax***

```sql
SELECT columns/(*) FROM table_name
WHERE conditions;
```

- ***Example***

```sql
USE instagram;

SELECT * FROM user
WHERE followers >= 200;

SELECT name, age FROM user
WHERE age < 16;

SELECT name, age, followers FROM user
WHERE age > 15 AND followers > 200;

SELECT name, age, followers FROM user
WHERE age > 15 OR followers > 200;

SELECT name, age, followers FROM user
WHERE age BETWEEN 15 AND 17;

SELECT name, email, followers FROM user
WHERE email IN ("donald@gmail.com", "bob123@gmail.com", "abc@gmail.com");

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(5, 14, "Eve", "eve@yahoo.in", 400, 145),
(6, 16, "Farah", "farah@gmail.com", 10000, 1000);

SELECT name, age, email, followers FROM user
WHERE age IN (14, 16);

SELECT name, age, email, followers FROM user
WHERE age NOT IN (14, 16);
```

### ***LIMIT Clause***

- Sets an upper limit on number of (tuples) rows to be returned.

- ***Syntax***

```sql
SELECT columns/all(*) FROM table_name
LIMIT number;
```

- ***Example***

```sql
SELECT name, age, email FROM user
WHERE age > 14
LIMIT 2;

SELECT name, age, email FROM user
LIMIT 3;
```

### ***ORDER BY Clause***

- To sort in ascending (ASC) or descending order (DESC).
- By default order is ascending (ASC).

- ***Syntax***

```sql
SELECT columns/all(*) FROM table_name
ORDER BY column_name(s) ASC;
```

- ***Example***

```sql
SELECT name, age, followers FROM user
ORDER BY followers;

SELECT name, age, followers FROM user
ORDER BY followers ASC;

SELECT name, age, followers FROM user
ORDER BY followers DESC;
```

### ***GROUP BY Clause***

- Groups rows that have the same values into summary rows.
- It collects data from multiple records and groups the result by one or more column.

  > **NOTE :** Generally we use ***group by*** with some aggregate function.

- ***Syntax***

```sql
SELECT columns 
FROM table_name
GROUP BY column_name(s);
```

- ***Example***

```sql
SELECT count(id)
FROM user
GROUP BY age;

SELECT age, max(followers)
FROM user
GROUP BY age;

SELECT name, age, max(followers)
FROM user
GROUP BY age;
```

- We can take only those columns, which are used to making group. Otherwise we got an error. BUt we can take another column inside the aggregate function.

### ***HAVING Clause***

- Similar to Where i.e. applies some conditions on rows.
- But it is used when we want to apply any **condition after grouping**.
- ***WHERE*** is for the table, ***HAVING***is for a group.
- Grouping is necessary for ***HAVING***.

- ***Syntax***

```sql
SELECT cloumns
FROM table_name
GROUP BY column_name(s)
HAVING condition;
```

- ***Example***

```sql
SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200;

-- General Order
SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200
ORDER BY age DESC;
```

---

## Operators

- **Arithmetic Operator :**
  - Addition (+)
  - Subtraction (-)
  - Multiplication (*)
  - Division (/)
  - Modulus (%)

- **Comparison Operator :**
  - Equal to (=)
  - Not Equal to (!=)
  - Greater than (>)
  - Less than (<)
  - Greater than Equal to (>=)
  - Less than Equal to (<=)

- **Logical Operator :**
  - ***AND :*** Used to check for both conditions to be true.
  - ***OR :*** Used to check for one of the conditions to be true.
  - ***NOT :*** Used to negate the given condition.
  - ***IN :*** Used to match any value in the list.
  - ***BETWEEN :*** Used to select for a given range.
  - ALL
  - LIKE
  - ANY

- **Bitwise Operator :**
  - ***& (Bitwise AND)***

  | first_operand | second_operand | Result |
  |---------------|----------------|--------|
  |       0       |         0      |    0   |
  |       0       |         1      |    0   |
  |       1       |         0      |    0   |
  |       1       |         1      |    1   |

  - ***| (Bitwise OR)***

  | first_operand | second_operand | Result |
  |---------------|----------------|--------|
  |       0       |         0      |    0   |
  |       0       |         1      |    1   |
  |       1       |         0      |    1   |
  |       1       |         1      |    1   |

---

## Aggregate Functions

- Aggregate functions perform a calculation on a set of values and return a single value.
- ***COUNT()***
- ***MAX()***
- ***MIN()***
- ***SUM()***
- ***AVG()***

- ***Syntax***

```sql
SELECT aggregate_function(column_name)
FROM table_name;
```

- ***Example***

```sql
SELECT max(followers)
FROM user;

SELECT count(age)
FROM user
WHERE age = 14;

SELECT avg(age)
FROM user;

SELECT sum(followers)
FROM user;
```

---

## General Order

```sql
SELECT cloumns
FROM table_name
WHERE condition
GROUP BY columns
HAVING condition
ORDER BY columns_name ASC/DESC;
```

---
