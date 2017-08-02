const functions = require('firebase-functions');
const fetch = require('node-fetch');
const btoa = require('btoa');

const API_ROOT = 'https://us-central1-discordee-dd480.cloudfunctions.net';
const SERVICE_ROOT = 'https://discordee-dd480.firebaseapp.com';
const CLIENT_ID = '337506226680102914';
const CLIENT_SECRET = 'ShQRUwC17sE97RUOZVpDwXWrlxmYgwoe';
const redirect = encodeURIComponent(`${API_ROOT}/callback`);

exports.login = functions.https.onRequest((req, res) => {
    res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify+guilds&response_type=code&redirect_uri=${redirect}&permissions=32`);
});

exports.callback = functions.https.onRequest((req, res) => {
    if (!req.query.code) throw new Error('NoCodeProvided');
    const code = req.query.code;
    const credits = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const fetchUrl = `https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`;
    console.log('fetching...', fetchUrl);

    fetch(fetchUrl, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${credits}`,
        },
    }).then((res) => {
        return res.json();
    }).then((json) => {
        console.log('callback response...', json);
        res.cookie('discordee_api_token', json.access_token);
        res.redirect(SERVICE_ROOT);
    });
});