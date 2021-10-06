USE sakila;

-- EXERCICIO 1
SELECT * FROM film
WHERE title LIKE '%ace%';

-- EXERCICIO 2
SELECT * FROM film
WHERE description LIKE '%china';

-- EXERCICIO 3
SELECT * FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord'
LIMIT 2;

-- EXERCICIO 4
SELECT * FROM film
WHERE title LIKE '___gon%'
LIMIT 2;

-- EXERCICIO 5
SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';

-- EXERCICIO 6
SELECT * FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

-- EXERCICIO 7
SELECT * FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';
