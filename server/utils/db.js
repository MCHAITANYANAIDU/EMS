import mysql from 'mysql2';

// Create the MySQL connection with the correct credentials
const Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2001', // Make sure this matches your MySQL root password
  database: 'ems', // Replace with your database name
});

Connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err); 
    return;
  }
  console.log('Connected to MySQL');
});
 
export default Connection


