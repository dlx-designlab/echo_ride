const express = require('express');
const app = express();
const port = 3001;

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('ripple.db');

app.use(express.json());
app.set('trust proxy', true)

const clients = [];

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
        // console.log(rows);
        const newRows = rows.map((row) => {return {...row, "category": req.query.category}});
        res.send(JSON.stringify(newRows));
    });

})

app.get('/avg', (req, res) => {
    const getAll = `SELECT AVG(vote) FROM ${req.query.category}`;

    db.all(getAll, (err, rows) => {
        if (err) {
            console.error('Error querying:', err.message);
            rows = [];
        }
        res.send(JSON.stringify(rows[0]['AVG(vote)']));
    });

})

app.post('/vote', (req, res) => {
    data = req.body;

    console.log('voted');
    const vote = db.prepare(`INSERT OR REPLACE INTO ${data.category} (id, vote)
                            VALUES (?,?);`);
    const voteData = [req.ip, data.vote];

    vote.run(voteData, (err) => {
        if (err) {
            res.send('Error voting: ' + err.message);
        } else {
            clients.forEach(client => {
                console.log(data)
                client.write(`data: ${JSON.stringify(data)}\n\n`);
                client.flushHeaders();
            });

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


app.get('/sse', (req, res) => {


    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*'
    });

    // Store the client's response object
    clients.push(res);

    console.log('connected via sse');
    // console.log(clients);

    // const intervalId = setInterval(() => {
    //     res.write(`data: ${JSON.stringify('sent')}\n\n`);
    //     console.log('sent');
    // }, 5000);
    //
    // req.on('close', () => {
    //     clearInterval(intervalId);
    // });

    // Remove the client when the connection is closed
    req.on('close', () => {
        console.log('disconnected via sse');
        const index = clients.indexOf(res);
        if (index !== -1) {
            clients.splice(index, 1);
        }
    });
});

// app.get('/sse', (req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/event-stream',
//         'Cache-Control': 'no-cache',
//         'Connection': 'keep-alive',
//         'Access-Control-Allow-Origin': '*'
//     });
//
//     let count = -1;
//     const intervalId = setInterval(() => {
//         count += 1;
//         res.write(`data: ${JSON.stringify(sensors[count])}\n\n`);
//     }, 10);
//
//     req.on('close', () => {
//         clearInterval(intervalId);
//     });
// });

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