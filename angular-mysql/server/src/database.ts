import mysql from 'mysql';
import keys from './routes/keys';


const conn = mysql.createConnection(keys.database);

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
export default conn;
