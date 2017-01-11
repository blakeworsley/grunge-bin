'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = app.set('port', process.env.PORT || 3001);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.locals.title = 'Grudge List';
app.locals.grudges = [];

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

app.get('/', (request, response) => {
  response.send('Welcome to Grudge List!');
});

app.get('/api/grudge-list', (request, response) => {
  response.send(app.locals.grudges);
});

app.post('/grudge', (request, response) => {
  const data = request.body;
  console.log(data);
  data.name = data.name;
  data.grudge = data.grudge;
  data.id = data.id || Date.now();
  app.locals.grudges.push(data);
  response.status(201).send({ data });
});

// app.post('/grudge/:person', (request, response) => {
//   const data = request.body;
//   console.log(data);
//   data.name = data.name;
//   data.grudge = data.grudge;
//   data.id = data.id || Date.now();
//   // Object.assign(app.local.grudges, )
//   app.locals.grudges.push(data);
//   response.status(201).send({ data });
// });


app.get('/grudge/:person', (request, response) => {
  let targetUrl = app.locals.grudges.filter((person) => {
    person.name.replace(' ', '').toLowerCase() === request.params.person })[0];
  console.log(targetUrl);
  if (!targetUrl) { response.send(`It's Broken.`);}
  ++targetUrl.clicks;
  response.redirect( targetUrl.url );
});

module.exports = server;
