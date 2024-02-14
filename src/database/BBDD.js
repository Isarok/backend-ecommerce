// Esto es como el ORM lo que conectaria con cualquier base de datos
import  dotenv  from "dotenv";
import mysql from "mysql2/promise";
 dotenv.config()

 const  {BD_HOSTNAME, BD_USERNAME, BD_PASSWORD, BD_NAME} = process.env

 const config = {       
    host: BD_HOSTNAME,
     user: BD_USERNAME,
     password: BD_PASSWORD,
     database: BD_NAME,
 };
 
 export const pool = mysql.createPool(config);
 