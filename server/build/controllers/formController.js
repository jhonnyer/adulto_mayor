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
const database_1 = __importDefault(require("../database"));
// import { catchError } from 'rxjs/operators';
// CJS
// nombre?: string;
//     AF?:number;
//     serie?:string;
//     imagen?:string;
//     stock?:number;
//     id_cat1?:number;
//     id_estado1?:number;
//     id_persona2?:number;
//     id_pdv1?:number;
class FormController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // await pool.query('SELECT ar.nombre, ar.AF, ar.serie, ar.imagen, ar.stock, ar.id_estado1, ar.id_pdv1, pdv.centro_costo, es.estado FROM articulo ar INNER JOIN PDV pdv on ar.id_pdv1=pdv.id_pdv LEFT JOIN estado es on ar.id_estado1=es.id_estado', function (err, articulo, fields)
            yield database_1.default.query('SELECT * FROM Adulto_Mayor am INNER JOIN fotos fo on am.id_foto1=fo.id_foto', function (err, articulo, fields) {
                if (err)
                    throw err;
                res.json(articulo);
                // console.log(articulo);
            });
        });
    }
    ;
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            // const games = await pool.query('SELECT * FROM game WHERE id=?',[id]);
            yield database_1.default.query('SELECT * FROM Adulto_Mayor WHERE id_adulto_mayor=?', [id], function (err, articulos, fields) {
                if (err)
                    throw err;
                // Si hay un juego en el array games 
                if (articulos.length > 0) {
                    // devolver el indice cero del objeto buscado 
                    return res.json(articulos[0]);
                    console.log(articulos);
                    // res.json({text:"Juego Encontrado"});
                }
                res.status(404).json({ text: 'El usuario no existe' });
            });
        });
    }
    ;
    // res.json({text: 'Este es el juego '+req.params.id});
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO Adulto_Mayor set ?', [req.body]);
            res.json({ message: 'El articulo se añadio al inventario' });
        });
    }
    // public async delete (req:Request, res:Response): Promise<void>{
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Cambio estado frontend');
            console.log(req.body);
            const { id } = req.params;
            // await pool.query('DELETE FROM articulo where id_articulo=?',[id]);
            yield database_1.default.query('UPDATE Adulto_Mayor where id_adulto_mayor=?', [req.body, id]);
            res.json({ message: "El usuario fue dado de baja en el inventario" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({tex:'actualizando un juego '+req.params.id});
            console.log('petición frontend');
            console.log(req.body);
            const { id } = req.params;
            // await pool.query('UPDATE articulo ar INNER JOIN estado es on ar.id_estado1=es.id_estado set ar.id_articulo=id_articulo, ar.articulo=articulo, ar.AF=AF, ar.serie=serie, ar.imagen=imagen, ar.stock=stock, ar.id_cat1=id.cat1, ar.id_estado1=2, ar.id_persona2=id_persona2, ar.id_pdv1=id_pdv1, where id_articulo=?',[req.body, id]);
            yield database_1.default.query('UPDATE Adulto_Mayor set ? where id_adulto_mayor=?', [req.body, id]);
            res.json({ message: "Los campos del beneficiario fueron actualizados" });
        });
    }
}
const formController = new FormController();
exports.default = formController;
