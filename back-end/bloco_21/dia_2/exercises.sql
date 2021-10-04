USE Pixar;

-- EXERCICIO 1
SELECT t1.domestic_sales, t1.international_sales, t1.movie_id
FROM BoxOffice AS t1
INNER JOIN Movies AS t2
ON t1.movie_id = t2.id;

-- EXERCICIO 2
SELECT t1.domestic_sales, t1.international_sales
FROM BoxOffice AS t1
INNER JOIN Movies AS t2
ON t1.movie_id = t2.id
WHERE t1.domestic_sales < t1.international_sales;

-- EXERCICIO 3
SELECT t1.rating, t1.movie_id
FROM BoxOffice AS t1
INNER JOIN Movies AS t2
ON t1.movie_id = t2.id
ORDER BY t1.rating DESC;

-- EXERCICIO 4
SELECT 
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM Theater t
LEFT JOIN Movies m
ON t.id = m.theater_id
ORDER BY t.name ASC;

-- EXERCICIO 5
SELECT 
    t.name,
    t.location,
    t.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM Movies m
RIGHT JOIN Theater t
ON t.id = m.theater_id
ORDER BY m.title ASC;

-- EXERCICIO 6
 SELECT title FROM Movies
 WHERE id IN (
 SELECT movie_id FROM BoxOffice
 WHERE rating > 7.5
 );
 
 SELECT M.title, M.id FROM Movies AS M
 INNER JOIN BoxOffice AS B
 ON B.movie_id = M.id 
 WHERE B.rating > 7.5;
 

-- EXERCICIO 7
SELECT rating FROM BoxOffice
WHERE movie_id IN (
  SELECT id FROM Movies
  WHERE year > 2009
);

 SELECT B.rating FROM BoxOffice AS B
 INNER JOIN Movies AS M
 ON B.movie_id = M.id
 WHERE M.year > 2009;
 
 -- EXERCICIO 8
 SELECT name, location FROM Theater
 WHERE EXISTS(
   SELECT * FROM Movies
   WHERE Movies.theater_id = Theater.id
 );
 
 -- EXERCICIO 9
  SELECT name, location FROM Theater
 WHERE NOT EXISTS(
   SELECT * FROM Movies
   WHERE Movies.theater_id = Theater.id
 );
