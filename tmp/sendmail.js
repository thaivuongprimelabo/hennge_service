import express from 'express'
const index = require('../functions/sendmail/index');

const app = express()

app.use(express.json());

app.post('/', (req, res) => {

    index.sendMail(req, res);
})

export default app;