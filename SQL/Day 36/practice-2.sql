USE _college;

CREATE TABLE studentInfo (
	roll_no INT NOT NULL,
    name VARCHAR(50),
    city VARCHAR(35),
    marks INT,
    PRIMARY KEY (roll_no)
);

INSERT INTO studentInfo
(roll_no, name, city, marks)
VALUES
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);

SELECT * FROM studentInfo;

SELECT * FROM studentInfo
WHERE marks > 75;

SELECT DISTINCT city
FROM studentInfo;

-- Solution by Shardha
SELECT city
FROM studentInfo
GROUP BY city;

SELECT max(marks), city
FROM studentInfo
GROUP BY city;

SELECT avg(marks) 
FROM studentInfo;

ALTER TABLE studentInfo
ADD COLUMN grade VARCHAR(2);

UPDATE studentInfo
SET grade = "O"
WHERE marks > 80;

UPDATE studentInfo
SET grade = "A"
WHERE marks > 70 AND marks <=80;

UPDATE studentInfo
SET grade = "B"
WHERE marks > 60 AND marks <=70;

SELECT * FROM studentInfo;