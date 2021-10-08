USE sakila;

SELECT DISTINCT last_name FROM actor;

SELECT COUNT(DISTINCT last_name) FROM actor;

SELECT * FROM actor 
ORDER BY last_name ASC, FIRST_NAME DESC;
