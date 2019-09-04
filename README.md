# space-tourist-flights
Application for managing space tourist flights


Application communicate through REST API with a server implementing business logic and managing the connection to the database MySql.
Server created in Node.js,
application in Angular 7 and Bootstrap 4.

Functionalities
1. Tourist management
  a. List of tourists
  b. Adding a tourist
  c. Removing a tourist
  d. Editiing a tourist
  i. Adding a flight (selection from existing flights)
  ii. Removing the flight
2. Flight management
  a. List of flights
  b.Adding a flight
  c. Removing a flight
  d. Editing a flight
  i. Adding a tourist to the flight (selection of existing tourists)
  ii. Removal of a tourist from the flight
  
How to run...
In the console 
moon\angular-mysql\server>npm run build

Open new console window 
moon\angular-mysql\server>node build/index.js

Open new console window 
moon\angular-mysql\client-application>ng serve -o 

  
