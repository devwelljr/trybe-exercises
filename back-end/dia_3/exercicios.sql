USE PecasFornecedores;

-- EXERCICIO 1
SELECT * FROM Pecas
WHERE name LIKE 'GR%';

-- EXERCICIO 2
SELECT * FROM Fornecimentos
WHERE peca = 2 ORDER BY Fornecedor;

-- EXERCICIO 3
SELECT peca, preco, fornecedor FROM Fornecimentos
WHERE fornecedor LIKE '%N%';

-- EXERCICIO 4
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;

-- EXERCICIO 5
SELECT * FROM Fornecedores
WHERE code LIKE '%F%';

-- EXERCICIO 6
SELECT * FROM Fornecimentos
WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco;

-- EXERCICIO 7
SELECT * FROM Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30'; 
