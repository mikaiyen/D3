-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1:3306
-- 產生時間： 2022-05-09 15:16:59
-- 伺服器版本： 5.7.36
-- PHP 版本： 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `ec-bot`
--
CREATE DATABASE IF NOT EXISTS `ec-bot` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `ec-bot`;

-- --------------------------------------------------------

--
-- 資料表結構 `product-db`
--

DROP TABLE IF EXISTS `product-db`;
CREATE TABLE IF NOT EXISTS `product-db` (
  `Number` int(10) NOT NULL,
  `Category` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Price` int(10) NOT NULL,
  `Description` text COLLATE utf8_unicode_ci NOT NULL,
  `Photo` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `IsHot` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 傾印資料表的資料 `product-db`
--

INSERT INTO `product-db` (`Number`, `Category`, `Name`, `Price`, `Description`, `Photo`, `IsHot`) VALUES
(1, '外套', '可攜式連帽外套', 990, '隨時隨地立刻就能穿上！超實用的輕量防潑水的連帽外套，可攜式設計。\r\n・可抵擋少量雨水的耐久防潑水加工設計。\r\n・採用30丹尼、輕薄又具強韌耐久性的防破尼龍格紋布。\r\n・略有腰身的剪裁，可修飾身形、散發女性氣質。\r\n・袖子内側和兩側部分使用一整塊布料，讓手腕更好活動。\r\n・可抵擋少量雨水，因此可代替摺疊傘。出外活動時天氣變化大也很實用。\r\n・小巧的可攜式收納袋設計。', 'https://image.ibb.co/hD2WWo/12_409095.jpg', 1),
(2, '外套', '棉質羊毛混紡外套', 1490, '領子為彷彿日曬過般的象牙色，充滿季節感！商務場合也可搭配。\r\n・與世界知名模特兒伊內絲‧法桑琪合作的聯名商品。\r\n・伊內絲系列的經典棉質羊毛混紡外套。\r\n・休閒或商務皆可搭配。', 'https://image.ibb.co/cFC9HT/69_405399.jpg', 1),
(3, '上衣', 'DORAEMON 印花T恤 (短袖)', 390, 'TAKASHI MURAKAMI × DORAEMON\r\n從1970年開始連載以來，帶給全日本廣大夢想的DORAEMON。以「創造屬於你的DORAEMON」為設計概念，集合了28位藝術家，將以「THE DORAEMON展TOKYO 2017」為主視覺的村上隆作品，以T恤型式呈現給大家。', 'https://image.ibb.co/cuN9HT/00_410889.jpg', 1),
(4, '上衣', 'Dry-EX POLO衫', 390, '速乾性超強的Dry-EX POLO衫！設計簡單且富機能性。\r\n・使用劃時代Dry-EX素材，以超驚人速度排汗及水分。\r\n・以無車縫的特殊立體織法製作，提升觸感及穿著舒適度。\r\n・部分採用網眼布料，提升透氣性。\r\n・領子採用柔軟的針織素材，溫柔貼合身體。\r\n・附有反光貼條。\r\n・袖口有褶縫較有份量，呈現更立體的形狀。\r\n・細微調整肩膀的傾斜度、袖子寬度、袖長的位置及袖長等等，呈現最適合運動的合身度。\r\n・可將領子立起讓脖子防曬。\r\n・袖口同樣採用柔軟的針織素材，提升休閒感。\r\n・沒有拼接和車線的極簡設計。\r\n・不加入多餘的細節，可專心從事運動的簡約乾淨設計。', 'https://image.ibb.co/fGXn48/12_404091.jpg', 0),
(5, '下身', '特級彈性牛仔褲', 1490, '特級彈性牛仔褲既舒適又能實現美腿！褲腳新增變化，更有時尚感。\r\n・採用不只伸縮率，伸縮回復率也很高的高級特級彈性布料。\r\n・開叉及前後褲腳長度不同的設計，款式多樣。\r\n・觸感柔軟，又是真正牛仔褲的外觀，是正式休閒皆可搭配的正式風格牛仔褲。\r\n・舒適的中腰設計。\r\n・腰部為合身曲線皮帶，因此腰部合身度佳，長時間穿著也不易滑落。\r\n・因應消費者回響，品牌標籤改為觸感舒適的新式樣。', 'https://image.ibb.co/jQzBWo/63_409941.jpg', 1),
(6, '下身', '高腰格紋窄版裙', 990, 'I字型剪裁，展現優美風格。上班休閒均適穿的羊毛風格窄版裙。\r\n・優美垂墜風格素材。不易起皺，保養簡單容易。採用羊毛風高雅質感素材，顯露休閒清新風格，可自在搭配。\r\n・從腰部起到膝蓋，俐落流暢I字型剪裁。\r\n・一片裙風格，增添亮麗風格。\r\n・腰部後方具伸縮性，俐落敏捷舒適好穿。', 'https://image.ibb.co/eRbEj8/68_412881.jpg', 0),
(7, '內衣', 'AIRism U領T恤(短袖)', 390, '吸汗速乾，質地清爽舒適。紮實質地及俐落袖口的坦克背心。\r\n・採用如空氣般輕盈，夏季穿著清爽舒適的AlRism坦克背心。\r\n・極細纖維織線，膚觸柔順，讓您幾乎忘記有穿上它。\r\n・吸汗速乾，抗菌防臭等舒適機能齊備。\r\n・U領設計，領口不會外露。\r\n・下擺不會往上縮，穿著更為安心。\r\n・表面觸感柔順，穿著時線條不會外露。', 'https://image.ibb.co/iq5kro/09_181481.jpg', 1),
(8, '內衣', '內搭褲 (10分)', 390, '簡約風格設計，好搭易穿的素面內搭褲。\r\n・ 可完整包覆到腳跟的10分褲長度。\r\n・素面簡約設計，好搭易穿。\r\n・可搭配裙子及短褲，適合多層次穿搭。', 'https://image.ibb.co/bSNn48/68_404457.jpg', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
