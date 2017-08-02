const functions = require('firebase-functions');
const fetch = require('node-fetch');
const btoa = require('btoa');
const store = require('store');

const ROOT = functions.config().discordee.root;
const CLIENT_ID = functions.config().discordee.id;
const CLIENT_SECRET = functions.config().discordee.secret;
const redirect = encodeURIComponent(`${ROOT}/callback`);

const getUser = (token) => {
    const fetchUrl = 'https://discordapp.com/api/users/@me';
    fetch(fetchUrl, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => {
        return res.json();
    }).then((json) => {
        console.log('User', json);
    });
};

const getUserGuilds = (token) => {
    const fetchUrl = 'https://discordapp.com/api/users/@me/guilds';
    fetch(fetchUrl, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => {
        return res.json();
    }).then((json) => {
        console.log('User Guilds', json);
    });
};

exports.login = functions.https.onRequest((req, res) => {
    console.log('login start...');
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
        console.log('callback response...', json.access_token);
        const token = json.access_token;
        getUser(token);
        getUserGuilds(token);
    }).then(() => {
        res.redirect(ROOT);
    });
});

