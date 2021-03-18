import { Router } from 'express';
import formController from '../controllers/formController';


class FormRoutes {
    public router:Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/',formController.list);
        this.router.get('/:id',formController.getOne);
        this.router.post('/', formController.create);
        // this.router.delete('/:id', articulosController.delete);
        this.router.patch('/:id', formController.delete);
        this.router.put('/:id', formController.update);
        // this.router.patch('/:id', gamesController.update);
    }
}



const formRoutes=new FormRoutes();
export default formRoutes.router;