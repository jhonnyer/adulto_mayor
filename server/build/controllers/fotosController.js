"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const fileUpload = require('express-fileupload');
const database_1 = __importDefault(require("../database"));
const app = express();
app.use(fileUpload());
class FotosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // await pool.query('SELECT ar.nombre, ar.AF, ar.serie, ar.imagen, ar.stock, ar.id_estado1, ar.id_pdv1, pdv.centro_costo, es.estado FROM articulo ar INNER JOIN PDV pdv on ar.id_pdv1=pdv.id_pdv LEFT JOIN estado es on ar.id_estado1=es.id_estado', function (err, articulo, fields)
            yield database_1.default.query('SELECT * FROM fotos', function (err, foto, fields) {
                if (err)
                    throw err;
                res.json(foto);
                // console.log(articulo);
            });
        });
    }
    ;
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            // const games = await pool.query('SELECT * FROM game WHERE id=?',[id]);
            yield database_1.default.query('SELECT * FROM fotos WHERE id_foto=?', [id], function (err, fotos, fields) {
                if (err)
                    throw err;
                // Si hay un juego en el array games 
                if (fotos.length > 0) {
                    // devolver el indice cero del objeto buscado 
                    return res.json(fotos[0]);
                    console.log(fotos);
                    // res.json({text:"Juego Encontrado"});
                }
                res.status(404).json({ text: 'La foto no existe' });
            });
        });
    }
    ;
    // res.json({text: 'Este es el juego '+req.params.id});
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO fotos set ?', [req.body]);
            res.json({ message: 'La foto se ha añadido al inventario' });
        });
    }
    // public async delete (req:Request, res:Response): Promise<void>{
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Cambio estado frontend');
            console.log(req.body);
            const { id } = req.params;
            // await pool.query('DELETE FROM articulo where id_articulo=?',[id]);
            yield database_1.default.query('UPDATE fotos where id_foto=?', [req.body, id]);
            res.json({ message: "La foto fue borrada del inventario" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({tex:'actualizando un juego '+req.params.id});
            console.log('petición frontend');
            console.log(req.body);
            const { id } = req.params;
            // await pool.query('UPDATE articulo ar INNER JOIN estado es on ar.id_estado1=es.id_estado set ar.id_articulo=id_articulo, ar.articulo=articulo, ar.AF=AF, ar.serie=serie, ar.imagen=imagen, ar.stock=stock, ar.id_cat1=id.cat1, ar.id_estado1=2, ar.id_persona2=id_persona2, ar.id_pdv1=id_pdv1, where id_articulo=?',[req.body, id]);
            yield database_1.default.query('UPDATE fotos set ? where id_foto=?', [req.body, id]);
            res.json({ message: "Las fotos fueron actualizadss" });
        });
    }
}
const fotosController = new FotosController();
exports.default = fotosController;
