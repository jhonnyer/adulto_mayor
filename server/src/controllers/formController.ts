import{Request, Response} from 'express';
import pool from '../database';
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

class FormController{
    public async list(req: Request, res: Response){
        // await pool.query('SELECT ar.nombre, ar.AF, ar.serie, ar.imagen, ar.stock, ar.id_estado1, ar.id_pdv1, pdv.centro_costo, es.estado FROM articulo ar INNER JOIN PDV pdv on ar.id_pdv1=pdv.id_pdv LEFT JOIN estado es on ar.id_estado1=es.id_estado', function (err, articulo, fields)
        await pool.query('SELECT * FROM Adulto_Mayor am INNER JOIN fotos fo on am.id_foto1=fo.id_foto', function (err, articulo, fields)
        {
            if(err) throw err;
            res.json(articulo);
            // console.log(articulo);
        })};
        
    public async getOne(req: Request, res: Response):Promise<any>{
        const {id}=req.params;
        // const games = await pool.query('SELECT * FROM game WHERE id=?',[id]);
        await pool.query('SELECT * FROM Adulto_Mayor WHERE id_adulto_mayor=?',[id], function(err, articulos, fields)
        {
            if(err) throw err;
            // Si hay un juego en el array games 
            if (articulos.length>0){
                // devolver el indice cero del objeto buscado 
                return res.json(articulos[0]);
                console.log(articulos);
                // res.json({text:"Juego Encontrado"});
            }
            res.status(404).json({text:'El usuario no existe'});            
        })};
        
    // res.json({text: 'Este es el juego '+req.params.id});
    public async create (req:Request, res:Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO Adulto_Mayor set ?',[req.body]);
        res.json({message:'El articulo se añadio al inventario'});
    }
    // public async delete (req:Request, res:Response): Promise<void>{
    public async delete(req:Request, res:Response): Promise<void>{
        console.log('Cambio estado frontend')
        console.log(req.body);
        const{id}=req.params;
        // await pool.query('DELETE FROM articulo where id_articulo=?',[id]);
        await pool.query('UPDATE Adulto_Mayor where id_adulto_mayor=?',[req.body, id]);
        res.json({message:"El usuario fue dado de baja en el inventario"});
    }
    public async update (req:Request, res:Response):Promise<void>{
        // res.json({tex:'actualizando un juego '+req.params.id});
        console.log('petición frontend')
        console.log(req.body);
        const{id}=req.params;
        // await pool.query('UPDATE articulo ar INNER JOIN estado es on ar.id_estado1=es.id_estado set ar.id_articulo=id_articulo, ar.articulo=articulo, ar.AF=AF, ar.serie=serie, ar.imagen=imagen, ar.stock=stock, ar.id_cat1=id.cat1, ar.id_estado1=2, ar.id_persona2=id_persona2, ar.id_pdv1=id_pdv1, where id_articulo=?',[req.body, id]);
        await pool.query('UPDATE Adulto_Mayor set ? where id_adulto_mayor=?',[req.body, id]);
        res.json({message:"Los campos del beneficiario fueron actualizados"});
    }
}

const formController = new FormController();
export default formController;