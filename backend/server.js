require('dotenv').config();
const express = require('express');
const app = express();
const DbConnect = require('./database');
const router = require('./routes');

const path = require("path");





app.use(express.json({ limit: '8mb' }));

// Database connection
DbConnect();

// heroku deploy
const PORT = process.env.PORT || 5000;

// app routes
app.use(router);

// Deploy
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./build'))
};

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './build/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

// connecting the port
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});