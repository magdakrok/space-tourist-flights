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

  public listNumberOfSeats(req: Request, res: Response) {
    const id_flight = req.params.id_flight;
    console.log(id_flight);
   conn.query("SELECT COUNT(id_connections) AS number_seats FROM connections where id_flight = ?", [id_flight], (err, rows, fields) => {
      if (err) {
        console.log("Failed to query: " + err);
        // res.sendStatus(500);
      }
      console.log(`id flight ${id_flight}`);
      res.json(rows);
      console.log(`successfully number seats: ${rows}`);

      });
  }
}
export const reservationController = new ReservationController();