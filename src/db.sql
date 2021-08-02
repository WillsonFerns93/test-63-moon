CREATE DATABASE `test_dev`;

USE `test_dev`;


CREATE TABLE IF NOT EXISTS `employees` 
( `EmpID` varchar(50) PRIMARY KEY, `EmpName` varchar(200), `Skills` varchar(500));


INSERT INTO `employees` (EmpID, EmpName, Skills)
VALUES ('A0001', 'Willson','["JAVA","PAYTHON"]');
