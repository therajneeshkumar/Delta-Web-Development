CREATE DATABASE IF NOT EXISTS deltaApp;

USE deltaApp;

CREATE TABLE temp (
	id INT PRIMARY KEY,
    username VARCHAR(25) UNIQUE,
    email VARCHAR(60) UNIQUE,
    password VARCHAR(15) NOT NULL
);

TRUNCATE TABLE user;

SELECT count(*) FROM user;