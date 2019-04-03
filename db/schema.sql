DROP DATABASE IF EXISTs verykoi;
CREATE DATABASE verykoi;
USE verykoi;

-- Create the table actors.
CREATE TABLE users (
  id int AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  password varchar(60) NOT NULL,
  PRIMARY KEY(id)
);