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

SELECT * FROM user;

SELECT name, age, email FROM user
WHERE age > 14
LIMIT 2;

SELECT name, age, email FROM user
LIMIT 3;

SELECT name, age, followers FROM user
ORDER BY followers ASC;

SELECT name, age, followers FROM user
ORDER BY followers DESC;

SELECT max(followers)
FROM user;

SELECT count(age)
FROM user
WHERE age = 14;

SELECT avg(age)
FROM user;

SELECT sum(followers)
FROM user;

SELECT count(id)
FROM user
GROUP BY age;

SELECT age, max(followers)
FROM user
GROUP BY age;

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200
ORDER BY age DESC;

-- UPDATE Table Data
UPDATE user
SET followers = 600
WHERE age = 16;

SET SQL_SAFE_UPDATES = 0;

-- DELETE a tuple(row)
DELETE FROM user
WHERE age = 14;

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

-- TURNCATE Table's Data
TRUNCATE TABLE user;

SELECT * FROM user;

DROP TABLE post;