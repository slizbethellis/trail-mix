### Trailmix schema
### we may need customers and adventures tables. starting with customers

CREATE DATABASE trail_mix_dev;

USE trail_mix_dev;

CREATE TABLE customers (
	id int NOT NULL AUTO_INCREMENT,
  cust_email varchar(255) NOT NULL,
  cust_name varchar(255) NOT NULL,
  cust_password varchar(255) NOT NULL,
  cust_logo varchar(255) NOT NULL,
  adventures varchar(255),
	cust_date DATETIME,
	PRIMARY KEY (id)
);

CREATE TABLE adventures (
  id int NOT NULL AUTO_INCREMENT,
  adventure_verbiage1 varchar(255),
  adventure_verbiage2 varchar(255),
  adventure_verbiage3 varchar(255),
  adventure_verbiage4 varchar(255),
  adventure_verbiage5 varchar(255),
  adventure_image1 varchar(255),
  adventure_image2 varchar(255),
  adventure_image3 varchar(255),
  advent_date DATETIME,
  PRIMARY KEY (id)
);
