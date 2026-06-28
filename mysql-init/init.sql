CREATE DATABASE IF NOT EXISTS demo_db;

USE demo_db;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO users(name)
VALUES
('Selva'),
('Docker'),
('Compose');
