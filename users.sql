-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 15, 2023 at 02:40 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`, `firstname`, `lastname`, `created_at`, `updated_at`) VALUES
(1, 'agung@mail.com', 'agung', '$2y$10$RA4QorTxS/ERQapCiWF26OWuL6pVeS/clyivJhZ6kIuScmCem841y', 'agung', 'suryana', '2023-12-14 14:09:15', '2023-12-14 14:09:15'),
(2, 'ros@mail.com', 'ros', '$2y$10$RA4QorTxS/ERQapCiWF26OWuL6pVeS/clyivJhZ6kIuScmCem841y', 'ros', 'ros', '2023-12-14 17:21:30', '2023-12-14 17:21:30');

COMMIT;