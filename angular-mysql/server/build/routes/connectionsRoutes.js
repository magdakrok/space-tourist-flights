"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connectionsControler_1 = require("../controllers/connectionsControler");
class ConnectionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //this.router.get('/:id_tourist', connectionsController.listTourist);
        this.router.get('/:id_flight', connectionsControler_1.connectionsController.listFlight);
        this.router.get('/', connectionsControler_1.connectionsController.list);
        // this.router.get('/:id_flight', flyController.getOne);
        this.router.post('/', connectionsControler_1.connectionsController.createConnection);
        this.router.delete('/:id_tourist', connectionsControler_1.connectionsController.deleteTourist);
        this.router.delete('/:id_flight', connectionsControler_1.connectionsController.deleteFlight);
        //this.router.put('/:id_flight',flyController.update);
    }
}
const connectionsRoutes = new ConnectionRoutes();
exports.default = connectionsRoutes.router;
