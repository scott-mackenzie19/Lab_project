-- Active: 1666570329013@@database-2.csfeg9lgj8v6.us-east-2.rds.amazonaws.com@3306
DROP DATABASE IF EXISTS db;

-- create database db
CREATE DATABASE IF NOT EXISTS db;

-- use newly create database
USE db;

-- create table in db
CREATE TABLE `db`.`test_table` (
    `id` INT NOT NULL AUTO_INCREMENT, 
    `value` VARCHAR(45), 
    PRIMARY KEY (`id`), 
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

-- insert sample entry
INSERT INTO `db`.`test_table` (`value`) VALUES ('Sample Value');