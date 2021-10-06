USE sakila;

-- EXERCICIO 1
UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

SELECT * FROM actor;

-- EXERCICIO 2
UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

SELECT * FROM category;

-- EXERCICIO 3
UPDATE film
SET rental_rate = 25
WHERE (rating = 'G' OR rating = 'PG' OR rating = 'PG-13') AND replacement_cost > 20;

SELECT * FROM film;

-- EXERCICIO 4
UPDATE film
SET rental_rate = (
  CASE 
    WHEN length BETWEEN 1 AND 100 THEN 10
    WHEN length > 100 THEN 20
  END
);

SELECT * FROM film;
