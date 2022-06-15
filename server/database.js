var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "/db/db.sqlite" 


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE oncall (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE, 
            tenant text, 
            CONSTRAINT email_unique UNIQUE (email)
            )`,(err) => {
        if (err) {
            // Table already created
        }else{
            // Table just created, creating some rows
            var insert = 'INSERT INTO oncall (name, email, tenant) VALUES (?,?,?)'
            db.run(insert, ["Neil Carpenter","me@neilcar.com","neilcar"])
            db.run(insert, ["Marlon Rando","rand@neilcar.com","neilcar"])
        }
    })  
    }
})


module.exports = db

