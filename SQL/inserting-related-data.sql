create database relations;

use relations;


--CREATING TABLES START
CREATE TABLE users(
	id int primary key identity,
	first_name varchar(300) not null,
	last_name varchar(300) not null,
	email varchar(300) not null,
	address_id int not null
);


CREATE TABLE addresses(
	id int primary key identity, --auto_increment(mysql), id serial primary key->postgress 
	street varchar(300) not null,
	house_number varchar(300) not null,
	city_id int not null
);


CREATE TABLE cities(
	id int primary key identity,
	name varchar(300) not null
);
--CREATING TABLES END --

-- INSERTING VALUES TO TABLES START --
INSERT INTO cities(name)
VALUES('Davao'),('New York'),('Tagum'),('Panabo');


INSERT INTO addresses(street, house_number, city_id)
VALUES
	('San Pedro','8A', 1),
	('New Jersey','10A', 2),
	('Apokon','501', 3),
	('New Visayas','808',4)
;

INSERT INTO users(first_name,last_name, email, address_id)
VALUES
('Wilfred Erdo','Bancairen','wilfed@gmail.com',4),
('Rowena','Bancairen','Rowena@gmail.com',2),
('Julian Manuel','Bancairen','JulianManuel@gmail.com',3),
('Amari Zera','Bancairen','AmariZera@gmail.com',1)
;

-- INSERTING VALUES TO TABLES END --