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
class TouristController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("SELECT * FROM tourist", (err, rows, fields) => {
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
        const id_tourist = req.params.id_tourist;
        const tourist = database_1.default.query("SELECT * FROM tourist where id_tourist = ? ", [id_tourist], (err, rows, fields) => {
            if (err) {
                console.log("Failed to query for tourist: " + err);
                res.sendStatus(500);
            }
            res.json(rows);
            console.log("I think we fetched tourist successfully");
        });
    }
    create(req, res) {
        database_1.default.query("INSERT INTO tourist set ?", [req.body]);
    }
    delete(req, res) {
        const id_tourist = req.params.id_tourist;
        const tourist = database_1.default.query("DELETE FROM tourist where id_tourist = ? ", [id_tourist], (err, rows, fields) => {
            if (err) {
                console.log("Failed to delete for tourist: " + err);
                res.sendStatus(500);
            }
            res.json({ message: "delete tourist successfully" });
        });
    }
    update(req, res) {
        const id_tourist = req.params.id_tourist;
        database_1.default.query("UPDATE tourist set ? where id_tourist = ?", [req.body, id_tourist]);
        res.json({ text: 'updating' + req.params.id_tourist });
    }
    updateTouristFly(req, res) {
        //const id_tourist = req.params.id_tourist;
        const id_connecions = req.params.id_connecions;
        //const id_flight = req.params.id_flight;
        database_1.default.query("INSERT INTO connections set ?", [req.body, id_connecions]);
        res.json({ text: 'updating' + req.params.id_connecions });
    }
}
exports.touristController = new TouristController;
