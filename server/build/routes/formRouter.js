"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formController_1 = __importDefault(require("../controllers/formController"));
class FormRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/', formController_1.default.list);
        this.router.get('/:id', formController_1.default.getOne);
        this.router.post('/', formController_1.default.create);
        // this.router.delete('/:id', articulosController.delete);
        this.router.patch('/:id', formController_1.default.delete);
        this.router.put('/:id', formController_1.default.update);
        // this.router.patch('/:id', gamesController.update);
    }
}
const formRoutes = new FormRoutes();
exports.default = formRoutes.router;
