const express = require('express');
const app = express();
const port = 3001;

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('ripple.db');

app.use(express.json());
app.set('trust proxy', true)

var cors = require('cors');

// use it before all route definitions
// app.use(cors({origin: 'http://127.0.0.1:3001'}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.get('/all', (req, res) => {
    const getAll = `SELECT * FROM ${req.query.category}`;

    db.all(getAll, (err, rows) => {
        if (err) {
            console.error('Error querying:', err.message);
            rows = [];
        }
        res.send(JSON.stringify(rows));
    });

})

app.get('/avg', (req, res) => {
    const getAll = `SELECT AVG(vote) FROM ${req.query.category}`;

    db.all(getAll, (err, rows) => {
        if (err) {
            console.error('Error querying:', err.message);
            rows = [];
        }
        console.log(rows[0]['AVG(vote)']);
        res.send(JSON.stringify(rows[0]['AVG(vote)']));
    });

})

// app.get('/add', (req, res) => {
//     const insertUser = db.prepare('INSERT INTO users (username, email) VALUES (?, ?)');
//     const userData = ['john_doe', 'john@example.com'];
//
//     insertUser.run(userData, (err) => {
//         if (err) {
//             res.send('Error inserting user:');
//         } else {
//             res.send('User inserted successfully!');
//         }
//     });
//
//     insertUser.finalize();
// })

app.post('/vote', (req, res) => {
    data = req.body;

    const vote = db.prepare(`INSERT OR REPLACE INTO ${data.category} (id, vote)
                            VALUES (?,?);`);
    const voteData = [req.ip, data.vote];

    vote.run(voteData, (err) => {
        if (err) {
            res.send('Error voting: ' + err.message);
        } else {
            res.send('vote added: ' + data.toString());
        }
    });

    vote.finalize();
});

app.post('/new', (req, res) => {
    data = req.body;

    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS ${data.category}
        (
            id
            TEXT
            PRIMARY
            KEY,
            vote
            NUMBER,
            last_updated
            TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
        )
    `;

    db.run(createTableQuery, (err) => {
        if (err) {
            res.status(500);
            res.send(err.message);
        } else {
            res.status(200);
            res.send(`table ${data.category} created`);
        }
    });

});

// app.get('/remove', (req, res) => {
//     const createTableQuery = `
//         DROP TABLE IF EXISTS users
//     `;
//
//     db.run(createTableQuery, (err) => {
//         if (err) {
//             console.error('Error creating table:', err.message);
//             res.send('failed');
//         } else {
//             res.send('success');
//         }
//     });


// });


app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});