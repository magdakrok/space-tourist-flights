"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const reservationControler_1 = require("../controllers/reservationControler");
class ReservationRoutes {
    constructor() {
        this.router = express.Router();
        this.config();
    }
    config() {
        this.router.get('/:departure_date/:arrival_date', reservationControler_1.reservationController.reservation);
    }
}
const reservationRoutes = new ReservationRoutes();
exports.default = reservationRoutes.router;
