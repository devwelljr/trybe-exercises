USE sakila;

-- EXERCISE 1
SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- EXERCISE 2
SELECT first_name FROM customer
WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name;

-- EXERCISE 3
SELECT title, description, release_year, replacement_cost FROM film
WHERE rating <> 'NC-17' AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title
LIMIT 100;

-- EXERCISE 4
SELECT COUNT(active) FROM customer
WHERE active = 1 AND store_id = 1;

-- EXERCISE 5
SELECT * FROM customer
WHERE active = 0 AND store_id = 1;

-- EXERCISE 6
SELECT * FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title 
LIMIT 50;
