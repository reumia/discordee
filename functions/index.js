const functions = require('firebase-functions');
const request = require('request');
const cors = require('cors')({origin: true});

exports.auth = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        return request.get({
            url: "https://discordapp.com/api/oauth2/authorize",
            data: {
                json: {
                    client_id: '337506226680102914',
                }
            }
        }).on('response', (res) => {
            console.log('통신완료');
            console.log(res.statusCode);
            console.log(res.headers);
        })
    });
});