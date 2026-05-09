//connect mysql2
//install mysql2
//open phpMyAdmin (hoặc MySQL Workbench) -> nhập user=root, pass:127897
//create new db : db2

const mysql2 = require('mysql2')
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: "127897",
    database: "db2"
})
db.connect(err => {
    if (err) {
        console.log("error connect database: ", err);
        return;
    }
    console.log("Connect db thanh cong my man");
})
module.exports = db;