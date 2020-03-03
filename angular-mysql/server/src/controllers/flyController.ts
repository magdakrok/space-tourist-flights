import { Request, Response, Application } from 'express';
import conn from '../database';

class FlyController {

  public async list(req: Request, res: Response) {

    await conn.query("SELECT * FROM flight ",
      (err, rows, fields) => {
        if (err) {
          console.log("Failed to query for users: " + err);
          res.sendStatus(500);
        }
        res.json(rows);
        console.log("I think we fetched users successfully");
      });
  }

  public getOne(req: Request, res: Response) {

    const id_flight = req.params.id_flight;
    const fly = conn.query("SELECT * FROM flight where id_flight = ? ", [id_flight], (err, rows, fields) => {
      if (err) {
        console.log("Failed to query for flight: " + err);
        res.sendStatus(500);
      }
      res.json(rows);
      console.log("I think we fetched flight successfully");
    });
  }

  public checkFlight(req: Request, res: Response) {

    const departure_date = req.params.departure_date;
    const arrival_date = req.params.arrival_date;
    const fly = conn.query("SELECT * FROM flight where departure_date = ? and arrival_date = ?", [departure_date, arrival_date], (err, rows, fields) => {
      if (err) {
        console.log("Failed to query for flight: " + err);
        res.sendStatus(500);
      }
      res.json(rows);
      console.log(" successfully");
    });
  }


  public create(req: Request, res: Response) {
    conn.query("INSERT INTO flight set ?", [req.body],(err, rows, fields) => {
      if (err) {
        console.log("Failed to query: " + err);
        // res.sendStatus(500);
      }
      res.json(rows);
      console.log("successfully");
      // console.log(rows);
      return rows;
    });
  }

  public delete(req: Request, res: Response) {
    const id_flight = req.params.id_flight;
    const fly = conn.query("DELETE FROM flight where id_flight = ? ", [id_flight], (err, rows, fields) => {
      if (err) {
        console.log("Failed to delete for flight: " + err);
        res.sendStatus(500);
      }
    res.json({ message: "delete flight successfully" });
    });
  }

  public update(req: Request, res: Response) {
    const id_flight = req.params.id_flight;
    conn.query("UPDATE flight set ? where id = ?", [req.body, id_flight]);
    res.json({ text: 'updating' + req.params.id_flight });
  }
}
export const flyController = new FlyController();