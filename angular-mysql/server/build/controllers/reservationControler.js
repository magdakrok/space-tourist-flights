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
class ReservationController {
    reservation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const departure_date = req.params.departure_date;
            const arrival_date = req.params.arrival_date;
            yield database_1.default.query("select * from flight where departure_date > ? and departure_date  < ? and arrival_date < ? and arrival_date > ?", [departure_date, arrival_date, arrival_date, departure_date], (err, rows, fields) => {
                if (err) {
                    console.log("Failed to query for users: " + err);
                    res.sendStatus(500);
                }
                res.json(rows);
                console.log("I think we fetched users successfully");
                //console.log(rows);
            });
        });
    }
    listNumberOfSeats(req, res) {
        const id_flight = req.params.id_flight;
        console.log(id_flight);
        database_1.default.query("SELECT COUNT(id_connections) AS number_seats FROM connections where id_flight = ?", [id_flight], (err, rows, fields) => {
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
exports.reservationController = new ReservationController();
