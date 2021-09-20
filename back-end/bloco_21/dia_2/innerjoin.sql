USE sakila;

-- EXERCICIO 1
SELECT a.first_name, a.actor_id, f.actor_id
FROM actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;

-- EXERCICIO 2
SELECT f.first_name, f.last_name, a.address
FROM staff f
INNER JOIN address a
ON a.address_id = f.staff_id;

-- EXERCICIO 3
SELECT 
    C.customer_id,
    C.first_name,
    C.email,
    C.address_id,
    A.address
FROM customer AS C
INNER JOIN address AS A
ON C.address_id = A.address_id
ORDER BY C.first_name DESC
LIMIT 100;

-- EXERCICIO 4
SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

-- EXERCICIO 5
SELECT c.first_name, COUNT(a.address) `Quantidade de Endereços`
FROM customer AS c
INNER JOIN address AS a
ON a.address_id = c.address_id AND c.active = 1
GROUP BY c.first_name
ORDER BY first_name DESC;

-- EXERCICIO 6
SELECT 
    stf.first_name,
    stf.last_name,
    AVG(pay.amount) AS `Média de pagamento`
FROM
    sakila.staff AS stf
        INNER JOIN
    sakila.payment pay ON stf.staff_id = pay.staff_id
WHERE
    YEAR(pay.payment_date) = 2006
GROUP BY stf.first_name , stf.last_name;

-- EXERCICIO 7
SELECT 
    A.actor_id, A.first_name, F.film_id, F.title
FROM
    sakila.actor AS A
        INNER JOIN
    sakila.film_actor AS FA ON A.actor_id = FA.actor_id
        INNER JOIN
    sakila.film AS F ON F.film_id = FA.film_id;
