const Database = require('sqlite-async')

open(__dirname + '/database.sqlite').then(execute)

function execute(db){
    console.log('entrei nessa função')

  /*  de.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `) */
}