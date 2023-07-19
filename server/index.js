require('dotenv/config')
const { SERVER_PORT } = process.env;
const ctrl = require('./controller');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/../public/assets`));
app.use(express.static(`${__dirname}/../build`));
app.post('/api/message', ctrl.message);
app.get('/api/hero', ctrl.getHeroData);
app.get('/api/data', ctrl.getData);
app.listen(SERVER_PORT, () => console.log(`Portfolio running on ${SERVER_PORT}`));