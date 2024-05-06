-- Active: 1713549162922@@127.0.0.1@3306@getdb
CREATE DATABASE 'getdb' IF NOT EXISTS;

CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `username` varchar(255),
  `password` text,
  `mail` text,
  `modified_at` timestamp,
  `created_at` timestamp
);

CREATE TABLE `product` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `description` text,
  `price` decimal,
  `user_id` integer,
  `contity` int,
  `created_at` timestamp,
  `modified_at` timestamp
);

ALTER TABLE `product` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);