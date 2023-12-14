-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 14, 2023 at 07:17 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL,
  `cover` varchar(255) NOT NULL,
  `summary` text NOT NULL,
  `content` text NOT NULL,
  `author_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `cover`, `summary`, `content`, `author_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(4, 'Apple adds a new purple color update', '7InUSvUhKMZpoBUoNMPxsqcdanfj34.webp', 'Apple has added a new color option to the iPhone 12 lineup — a rare midcycle facelift for the company’s flagship product. The new color is purple, and looks like a lavender-ish pastel hue, which is in keeping with the tones on the rest of the color options on the 12 lineup, which include a mint green and a red that leans toward the pink end of the spectrum.', '<p><strong>Apple has added</strong> a new color option to the iPhone 12 lineup — a rare midcycle facelift for the company’s flagship product. The new color is purple, and looks like a lavender-ish pastel hue, which is in keeping with the tones on the rest of the color options on the 12 lineup, which include a mint green and a red that leans toward the pink end of the spectrum.</p><p>The purple iPhone 12 is going on sale starting this Friday, April 23 and will begin shipping out to customers on April 30. It’s available for iPhone 12 and 12 mini, but the iPhone 12 Pro isn’t getting any new color options to match.</p><p>It’s a small thing, but not a bad way for Apple to jazz up their hardware midcycle in a bid to excite general consumers. Also, it suggests Apple is leaning in even more to a multicolor aesthetic for its hardware, which is a refreshing change after a mostly monochrome approach in recent years.</p>', 1, '2023-12-14 07:09:43', '2023-12-14 08:00:34', NULL),
(5, 'The search and discovery marketplace u', 'LknR2PoRO47V3QdLPkxEpnz6yOI0qF.webp', 'In my last SaaS+ series article, I covered the six core architectural concepts you need to think about when building a SaaS+ company. There are a number of benefits that come from putting the right building blocks in place from the start and creating a strong core platform.', '<p><strong>In my last</strong>&nbsp;SaaS+ series article, I covered the&nbsp;<a href=\"https://techcrunch.com/2023/08/25/the-6-most-important-things-to-know-about-saas-product-architecture/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(220, 169, 70);\">six core architectural concepts you need to think about when building a SaaS+ company</a>. There are a number of benefits that come from putting the right building blocks in place from the start and creating a strong core platform.</p><p>One major benefit is the option of hosting a search and discovery marketplace. When you’re working with hundreds or thousands of different businesses on a platform, you can leverage all of the information you have to build a search and discovery marketplace.</p><p>This is something that is nearly impossible to do unless you have a platform because you would otherwise have to manually input millions of pieces of data. However, if you first onboard businesses as customers to your platform, they’ll constantly update their own information because they’re using your platform to run their business. And then all you need to do is turn on public view so the world can search it.</p><p>The benefits of a well-run marketplace are numerous: a far more valuable user experience for your customers, a differentiated product and new revenue streams.</p>', 1, '2023-12-14 07:48:44', '2023-12-14 11:05:20', NULL),
(6, 'random post', 'mCRky98NKNPdGBJKGF4UMPw5v5I1gW.webp', 'random post', '<p>trests</p>', 1, '2023-12-14 08:00:58', '2023-12-14 11:04:30', '2023-12-14 11:04:30'),
(8, 'Gag City is a viral', 'L73Od4hx7GPeI21V4k5urwJf0iIkEj.webp', 'Welcome to Gag City, the pink metropolis inhabited by stans and brands alike.  In the days leading up to the release of “Pink Friday 2,” Nicki Minaj’s fifth studio album and sequel to her debut record “Pink Friday” that dropped on Friday, Twitter was flooded with AI-generated images of pink-toned cityscapes.', '<p>Welcome to Gag City, the pink metropolis inhabited by stans and brands alike.</p><p>In the days leading up to the release of “Pink Friday 2,” Nicki Minaj’s fifth studio album and sequel to her debut record “Pink Friday” that dropped on Friday, Twitter was flooded with AI-generated images of pink-toned cityscapes. Gag City, the dreamy false utopia ruled by Minaj and her Barbz, broke through stan Twitter and became a viral meme that brand accounts immediately used for their own marketing — promoting Minaj’s album for free.</p><p>Is it an authentic stan-led campaign to build hype for Minaj? Is it a plant to game engagement for both the album and brands? What’s clear is that the viral moment is a win for Minaj, manufactured or not.</p><p>It started in September, when Minaj teased the album’s cover art online. The image features Minaj on a pink subway car, drifting through pink clouds with a futuristic (and obviously, pink) city skyline in the background.</p>', 2, '2023-12-14 10:26:54', '2023-12-14 10:26:54', NULL),
(9, 'asd', 'DQ1gRYXrFiSQU4yudaKBHSO7wUPvGe.jpg', 'asd', '<p>asdsa</p>', 1, '2023-12-14 11:09:44', '2023-12-14 11:09:44', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_author_id_foreign` (`author_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
