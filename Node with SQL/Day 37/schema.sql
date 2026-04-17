SHOW TABLES;

CREATE TABLE IF NOT EXISTS user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

-- SELECT * FROM temp; 

TRUNCATE TABLE user;

SELECT count(*) FROM user;

INSERT INTO user VALUES ("96", "_Abhishek", "abhishek@gmail.com", "kshg985$_!kjshfk");

-- INSERT INTO user VALUES ("123b", "123b", "abc@gmail.comb", "kshg985$_!kjshfk");

-- DELETE FROM user
-- WHERE id = "123b"; 

-- DELETE FROM user
-- WHERE id = "123c"; 