DROP DATABASE IF EXISTS pa2576;
CREATE DATABASE pa2576;

USE pa2576;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL unique,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    is_student BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);


DROP TABLE IF EXISTS categories;
CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS events;
CREATE TABLE events (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    zip VARCHAR(255) NOT NULL,
    main_image VARCHAR(255) NOT NULL,
    images JSON,
    start_date DATETIME NOT NULL,
    end_date DATETIME NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    price INT NOT NULL,
    ticket_quantity INT NOT NULL,
    refundable BOOLEAN NOT NULL,
    event_creator_id INT NOT NULL,
    category_id INT NOT NULL,
    url VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (event_creator_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    comment VARCHAR(255) NOT NULL,
    event_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (event_id) REFERENCES events(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

DROP TABLE IF EXISTS likes;
CREATE TABLE likes (
    id INT NOT NULL AUTO_INCREMENT,
    event_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (event_id) REFERENCES events(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

DROP TABLE IF EXISTS rating;
CREATE TABLE rating (
    id INT NOT NULL AUTO_INCREMENT,
    event_id INT NOT NULL,
    user_id INT NOT NULL,
    rating INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (event_id) REFERENCES events(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- DROP TABLE IF EXISTS tickets;
-- CREATE TABLE tickets (
--     id INT NOT NULL AUTO_INCREMENT,
--     uuid VARCHAR(255) NOT NULL,
--     event_id INT NOT NULL,
--     user_id INT NOT NULL,
--     quantity INT NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (event_id) REFERENCES events(id),
--     FOREIGN KEY (user_id) REFERENCES users(id)
-- );

DROP TABLE IF EXISTS creator_requests;
CREATE TABLE creator_requests (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

DROP TABLE IF EXISTS creators;
CREATE TABLE creators (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);