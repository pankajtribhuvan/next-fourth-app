import mysql from 'mysql2/promise'

// mysql.createConnection()

export const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mydb"
})

try {
 const conn = await db.getConnection();
 console.log("Db Connected")
 conn.release();


} catch (error) {
 console.error('Db Connected Failed',error)   
 process.exit(1)
}