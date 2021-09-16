USE sakila;

SELECT rating, AVG(length) duracao_media FROM film
GROUP BY rating
HAVING duracao_media BETWEEN 115.0 AND 121.50
ORDER BY duracao_media DESC;

SELECT rating, SUM(replacement_cost) AS substituicao FROM film
GROUP by rating
HAVING substituicao > 3950.50
ORDER BY substituicao ASC;
