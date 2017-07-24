const functions = require('firebase-functions');
const request = require('request');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors);
app.get('*', (req, res) => {
    console.log(req, res);

    return request.get({
        url: "https://discordapp.com/api/oauth2/authorize",
        data: {
            json: {
                client_id: '337506226680102914',
            }
        },
        headers: {
            'Access-Control-Allow-Origin': "*"
        }
    }).on('response', (res) => {
        console.log('통신완료');
        console.log(res.statusCode);
        console.log(res.headers);
    })
});

exports.auth = functions.https.onRequest(app);