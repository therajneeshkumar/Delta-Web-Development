-- Day 35 Practice

USE instagram;

-- Use this when You do practice after Day 36

-- INSERT INTO user
-- (id, age, name, email, followers, following)
-- VALUES
-- (1, 14, "Adam", "adam@yahoo.in", 123, 145),
-- (2, 15, "Bob", "bob123@gmail.com", 200, 200),
-- (3, 16, "Casey", "casey@email.com", 300, 306),
-- (4, 17, "Donald", "donald@gmail.com", 200, 105);

-- CREATE TABLE post (
-- 	id INT PRIMARY KEY,
--     content VARCHAR(100),
--     user_id INT,
--     FOREIGN KEY (user_id) REFERENCES user(id)
-- );

INSERT INTO post 
(id, content, user_id)
VALUES
(101, "Hello World", 3),
(202, "Bye Bye", 1),
(303, "Hello Delta", 3);

SHOW TABLES;
TRUNCATE TABLE post;

SELECT * FROM post;