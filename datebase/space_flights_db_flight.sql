-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: space_flights_db
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `flight`
--

DROP TABLE IF EXISTS `flight`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `flight` (
  `id_flight` int(11) NOT NULL AUTO_INCREMENT,
  `departure_date` date DEFAULT NULL,
  `arrival_date` date DEFAULT NULL,
  `number_of_seats` int(11) DEFAULT NULL,
  `ticket_price` float DEFAULT NULL,
  PRIMARY KEY (`id_flight`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flight`
--

LOCK TABLES `flight` WRITE;
/*!40000 ALTER TABLE `flight` DISABLE KEYS */;
INSERT INTO `flight` VALUES (1,'2019-10-04','2020-03-06',30,300000),(2,'2020-04-13','2020-12-31',15,350000),(3,'2021-03-20','2022-04-24',20,400000),(4,'2021-05-03','2022-05-02',15,380000),(5,'2021-05-03','2022-05-02',15,380000),(6,'2021-05-03','2022-05-02',15,380000),(7,'2021-05-03','2022-05-02',15,380000),(8,'2019-10-11','2020-10-10',30,300000),(10,'2021-05-03','2022-05-02',10,400000),(11,'2021-05-03','2022-05-02',10,400000),(12,'2019-10-11','2020-10-10',34,490000),(13,'2019-10-11','2020-10-10',34,490000),(14,'2019-10-11','2020-10-10',10,500000),(15,'2019-10-11','2020-10-10',10,500000),(16,'2021-05-03','2020-10-10',5,600000),(17,'2021-05-03','2020-10-10',5,600000),(18,'2021-05-03','2020-10-10',5,600000),(19,'2021-05-03','2020-10-10',5,600000),(20,'2021-05-03','2020-10-10',5,600000),(21,'2021-05-03','2020-10-10',5,600000),(22,'2021-05-03','2020-10-10',5,600000),(23,'2021-05-03','2020-10-10',5,600000),(24,'2022-04-05','2023-05-03',8,450000),(25,'2022-04-05','2023-05-03',14,600000);
/*!40000 ALTER TABLE `flight` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-09 21:21:11
