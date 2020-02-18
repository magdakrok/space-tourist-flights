import { Request, Response, Application } from 'express';
import conn from '../database';

class ConnectionController {

  public async list(req: Request, res: Response) {

    await conn.query("SELECT *  FROM flight, tourist, connections  where connections.id_tourist = tourist.id_tourist and connections.id_flight = flight.id_flight ", (err, rows, fields) => {
      if (err) {
        console.log("Failed to query for users: " + err);
        res.sendStatus(500);
      }
      res.json(rows);
      console.log("I think we fetched users successfully");
      console.log(rows);
    });
  }
  public async listFlight(req: Request, res: Response) {

    const id_flight = req.params.id_flight;
    await conn.query("SELECT * FROM tourist, connections, flight where connections.id_flight = flight.id_flight AND connections.id_tourist = tourist.id_tourist and flight.id_flight = ?", [id_flight], (err, rows, fields) => {
      if (err) {
        console.log("Failed to query for users: " + err);
        res.sendStatus(500);
      }
      res.json(rows);
      console.log("I think we fetched users successfully");
    });
  }

  public deleteFlight(req: Request, res: Response) {
    const id_flight = req.params.id_flight;
    const tourist = conn.query("DELETE FROM connections where id_connections = ? ", [id_flight], (err, rows, fields) => {
      if (err) {
        console.log("Failed to delete for connection: " + err);
        res.sendStatus(500);
      }

      res.json({ message: "delete connections successfully" });
    });
  }

  public deleteTourist(req: Request, res: Response) {
    const id_tourist = req.params.id_tourist;
    const tourist = conn.query("DELETE FROM connections where id_connections = ? ", [id_tourist], (err, rows, fields) => {
      if (err) {
        console.log("Failed to delete for connection: " + err);
        res.sendStatus(500);
      }

      res.json({ message: "delete connections successfully" });
    });
  }

  
  


  public createConnection(req: Request, res: Response) {
    const id_flight = req.params.id_flight;
    //let checkNumberOfSeats = this.checkRes(id_flight);
    //let numberOfSeats = this.listNumberOfSeats(id_flight);
    //const c = this.list(req: Request, res: Response);
   // if(checkNumberOfSeats <= numberOfSeats ){
     conn.query("INSERT INTO connections set ? ", [req.body]);
     // console.log()
   // }
  }

  checkRes(id_flight: string) {
    //const id_flight = req.params.id_flight;
     conn.query("SELECT COUNT(?) FROM connections", [id_flight],(err, rows, fields) => {
      if (err) {
        console.log("Failed to query for users: " + err);
       // res.sendStatus(500);
      }
      //res.json(rows);
      console.log("I think we fetched users successfully");
      console.log(rows);
      return rows;
    });
  }
    
  
     async listNumberOfSeats(id_flight: number) {
      //const id_flight = req.params.id_flight;
      await conn.query("SELECT number_of_seats FROM flight where id_flight = ?", [id_flight],(err, rows, fields) => {
        if (err) {
          console.log("Failed to query for users: " + err);
         // res.sendStatus(500);
        }
        //res.json(rows);
        console.log("I think we fetched users successfully");
        console.log(rows);
      });
    }
    




}
export const connectionsController = new ConnectionController();