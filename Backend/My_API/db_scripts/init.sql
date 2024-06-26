-- -- Active: 1716479149787@@127.0.0.1@3306@db
-- -- CREATE DATABASE 'db' IF NOT EXISTS;
-- DROP DATABASE IF EXISTS `db`;

-- USE db_test;

-- CREATE TABLE `accounts` (
--   `id` integer PRIMARY KEY,
--   `username` varchar(255),
--   `password` text,
--   `email` text,
  

-- CREATE TABLE `product` (
--   `id` integer PRIMARY KEY,
--   `name` varchar(255),
--   `detail` text,
--   `price` decimal,
--   `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
--   `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
--   `user_id` integer,
--   FOREIGN KEY (`user_id`) REFERENCES `accounts`(`id`)
-- );

DROP DATABASE IF EXISTS `db_test`;
CREATE DATABASE `db_test`;
USE `db_test`;

CREATE TABLE `accounts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(255) NOT NULL,
  `password` TEXT NOT NULL,
  `email` TEXT NOT NULL
);

CREATE TABLE `product` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `detail` TEXT,
  `price` DECIMAL(10, 2),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `user_id` INT,
  FOREIGN KEY (`user_id`) REFERENCES `accounts`(`id`)
);