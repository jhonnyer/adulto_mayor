// import mysql from 'mysql';
// const promise = require('bluebird');

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

import mysql from 'mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection((err, connection) => {
    // if (err) throw err;
    if(err){
        console.log('Error de conexión, verifique credenciales'); 
        return;
    }
    connection.release();
    console.log('Base de datos conectada');
})
export default pool;