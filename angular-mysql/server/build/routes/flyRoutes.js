"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const flyController_1 = require("../controllers/flyController");
class FlyRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', flyController_1.flyController.list);
        this.router.get('/:id_flight', flyController_1.flyController.getOne);
        this.router.get('/:departure_date/:arrival_date', flyController_1.flyController.checkFlight);
        this.router.post('/', flyController_1.flyController.create);
        this.router.delete('/:id_flight', flyController_1.flyController.delete);
        this.router.put('/:id_flight', flyController_1.flyController.update);
    }
}
const flyRoutes = new FlyRoutes();
exports.default = flyRoutes.router;
