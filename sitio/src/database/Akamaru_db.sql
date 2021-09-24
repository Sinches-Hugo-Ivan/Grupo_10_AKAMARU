CREATE DATABASE  IF NOT EXISTS `akamaru_db` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `akamaru_db`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: akamaru_db
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `street` varchar(255) NOT NULL,
  `number` int NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `cp` int NOT NULL,
  `cpa` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'Algoma',8,'Brooklyn','New York',11215,'US'),(2,'Gerald',54603,'Santa Rosa','California',95405,'US'),(3,'Bluejay',886,'Sacramento','California',95852,'US'),(4,'Mosinee',5,'Tucson','Arizona',85732,'US'),(5,'La Follette',320,'Hicksville','New York',11854,'US'),(6,'Manley',8,'Garden Grove','California',92844,'US'),(7,'Hanover',781,'Santa Barbara','California',93106,'US'),(8,'Starling',5258,'Peoria','Arizona',85383,'US'),(9,'Barnett',17,'Rochester','New York',14609,'US'),(10,'Elmside',0,'Oceanside','California',92056,'US'),(11,'Vernon',92024,'Honolulu','Hawaii',96825,'US'),(12,'Basil',4087,'Oakland','California',94627,'US'),(13,'Oakridge',45640,'Honolulu','Hawaii',96835,'US'),(14,'Bobwhite',9,'Sacramento','California',95818,'US'),(15,'Oriole',66,'Torrance','California',90505,'US'),(16,'East',12265,'New York City','New York',10045,'US'),(17,'American',5573,'Buffalo','New York',14225,'US'),(18,'Erie',0,'Sacramento','California',95818,'US'),(19,'Bashford',1575,'New York City','New York',10131,'US'),(20,'Pine View',5797,'San Rafael','California',94913,'US');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `total` int NOT NULL,
  `fechaCompra` date NOT NULL,
  `mediosDePagoId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_CART_USER_idx` (`userId`),
  KEY `FK_CART_MEDIOS_DE_PAGOS_idx` (`mediosDePagoId`),
  CONSTRAINT `FK_CART_MEDIOS_DE_PAGOS` FOREIGN KEY (`mediosDePagoId`) REFERENCES `mediosdepago` (`id`),
  CONSTRAINT `FK_CART_USER` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,16,2110,'2020-09-17',1,16),(2,46,8076,'2021-07-11',2,13),(3,81,7803,'2021-06-17',3,6),(4,31,18,'2021-08-04',1,5),(5,74,10190,'2021-02-04',1,6),(6,80,18686,'2021-03-15',1,4),(7,59,16131,'2021-07-23',2,15),(8,14,90,'2021-07-17',3,9),(9,62,17235,'2020-11-01',2,3),(10,48,18211,'2021-01-23',1,8),(11,65,18801,'2021-06-18',3,18),(12,96,4405,'2021-08-27',3,17),(13,37,7785,'2021-03-07',1,19),(14,13,10973,'2021-05-11',2,15),(15,43,10804,'2021-07-09',1,10),(16,51,1747,'2020-09-30',1,4),(17,87,5740,'2021-03-20',1,15),(18,72,7346,'2021-05-17',1,13),(19,54,15358,'2020-09-29',2,2),(20,98,7693,'2021-05-30',2,1);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Accesorios'),(2,'Cartucheras'),(3,'Figuras'),(4,'Mangas'),(5,'Mochilas'),(6,'Tazas');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `productId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_images_product_idx` (`productId`),
  CONSTRAINT `fk_images_product` FOREIGN KEY (`productId`) REFERENCES `images` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'gorro-dn.jpg',1),(2,'taza-db.jpg',2),(3,'figura6.webp',3),(4,'6figuras.webp',4),(5,'images-1630430184730.jpg',5),(6,'images-1630430184738.jpg',5),(7,'images-1630430184739.jpg',5),(8,'images-1630431572606.jpg',6),(9,'images-1630431572620.jpg',6),(10,'images-1630431572621.jpg',6),(11,'images-1630431748012.jpeg',7),(12,'images-1630431748150.jpeg',7),(13,'images-1630431748195.jpeg',7),(14,'images-1630431748257.jpeg',7),(15,'images-1630432464968.jpg',8),(16,'images-1630432520260.jpg',9),(17,'images-1630432718728.webp',10),(18,'images-1630432718747.webp',10),(19,'images-1630432718782.webp',10),(20,'images-1630432718811.webp',10),(21,'images-1630432826701.webp',11),(22,'images-1630432826728.webp',11),(23,'images-1630432826809.webp',11),(24,'images-1630432826812.webp',11),(25,'images-1630432978392.webp',12),(26,'images-1630432978400.webp',12),(27,'images-1630432978421.webp',12),(28,'images-1630432978475.webp',12),(29,'images-1630432978503.webp',12),(30,'images-1630432978531.webp',12),(31,'images-1630433142316.jpg',13),(32,'images-1630433142320.jpg',13),(33,'images-1630433142323.webp',13),(34,'images-1630433142327.webp',13),(35,'images-1630433142329.webp',13),(36,'images-1630433142334.webp',13),(37,'images-1630433276477.jpg',14),(38,'images-1630433276487.jpg',14),(39,'images-1630433276491.jpg',14),(40,'images-1630433365149.jpg',15),(41,'images-1630433365164.jpg',15),(42,'images-1630433417551.jpg',16),(43,'images-1630433495266.jpg',17),(44,'images-1630433495291.jpg',17),(45,'images-1630433495291.jpg',17),(46,'images-1630433563182.jpg',18),(47,'images-1630433629613.jpg',19),(48,'images-1630433629715.jpg',19),(49,'images-1630433734907.jpg',20),(50,'images-1630433734912.jpg',20),(51,'images-1630433734913.jpg',20),(52,'images-1630433734916.jpg',20),(53,'images-1630433832813.webp',21),(54,'images-1630433832817.jpg',21),(55,'images-1630433832822.webp',21),(56,'images-1630433832823.jpg',21),(57,'images-1630433912636.jpg',22),(58,'images-1630433912639.jpg',22),(59,'images-1630433912640.jpg',22),(60,'images-1630434089838.jpg',23),(61,'images-1630434089910.jpg',23),(62,'images-1630434089928.jpg',23),(63,'images-1630434089957.jpg',23),(64,'images-1630434219756.jpg',24),(65,'images-1630434219824.webp',24),(66,'images-1630434219941.jpg',24),(67,'images-1630434219968.webp',24),(68,'images-1630434315409.jpg',25),(69,'images-1630434315415.jpg',25),(70,'images-1630434315420.jpg',25),(71,'images-1630434315428.jpg',25),(72,'images-1630434315430.jpg',25),(73,'images-1630434315437.webp',25);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mediosdepago`
--

DROP TABLE IF EXISTS `mediosdepago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mediosdepago` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mediosdepago`
--

