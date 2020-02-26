import { Request, Response, Application } from 'express';
import conn from '../database';

class TouristController {

  public async list(req: Request, res: Response) {

    await conn.query("SELECT * FROM tourist", (err, rows, fields) => {
      if (err) {
        console.log("Failed to query for users: " + err);
        res.sendStatus(500);
      }
      res.json(rows);
      console.log("I think we fetched users successfully");
    });
  }

public getOne(req: Request, res: Response) {

    const id_tourist = req.params.id_tourist;
    const tourist = conn.query("SELECT * FROM tourist where id_tourist = ? ", [id_tourist], (err, rows, fields) => {
      if (err) {
        console.log("Failed to query for tourist: " + err);
        res.sendStatus(500);
      }
      res.json(rows);
      console.log("I think we fetched tourist successfully");
    });
  }

  public getOneTourist(req: Request, res: Response) {

    const first_name = req.params.first_name;
    const last_name = req.params.last_name;
    const tourist = conn.query("SELECT * FROM tourist where first_name = ? and last_name =?  ", [first_name, last_name], (err, rows, fields) => {
      if (err) {
        console.log("Failed to query for tourist: " + err);
        res.sendStatus(500);
      }
      res.json(rows);
      console.log("I think we fetched tourist successfully");
    });
  }

  public create(req: Request, res: Response) {
    conn.query("INSERT INTO tourist set ?", [req.body], (err, rows, fields) => {
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

  


  public delete(req: Request, res: Response) {
    const id_tourist = req.params.id_tourist;
    const tourist = conn.query("DELETE FROM tourist where id_tourist = ? ", [id_tourist], (err, rows, fields) => {
      if (err) {
        console.log("Failed to delete for tourist: " + err);
        res.sendStatus(500);
      }
  res.json({ message: "delete tourist successfully" });
    });
  }

  public update(req: Request, res: Response) {
    const id_tourist = req.params.id_tourist;
    conn.query("UPDATE tourist set ? where id_tourist = ?", [req.body, id_tourist]);
  res.json({ text: 'updating' + req.params.id_tourist });
  }

  public updateTouristFly(req: Request, res: Response) {
    const id_connecions = req.params.id_connecions;
    conn.query("INSERT INTO connections set ?", [req.body, id_connecions]);
    res.json({ text: 'updating' + req.params.id_connecions });
  }
}


export const touristController = new TouristController;