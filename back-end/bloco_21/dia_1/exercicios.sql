
-- EXERCICIO 1
SELECT MAX(SALARY) AS 'Maior Salario' FROM hr.employees;

-- EXERCICIO 2
SELECT MAX(SALARY) - MIN(SALARY) AS 'Diferença entre o maior e menor salário' 
FROM employees;

-- EXERCICIO 3
SELECT JOB_ID, AVG(SALARY) AS 'Media_Salarial' FROM hr.employees
GROUP BY JOB_ID
ORDER BY `Media_Salarial` DESC;

-- EXERCICIO 4
SELECT SUM(SALARY) AS 'Todas_as_pessoas' FROM hr.employees;

-- EXERCICIO 5
SELECT 
    MAX(SALARY) AS 'Maior_Salario',
    MIN(SALARY) AS 'Menor_Salario',
    SUM(SALARY) AS 'Soma_Salarios',
    AVG(SALARY) AS 'Media_Salarial'
FROM hr.employees;

-- EXERCICIO 6
SELECT COUNT(JOB_ID = 'IT_PROG') AS 'Pessoas_Programadoras' FROM hr.employees;

-- EXERCICIO 7
SELECT JOB_ID, SUM(SALARY) FROM hr.employees
GROUP BY JOB_ID;

-- EXERCICIO 8
SELECT JOB_ID, SUM(SALARY) AS 'Salarios_PROG' FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- EXERCICIO 9
SELECT JOB_ID, AVG(SALARY) AS 'Media_Salarial' FROM hr.employees
WHERE JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID
ORDER BY `Media_Salarial` DESC;

-- EXERCICIO 10
SELECT 
    department_id,
    ROUND(AVG(SALARY), 2) AS 'Medias_Salarial',
    COUNT(*) AS 'Empregados'
FROM
    hr.employees
GROUP BY DEPARTMENT_ID
HAVING `Empregados` > 10;

-- EXERCICIO 11
UPDATE  hr.employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER = '515%';

-- EXERCICIO 12
SELECT * FROM hr.employees
WHERE CHAR_LENGTH(FIRST_NAME) >= 8;

-- EXERCICIO 13
SELECT 
    EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE)
FROM
    hr.employees;

-- EXERCICIO 14
SELECT 
    EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE)
FROM
    hr.employees;
    
-- EXERCICIO 15
SELECT 
    EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE)
FROM
    hr.employees;

-- EXERCICIO 16
SELECT UPPER(FIRST_NAME)
FROM hr.employees;

-- EXERCICIO 17
SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE HIRE_DATE  BETWEEN '1987-07-01'  AND '1987-07-31';

SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE MONTH(HIRE_DATE)=7 and YEAR(HIRE_DATE)=1987;

-- EXERCICIO 18
SELECT first_name,
    last_name,
    DATEDIFF(CURRENT_DATE() , HIRE_DATE) 'days_worked'
FROM hr.employees;