LOCK TABLES `mediosdepago` WRITE;
/*!40000 ALTER TABLE `mediosdepago` DISABLE KEYS */;
INSERT INTO `mediosdepago` VALUES (1,'efectivo','lugarDePago'),(2,'credito','tarjetaCredito'),(3,'debito','tarjetaDebito');
/*!40000 ALTER TABLE `mediosdepago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `cuotas` int NOT NULL,
  `stock` int NOT NULL,
  `description` varchar(500) NOT NULL,
  `categoryId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_products_categories_idx` (`categoryId`),
  CONSTRAINT `fk_product_category` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'GorroL',300,2,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',1),(2,'Taza Dragon Ball',400,5,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',6),(3,'Naruto',250,3,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',3),(4,'Naruto opc2',260,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',3),(5,'Gorro Naruto',300,2,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',1),(6,'Gorra Dragon Ball',450,3,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',1),(7,'Collar Sharingan',600,3,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',1),(8,'Cartuchera Bulma',300,3,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',2),(9,'Cartuchera DB',500,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',2),(10,'Naruto Uzumaki',700,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',3),(11,'Sakura',700,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',3),(12,'Lady Tsunade',800,8,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',3),(13,'Naruto Zorro 9 Colas',800,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',3),(14,'Mochila Pokemon',2000,12,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',5),(15,'Bolso Super Saiyan',3300,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',5),(16,'Mochila Super Saiyan',4500,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',5),(17,'Taza Dragon Ball Z',300,2,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',6),(18,'Taza Death Note',650,3,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',6),(19,'Taza Shenlong DB',750,3,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',6),(20,'Taza Pokemon',670,3,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',6),(21,'Taza',780,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',6),(22,'Billetera Naruto',590,3,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',1),(23,'Boa One Piece',850,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',3),(24,'Kakashi Naruto',680,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',3),(25,'Gaara Naruto',750,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjetas`
--

DROP TABLE IF EXISTS `tarjetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tarjetas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nroTarjeta` bigint NOT NULL,
  `userId` int NOT NULL,
  `mediosDePagosId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Tarjetas_Users1_idx` (`userId`),
  KEY `fk_Tarjetas_Mediosdepagos1_idx` (`mediosDePagosId`),
  CONSTRAINT `fk_Tarjetas_Mediosdepagos1` FOREIGN KEY (`mediosDePagosId`) REFERENCES `mediosdepago` (`id`),
  CONSTRAINT `fk_Tarjetas_Users1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjetas`
--

LOCK TABLES `tarjetas` WRITE;
/*!40000 ALTER TABLE `tarjetas` DISABLE KEYS */;
INSERT INTO `tarjetas` VALUES (1,3580800890592525,1,2),(2,3560949894686785,2,3),(3,5602256533318746,3,2),(4,4905686421128202,4,2),(5,3548186228766853,5,3),(6,6374152945214538,6,3),(7,3557680035655935,7,3),(8,5180181379401952,8,3),(9,5610960574379760,9,2),(10,30586710936198,10,2),(11,5602230217289614,11,2),(12,633499300248315392,12,3),(13,5566346217891987,13,3),(14,3587781688459239,14,2),(15,56022430048585272,15,3),(16,3532615134528286,16,3),(17,3528036997345419,17,2),(18,36462200864700,18,3),(19,3570091305683560,19,2),(20,5610974780143340,20,3);
/*!40000 ALTER TABLE `tarjetas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lastname` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `rol` varchar(20) NOT NULL,
  `genre` varchar(20) NOT NULL,
  `addressId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_USERS_ADDRESS_idx` (`addressId`),
  CONSTRAINT `FK_USERS_ADDRESS` FOREIGN KEY (`addressId`) REFERENCES `address` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Maddern','Clo','cmaddern0@nhs.uk','00WowEXk','https://robohash.org/officiismaioresoccaecati.png?size=50x50&set=set1','user','Polygender',1),(2,'Beams','Livvie','lbeams1@amazon.com','3HpsggVJ2','https://robohash.org/inciduntlaudantiumsit.jpg?size=50x50&set=set1','user','Bigender',2),(3,'Clift','Noam','nclift2@rambler.ru','OHC4GPfERWn','https://robohash.org/ullamtotamrerum.bmp?size=50x50&set=set1','user','Male',3),(4,'Shury','Welsh','wshury3@intel.com','V09zQU','https://robohash.org/exercitationemquospossimus.bmp?size=50x50&set=set1','user','Genderqueer',4),(5,'Marshalleck','Tallulah','tmarshalleck4@blogger.com','xGlgl4GRITwM','https://robohash.org/quiaaipsa.png?size=50x50&set=set1','user','Polygender',5),(6,'Alves','Amara','aalves5@ovh.net','cGP33uVj8uf','https://robohash.org/repudiandaeoccaecatiesse.bmp?size=50x50&set=set1','user','Polygender',6),(7,'Ashall','Rosamond','rashall6@hugedomains.com','txkZFj2kka','https://robohash.org/voluptasetquia.bmp?size=50x50&set=set1','user','Genderqueer',7),(8,'Wanless','Catlaina','cwanless7@artisteer.com','YtPw0bCT','https://robohash.org/eossequiamet.png?size=50x50&set=set1','user','Genderqueer',8),(9,'Camerello','Graehme','gcamerello8@utexas.edu','PyrYuaRl','https://robohash.org/providentetrepellendus.jpg?size=50x50&set=set1','user','Female',9),(10,'Corker','Karney','kcorker9@cbslocal.com','HNvgaAUwZnIu','https://robohash.org/doloresquamfuga.png?size=50x50&set=set1','user','Polygender',10),(11,'Skill','Anita','askilla@webs.com','AToz4ktwjQ','https://robohash.org/iustovelaut.png?size=50x50&set=set1','user','Agender',11),(12,'Calderon','Moss','mcalderonb@skyrock.com','P2N1o6KhK','https://robohash.org/expeditaidquasi.bmp?size=50x50&set=set1','user','Genderfluid',12),(13,'Robardet','Tamarra','trobardetc@github.io','QiD771ZU','https://robohash.org/enimhicautem.png?size=50x50&set=set1','user','Genderfluid',13),(14,'Astin','Reuben','rastind@senate.gov','dBClAx7oo1','https://robohash.org/sitsedinventore.bmp?size=50x50&set=set1','user','Bigender',14),(15,'Meegan','Rhett','rmeegane@reverbnation.com','ma8Dji','https://robohash.org/etmaximeut.bmp?size=50x50&set=set1','user','Non-binary',15),(16,'Rossin','Dreddy','drossinf@apache.org','j2xT2zlPK9x','https://robohash.org/iustosaepelaborum.jpg?size=50x50&set=set1','user','Bigender',16),(17,'Amiable','Budd','bamiableg@epa.gov','ERh5QO128Q1w','https://robohash.org/autautdoloremque.png?size=50x50&set=set1','user','Female',17),(18,'Fri','Jacobo','jfrih@ustream.tv','QADYUcmlUxJE','https://robohash.org/minusvelratione.bmp?size=50x50&set=set1','user','Non-binary',18),(19,'Whenham','Hastings','hwhenhami@printfriendly.com','tNg6dDjMfy','https://robohash.org/voluptatesnonquae.png?size=50x50&set=set1','user','Agender',19),(20,'Ruckert','Shel','sruckertj@apache.org','ejbplwJzFE','https://robohash.org/pariaturremat.bmp?size=50x50&set=set1','user','Bigender',20);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-24 14:53:42
