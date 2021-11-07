-- MySQL dump 10.13  Distrib 5.7.12, for Win32 (AMD64)
--
-- Host: 127.0.0.1    Database: akamaru_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.25-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
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
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `cp` int(11) NOT NULL,
  `cpa` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'Falsa',122,'Moreno','Buenos Aires',1744,'ISO 9331-2:AR');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_CART_USER_idx` (`userId`),
  KEY `FK_CART_PRODUCT_idx` (`productId`),
  KEY `FK_CART_ORDER_idx` (`orderId`),
  CONSTRAINT `FK_CART_ORDER` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_CART_PRODUCT` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `FK_CART_USER` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
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
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `productId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Images_Products1_idx` (`productId`),
  CONSTRAINT `fk_Images_Products1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (3,'figura6.webp',3),(4,'6figuras.webp',4),(5,'images-1630430184730.jpg',5),(6,'images-1630430184738.jpg',5),(7,'images-1630430184739.jpg',5),(8,'images-1630431572606.jpg',6),(9,'images-1630431572620.jpg',6),(10,'images-1630431572621.jpg',6),(15,'images-1630432464968.jpg',8),(16,'images-1630432520260.jpg',9),(17,'images-1630432718728.webp',10),(18,'images-1630432718747.webp',10),(19,'images-1630432718782.webp',10),(20,'images-1630432718811.webp',10),(25,'images-1630432978392.webp',12),(26,'images-1630432978400.webp',12),(27,'images-1630432978421.webp',12),(28,'images-1630432978475.webp',12),(29,'images-1630432978503.webp',12),(30,'images-1630432978531.webp',12),(31,'images-1630433142316.jpg',13),(32,'images-1630433142320.jpg',13),(33,'images-1630433142323.webp',13),(34,'images-1630433142327.webp',13),(35,'images-1630433142329.webp',13),(36,'images-1630433142334.webp',13),(37,'images-1630433276477.jpg',14),(38,'images-1630433276487.jpg',14),(39,'images-1630433276491.jpg',14),(40,'images-1630433365149.jpg',15),(41,'images-1630433365164.jpg',15),(42,'images-1630433417551.jpg',16),(43,'images-1630433495266.jpg',17),(44,'images-1630433495291.jpg',17),(45,'images-1630433495291.jpg',17),(46,'images-1630433563182.jpg',18),(47,'images-1630433629613.jpg',19),(48,'images-1630433629715.jpg',19),(49,'images-1630433734907.jpg',20),(50,'images-1630433734912.jpg',20),(51,'images-1630433734913.jpg',20),(52,'images-1630433734916.jpg',20),(53,'images-1630433832813.webp',21),(54,'images-1630433832817.jpg',21),(55,'images-1630433832822.webp',21),(56,'images-1630433832823.jpg',21),(57,'images-1630433912636.jpg',22),(58,'images-1630433912639.jpg',22),(59,'images-1630433912640.jpg',22),(60,'images-1630434089838.jpg',23),(61,'images-1630434089910.jpg',23),(62,'images-1630434089928.jpg',23),(63,'images-1630434089957.jpg',23),(64,'images-1630434219756.jpg',24),(65,'images-1630434219824.webp',24),(66,'images-1630434219941.jpg',24),(67,'images-1630434219968.webp',24),(68,'images-1630434315409.jpg',25),(69,'images-1630434315415.jpg',25),(70,'images-1630434315420.jpg',25),(71,'images-1630434315428.jpg',25),(72,'images-1630434315430.jpg',25),(73,'images-1630434315437.webp',25),(75,'images-1632801078950.jpg',28);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mediosdepagos`
--

DROP TABLE IF EXISTS `mediosdepagos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mediosdepagos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mediosdepagos`
--

