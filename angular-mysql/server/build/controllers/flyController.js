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
class FlyController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("SELECT * FROM flight ", (err, rows, fields) => {
                if (err) {
                    console.log("Failed to query for users: " + err);
                    res.sendStatus(500);
                }
                res.json(rows);
                console.log("I think we fetched users successfully");
            });
        });
    }
    getOne(req, res) {
        const id_flight = req.params.id_flight;
        const fly = database_1.default.query("SELECT * FROM flight where id_flight = ? ", [id_flight], (err, rows, fields) => {
            if (err) {
                console.log("Failed to query for flight: " + err);
                res.sendStatus(500);
            }
            res.json(rows);
            console.log("I think we fetched flight successfully");
        });
    }
    checkFlight(req, res) {
        const departure_date = req.params.departure_date;
        const arrival_date = req.params.arrival_date;
        const fly = database_1.default.query("SELECT * FROM flight where departure_date = ? and arrival_date = ?", [departure_date, arrival_date], (err, rows, fields) => {
            if (err) {
                console.log("Failed to query for flight: " + err);
                res.sendStatus(500);
            }
            res.json(rows);
            console.log(" successfully");
        });
    }
    create(req, res) {
        database_1.default.query("INSERT INTO flight set ?", [req.body], (err, rows, fields) => {
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
    delete(req, res) {
        const id_flight = req.params.id_flight;
        const fly = database_1.default.query("DELETE FROM flight where id_flight = ? ", [id_flight], (err, rows, fields) => {
            if (err) {
                console.log("Failed to delete for flight: " + err);
                res.sendStatus(500);
            }
            res.json({ message: "delete flight successfully" });
        });
    }
    update(req, res) {
        const id_flight = req.params.id_flight;
        database_1.default.query("UPDATE flight set ? where id = ?", [req.body, id_flight]);
        res.json({ text: 'updating' + req.params.id_flight });
    }
}
exports.flyController = new FlyController();
