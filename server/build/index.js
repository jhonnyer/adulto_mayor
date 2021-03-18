"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("Servidor")
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// Rutas 
const indexRouter_1 = __importDefault(require("./routes/indexRouter"));
const formRouter_1 = __importDefault(require("./routes/formRouter"));
const fotosRouter_1 = __importDefault(require("./routes/fotosRouter"));
class Server {
    // Inicializador express 
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    // metodo que permite configurar propiedad app, no devuelve nada tipo vacio 
    config() {
        this.app.set('port', process.env.PORT || 8130);
        // permite ver las peticiones a la api y la BD 
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        // permite enviar datos desde un formulario a la app 
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRouter_1.default);
        this.app.use('/supergiros/form/', formRouter_1.default);
        this.app.use('/supergiros/fotos/', fotosRouter_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor escuchando puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
