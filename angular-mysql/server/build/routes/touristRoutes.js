"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const touristController_1 = require("../controllers/touristController");
class TouristRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', touristController_1.touristController.list);
        this.router.get('/:id_tourist', touristController_1.touristController.getOne);
        this.router.post('/', touristController_1.touristController.create);
        this.router.delete('/:id_tourist', touristController_1.touristController.delete);
        this.router.put('/:id_tourist', touristController_1.touristController.update);
        this.router.get('/:first_name/:last_name', touristController_1.touristController.getOneTourist);
    }
}
const touristRoutes = new TouristRoutes;
exports.default = touristRoutes.router;
