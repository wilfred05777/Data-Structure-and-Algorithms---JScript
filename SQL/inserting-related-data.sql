-- https://www.udemy.com/course/sql-the-complete-developers-guide-mysql-postgresql/learn/lecture/28877110?start=112#overview

-- https://goalkicker.com/MicrosoftSQLServerBook/

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



INSERT INTO cities(name)
VALUES('Davao'),('New York'),('Tagum');