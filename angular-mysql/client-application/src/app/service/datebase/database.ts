import mysql from '../../../../node_modules/mysql';
import keys from './keys';


const conn = mysql.createConnection(keys.database);

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
export default conn;
