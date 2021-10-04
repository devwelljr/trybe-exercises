USE hotel;

-- EXERCICIO 1
SELECT id, title FROM Books
WHERE NOT EXISTS(
  SELECT * FROM Books_Lent
  WHERE Books.id = book_id
);

-- EXERCICIO 2
SELECT id, title FROM Books
WHERE EXISTS(
  SELECT * FROM Books_Lent
  WHERE Books.id = book_id AND Books.title LIKE '%lost%'
);

-- EXERCICIO 3
SELECT 
    name
FROM
    hotel.Customers c
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            customerid = c.customerid);

-- EXERCICIO 4
SELECT 
    cus.name, car.name
FROM
    hotel.Cars AS car
        INNER JOIN
    hotel.Customers AS cus
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerID = cus.CustomerId
                AND carID = car.ID);
