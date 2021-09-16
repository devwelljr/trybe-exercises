USE sakila;

-- EXERCICIO 1
INSERT INTO staff
  (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
  ('wellington', 'gregorio', 1, 'junior.wel02@gmail.com', 1, 1, 'BH RX BUDA', '12345678');

-- EXERCICIO 2
INSERT INTO staff
  (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
  ('a', 'a', 1, 'a@gmail.com', 1, 1, 'a', '12345678'),
  ('b', 'b', 1, 'b@gmail.com', 1, 1, 'b', '12345678');
  
-- EXERCICIO 3
INSERT INTO actor(first_name, last_name)
  SELECT first_name, last_name FROM customer
  ORDER BY customer_id ASC
  LIMIT 5;

SELECT * FROM actor;
    
-- EXERCICIO 4
INSERT INTO category(name)
VALUES
  ('aaa'),
  ('bbb'),
  ('ccc');
  
SELECT * FROM category;

-- EXERCICIO 5
INSERT INTO store(manager_staff_id, address_id)
VALUES (3, 3);

SELECT * FROM store;
  