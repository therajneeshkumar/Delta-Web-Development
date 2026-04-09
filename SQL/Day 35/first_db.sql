CREATE DATABASE _college;
CREATE DATABASE IF NOT EXISTS _college;
CREATE DATABASE IF NOT EXISTS instagram;

create database xyz_company;

DROP DATABASE xyz_company;
DROP DATABASE IF EXISTS xyz_company;

USE _college;

SHOW DATABASES;
SHOW TABLES;

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

USE instagram;

CREATE TABLE user (
	id INT,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT DEFAULT 0,
    CONSTRAINT age_check CHECK (age >= 13),
    PRIMARY KEY  (id)
);

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 14, "Adam", "adam@yahoo.in", 123, 145),
(2, 15, "Bob", "bob123@gmail.com", 200, 200),
(3, 16, "Casey", "casey@email.com", 300, 306),
(4, 17, "Donald", "donald@gmail.com", 200, 105);

-- INSERT INTO user
-- (id, age, name, email)
-- VALUES
-- (10, 12, "random", "bob123@gmail.com");

SHOW TABLES;

SELECT * FROM user;
SELECT id, name FROM user;

DROP TABLE user;

CREATE TABLE post (
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

DROP TABLE post;