import { Request, Response, Application } from 'express';
import conn from '../database';

class ConnectionController {

  public async list(req: Request, res: Response) {

    await conn.query("SELECT *  FROM flight, tourist, connections  where connections.id_tourist = tourist.id_tourist and connections.id_flight = flight.id_flight ", (err, rows, fields) => {
      if (err) {
        console.log("Failed to query: " + err);
        res.sendStatus(500);
      }
      res.json(rows);
      console.log("successfully");
      console.log(rows);
    });
  }
  public async listFlight(req: Request, res: Response) {
    const id_flight = req.params.id_flight;
    await conn.query("SELECT * FROM tourist, connections, flight where connections.id_flight = flight.id_flight AND connections.id_tourist = tourist.id_tourist and flight.id_flight = ?", [id_flight], (err, rows, fields) => {
      if (err) {
        console.log("Failed to query : " + err);
        res.sendStatus(500);
      }
      res.json(rows);
      console.log("successfully");
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
    conn.query("INSERT INTO connections set ? ", [req.body], (err, rows, fields) => {
      if (err) {
        console.log("Failed to query: " + err);
        // res.sendStatus(500);
      }
      res.json(rows);
      console.log("successfully");
      // console.log(rows);
      return rows;
    });
    console.log("zostałeś zapisany!")
  }

 public checkRes(req: Request, res: Response) {
    //const id_flight = req.params.id_flight;
    const id_tourist = req.params.id_tourist;
    const id_flight = req.params.id_flight;
    conn.query("SELECT * FROM connections where id_tourist = ? and id_flight = ?", [id_tourist, id_flight], (err, rows, fields) => {
      if (err) {
        console.log("Failed to query" + err);
        // res.sendStatus(500);
      }
      res.json(rows);
      console.log("successfully");
      console.log(rows);

    });
  }

 
}
export const connectionsController = new ConnectionController();