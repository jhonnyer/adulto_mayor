"use strict";
// import mysql from 'mysql';
// const promise = require('bluebird');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import keys from './keys';
// const pool = mysql.createConnection(keys.database);
// pool.connect((err)=>{
//     if(err){
//        console.log('Error de conexión'); 
//        return;
//     }
//     console.log('Base de Datos conectada');
// });
// export default pool;
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = mysql_1.default.createPool(keys_1.default.database);
pool.getConnection((err, connection) => {
    // if (err) throw err;
    if (err) {
        console.log('Error de conexión, verifique credenciales');
        return;
    }
    connection.release();
    console.log('Base de datos conectada');
});
exports.default = pool;
