import { Router } from 'express';
import fotosController from '../controllers/fotosController';


class FotosRoutes {
    public router:Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        // this.router.get('/',(req,res)=>
        // res.send('Juegos'));
        this.router.get('/',fotosController.list);
        this.router.get('/:id',fotosController.getOne);
        this.router.post('/', fotosController.create);
        // this.router.delete('/:id', fotosController.delete);
        this.router.patch('/:id', fotosController.delete);
        this.router.put('/:id', fotosController.update);
        // this.router.patch('/:id', fotosController.update);
    }
}



const fotosRoutes=new FotosRoutes();
export default fotosRoutes.router;