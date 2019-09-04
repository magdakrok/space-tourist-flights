"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const touristController_1 = require("../controllers/touristController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', touristController_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
