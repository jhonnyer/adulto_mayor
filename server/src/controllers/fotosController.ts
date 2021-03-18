import{Request, Response} from 'express';
const express = require('express')
const fileUpload = require('express-fileupload')
import pool from '../database';

const app = express()
app.use(fileUpload())

class FotosController{
    public async list(req: Request, res: Response){
        // await pool.query('SELECT ar.nombre, ar.AF, ar.serie, ar.imagen, ar.stock, ar.id_estado1, ar.id_pdv1, pdv.centro_costo, es.estado FROM articulo ar INNER JOIN PDV pdv on ar.id_pdv1=pdv.id_pdv LEFT JOIN estado es on ar.id_estado1=es.id_estado', function (err, articulo, fields)
        await pool.query('SELECT * FROM fotos', function (err, foto, fields)
        {
            if(err) throw err;
            res.json(foto);
            // console.log(articulo);
        })};
        
    public async getOne(req: Request, res: Response):Promise<any>{
        const {id}=req.params;
        // const games = await pool.query('SELECT * FROM game WHERE id=?',[id]);
        await pool.query('SELECT * FROM fotos WHERE id_foto=?',[id], function(err, fotos, fields)
        {
            if(err) throw err;
            // Si hay un juego en el array games 
            if (fotos.length>0){
                // devolver el indice cero del objeto buscado 
                return res.json(fotos[0]);
                console.log(fotos);
                // res.json({text:"Juego Encontrado"});
            }
            res.status(404).json({text:'La foto no existe'});            
        })};
        
    // res.json({text: 'Este es el juego '+req.params.id});
    public async create (req:Request, res:Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO fotos set ?',[req.body]);
        res.json({message:'La foto se ha añadido al inventario'});
    }
    // public async delete (req:Request, res:Response): Promise<void>{
    public async delete(req:Request, res:Response): Promise<void>{
        console.log('Cambio estado frontend')
        console.log(req.body);
        const{id}=req.params;
        // await pool.query('DELETE FROM articulo where id_articulo=?',[id]);
        await pool.query('UPDATE fotos where id_foto=?',[req.body, id]);
        res.json({message:"La foto fue borrada del inventario"});
    }
    public async update (req:Request, res:Response):Promise<void>{
        // res.json({tex:'actualizando un juego '+req.params.id});
        console.log('petición frontend')
        console.log(req.body);
        const{id}=req.params;
        // await pool.query('UPDATE articulo ar INNER JOIN estado es on ar.id_estado1=es.id_estado set ar.id_articulo=id_articulo, ar.articulo=articulo, ar.AF=AF, ar.serie=serie, ar.imagen=imagen, ar.stock=stock, ar.id_cat1=id.cat1, ar.id_estado1=2, ar.id_persona2=id_persona2, ar.id_pdv1=id_pdv1, where id_articulo=?',[req.body, id]);
        await pool.query('UPDATE fotos set ? where id_foto=?',[req.body, id]);
        res.json({message:"Las fotos fueron actualizadss"});
    }

    // public async upload (req:Request, res:Response) => {
    //     let EDFile = req.files.file
    //     EDFile.mv(`./files/${EDFile.name}`,err => {
    //         if(err) return res.status(500).send({ message : err })
    //         return res.status(200).send({ message : 'File upload' })
    //     })
    // }

    
}

const fotosController = new FotosController();
export default fotosController;


