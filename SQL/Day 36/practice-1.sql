CREATE DATABASE IF NOT EXISTS _college;

USE _college;

CREATE TABLE teacher (
	id INT NOT NULL,
    name VARCHAR(50),
    subject VARCHAR(40),
    salary INT DEFAULT 0,
    PRIMARY KEY (id)
);

SHOW TABLES;

INSERT INTO teacher
(id, name, subject, salary)
VALUES
(12, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

SELECT * FROM teacher;

SELECT name, salary 
FROM teacher
WHERE salary > 55000;

ALTER TABLE teacher
CHANGE COLUMN salary ctc INT DEFAULT 0;

UPDATE teacher
SET ctc = ctc + (ctc * 0.25);

ALTER TABLE teacher
ADD COLUMN city VARCHAR(30) DEFAULT "Gurgaon";

ALTER TABLE teacher
DROP COLUMN ctc;

SELECT * FROM teacher;