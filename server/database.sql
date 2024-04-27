CREATE DATABASE reddit;

CREATE TABLE post(
    post_id SERIAL PRIMARY KEY,
    community varchar(200),
    title varchar(255),
    description TEXT
);