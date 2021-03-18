"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fotosController_1 = __importDefault(require("../controllers/fotosController"));
class FotosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/', fotosController_1.default.list);
        this.router.get('/:id', fotosController_1.default.getOne);
        this.router.post('/', fotosController_1.default.create);
        // this.router.delete('/:id', fotosController.delete);
        this.router.patch('/:id', fotosController_1.default.delete);
        this.router.put('/:id', fotosController_1.default.update);
        // this.router.patch('/:id', fotosController.update);
    }
}
const fotosRoutes = new FotosRoutes();
exports.default = fotosRoutes.router;
