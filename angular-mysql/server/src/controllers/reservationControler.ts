import { Request, Response, Application } from 'express';
import conn from '../database';

class ReservationController {

  public async reservation(req: Request, res: Response) {
    const departure_date = req.params.departure_date;
    const arrival_date = req.params.arrival_date;
    
    await conn.query("select * from flight where departure_date > ? and departure_date  < ? and arrival_date < ? and arrival_date > ?", [departure_date, arrival_date, arrival_date, departure_date], (err, rows, fields) => {
      if (err) {
        console.log("Failed to query for users: " + err);
        res.sendStatus(500);
      }
      res.json(rows);
      console.log("I think we fetched users successfully");
      //console.log(rows);
    });
  }
}
export const reservationController = new ReservationController();