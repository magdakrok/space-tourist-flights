"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const connections_1 = require("../../../client-application/src/app/models/connections");
class ConnectionController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("SELECT *  FROM flight, tourist, connections  where connections.id_tourist = tourist.id_tourist and connections.id_flight = flight.id_flight ", (err, rows, fields) => {
                if (err) {
                    console.log("Failed to query: " + err);
                    res.sendStatus(500);
                }
                res.json(rows);
                console.log("successfully");
                console.log(rows);
            });
        });
    }
    listFlight(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_flight = req.params.id_flight;
            yield database_1.default.query("SELECT * FROM tourist, connections, flight where connections.id_flight = flight.id_flight AND connections.id_tourist = tourist.id_tourist and flight.id_flight = ?", [id_flight], (err, rows, fields) => {
                if (err) {
                    console.log("Failed to query : " + err);
                    res.sendStatus(500);
                }
                res.json(rows);
                console.log("successfully");
            });
        });
    }
    deleteFlight(req, res) {
        const id_flight = req.params.id_flight;
        const tourist = database_1.default.query("DELETE FROM connections where id_connections = ? ", [id_flight], (err, rows, fields) => {
            if (err) {
                console.log("Failed to delete for connection: " + err);
                res.sendStatus(500);
            }
            res.json({ message: "delete connections successfully" });
        });
    }
    deleteTourist(req, res) {
        const id_tourist = req.params.id_tourist;
        const tourist = database_1.default.query("DELETE FROM connections where id_connections = ? ", [id_tourist], (err, rows, fields) => {
            if (err) {
                console.log("Failed to delete for connection: " + err);
                res.sendStatus(500);
            }
            res.json({ message: "delete connections successfully" });
        });
    }
    createConnection(req, res) {
        //const id_flight = req.params.id_flight;
        ////  const checkNumberOfSeats = this.checkRes(id_flight);
        // const numberOfSeats = conn.query("SELECT number_of_seats FROM flight where id_flight = ?", [id_flight]);
        //console.log(checkNumberOfSeats,numberOfSeats);
        //if(checkNumberOfSeats <= numberOfSeats ){
        database_1.default.query("INSERT INTO connections set ? ", [req.body], (err, rows, fields) => {
            if (err) {
                console.log("Failed to query: " + err);
                // res.sendStatus(500);
            }
            res.json(rows);
            console.log("successfully");
            // console.log(rows);
            return rows;
        });
        console.log("zostałeś zapisany!");
    }
    checkRes() { [id, string]; connections_1.Connection; }
}
 > (req);
Request, res;
Response;
{
    //const id_flight = req.params.id_flight;
    const id_tourist = req.params.id_tourist;
    const id_flight = req.params.id_flight;
    database_1.default.query("SELECT * FROM connections where id_tourist = ? and id_flight = ?", [id_tourist, id_flight], (err, rows, fields) => {
        if (err) {
            console.log("Failed to query" + err);
            // res.sendStatus(500);
        }
        res.json(rows);
        console.log("successfully");
        console.log(rows);
    });
}
async;
listNumberOfSeats(req, Request, res, Response);
{
    const id_flight = req.params.id_flight;
    console.log(id_flight);
    yield database_1.default.query("SELECT COUNT(id_flight) FROM connections where id_flight = ?", [id_flight], (err, rows, fields) => {
        if (err) {
            console.log("Failed to query: " + err);
            // res.sendStatus(500);
        }
        res.json(rows);
        console.log("successfully");
    });
}
exports.connectionsController = new ConnectionController();
