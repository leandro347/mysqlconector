var mysql = require('mysql');

var conexion = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    pasword: '',
    database: 'mysqltest'
});

conexion.connect();
conexion.query('SELECT * FROM alumno', function (err, result, fields) {
    if(err){
        console.log('Ha existido un error en la consulta');
        return;
    }
    else{
        console.log('Lista de alumnos: ', result);
    }
});

conexion.end();