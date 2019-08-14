const functions = require('firebase-functions');
const index = require('./sendmail/index');

exports.sendmail = functions.https.onRequest((req, res) => {
    index.sendMail(req, res);
});