LOCK TABLES `mediosdepagos` WRITE;
/*!40000 ALTER TABLE `mediosdepagos` DISABLE KEYS */;
/*!40000 ALTER TABLE `mediosdepagos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `total` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ORDER_USER_idx` (`userId`),
  CONSTRAINT `FK_ORDER_USER` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (7,'pending',2,0);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `cuotas` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `categoryId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_PRODUCTS_CATEGORY_idx` (`categoryId`),
  CONSTRAINT `FK_Products_Categories` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,'Naruto',260,3,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',3),(4,'Naruto opc2',260,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',3),(5,'Gorro Naruto',300,2,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',1),(6,'Gorra Dragon Ball',450,3,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',1),(8,'Cartuchera Bulma',300,3,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',2),(9,'Cartuchera DB',500,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',2),(10,'Naruto Uzumaki',700,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',3),(12,'Lady Tsunade',800,8,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',3),(13,'Naruto Zorro 9 Colas',800,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',3),(14,'Mochila Pokemon',2000,12,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',5),(15,'Bolso Super Saiyan',3300,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',5),(16,'Mochila Super Saiyan',4500,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',5),(17,'Taza Dragon Ball Z',300,2,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',6),(18,'Taza Death Note',650,3,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',6),(19,'Taza Shenlong DB',750,3,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',6),(20,'Taza Pokemon',670,3,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',6),(21,'Taza',780,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',6),(22,'Billetera Naruto',590,3,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',1),(23,'Boa One Piece',850,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',3),(24,'Kakashi Naruto',680,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',3),(25,'Gaara Naruto',750,6,1,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aliquam in',3),(28,'Espada Katana Sasuke Uchiha ',2500,1,1,'ESPADA KATANA CON FUNDA SASUKE + CINTO + BANDANA:\r\n\r\n* INCLUYE:\r\n1 Espada Katana Ninja.\r\n1 Funda para Espada.\r\n1 Arnes para ajustar la Espada a la Cintura.\r\n1 Bandana\r\n* Medidas:\r\nEspada 70cm (largo) x 27mm (alto) x 12mm (profundidad).\r\nMango Espada 22.5cm (largo) x 36mm (alto) x 15mm (profundidad).\r\nFunda 48cm (larrgo) x 38mm (alto) x 17mm (profundidad).\r\nCinto 100cm.\r\nBroches 7.5cm x 4.5cm.\r\n\r\nLas imágenes son ilustrativas, el producto puede tener variaciones dependiendo del distribuidor/marca sin afectar las funciones y calidad del mismo.',1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjetas`
--

DROP TABLE IF EXISTS `tarjetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjetas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nroTarjeta` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `mediosDePagosId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Tarjetas_Users1_idx` (`userId`),
  KEY `fk_Tarjetas_Mediosdepagos1_idx` (`mediosDePagosId`),
  CONSTRAINT `fk_Tarjetas_Mediosdepagos1` FOREIGN KEY (`mediosDePagosId`) REFERENCES `mediosdepagos` (`id`),
  CONSTRAINT `fk_Tarjetas_Users1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjetas`
--

LOCK TABLES `tarjetas` WRITE;
/*!40000 ALTER TABLE `tarjetas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjetas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lastname` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `rol` varchar(20) NOT NULL,
  `genre` varchar(20) NOT NULL,
  `addressId` int(11) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_USERS_ADDRESS_idx` (`addressId`),
  CONSTRAINT `FK_USERS_ADDRESS` FOREIGN KEY (`addressId`) REFERENCES `address` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Parodi','Sofia','sofia.parodi503@gmail.com','$2a$12$dbch67HmDdgmr2cB8GVrZeDPBhAK6jO0lsZmIz1dI7t7808W.ptwi','imagen-1632541415018.jpg','user','Femenino',1,'2000-05-02'),(2,'Fulanito','Cosmee','cosme@gmail.com','$2a$12$EuGysDIKeOhThmKPTA1xXu2C4lEnn1PEoOn66xVZkW.lTnHpYLuzO','imagen-1636167036764.jpg','admin','Femenino',1,'1993-09-22'),(3,'','','','$2a$12$Pey/Us1HyGvak5eOv0x2y.UomqEYumUaXJfWIEObx3p8cREjUuLze','default-user.jpg','user','',1,'0000-00-00');
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

-- Dump completed on 2021-11-07  7:27:53
