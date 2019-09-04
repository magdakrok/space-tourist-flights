CREATE TABLE tourist( 
    id_tourist INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(180),
    last_name VARCHAR(180),
    gender VARCHAR(180),
    country VARCHAR(180),
    remarks VARCHAR(255),
    date_of_birth date
    
);

CREATE TABLE flight( 
    id_flight INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    departure_date date,
	departure_time time,
    arrival_date date,
    arrival_time time,
    number_of_seats int(11),
    ticket_price float(20)
);
create table connections(
  id_connections int(11),
  id_tourist int(11),
  id_flight int(11)
);

ALTER TABLE `connections`
ADD FOREIGN KEY (`id_flight`)
REFERENCES `flight`(`id_flight`);

ALTER TABLE `connections`
ADD FOREIGN KEY (`id_tourist`)
REFERENCES `tourist`(`id_tourist`);
