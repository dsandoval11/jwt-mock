const http = require('http');
const express = require('express');
const cors = require('cors');
const AUTH = require('./src/router/login.router');

const app = express();
const router = express.Router();
const PORT = 9001;

router.use(AUTH.path, AUTH.router);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/api', router);
app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT);
server.on('listening', onListening);

function onListening() {
  const addr = server.address();
  console.log(`Listening on http://127.0.0.1:${addr.port}`);
}
