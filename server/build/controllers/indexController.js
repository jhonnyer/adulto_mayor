"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        // res.send('Hola prueba');
        res.json({ tex: 'API Is /Api/form' });
    }
}
exports.indexController = new IndexController();
