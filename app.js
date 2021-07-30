// require('dotenv').config();

// const express = require('express');
// const cors = require('cors');
// const compression = require('cors');
// const bodyParser = require('body-parser');
// const displayRoutes = require('express-routemap');
// const { config } = require('./config');

// const BASE_URL = `/api/${config.api.version}`;

// const app = express();

// app.set('trust proxy', true);
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(compression());

// app.get('/health/', (req, res) => {
//   res.status(200).send({ code: 'OK', message: 'service up and running' })
// });

// const routes = require('./app/routes/index');
// app.use(BASE_URL, routes);

// app.listen(config.server.port, () => {
//   console.log(`\x1b[32m Starting the microservice [ ${config.api.name} ]. at ${Date().toString()}`);
//   console.log(`\x1b[32m Listening on port ${config.server.port}`);
//   console.log(`\x1b[32m Running environment NODE_ENV=${config.env}`);
//   console.log(`\x1b[32m Configuration middlewares: ${JSON.stringify(config.middlewares)}`);

//   displayRoutes(app);
// });

// app.use((err, req, res, next) => {
//   const msg = { code: err.code, message: err.message }
//   res.status(err.status).send(msg);
// });

// app.use((req, res) => {
//   return res.status(404).send({ code: 'NOT_FOUND_ROUTE', message: `route ${req.url} not found` });
// });

// const initSocket = () => {
//   const socket = require('./app/events/socket-connection');
//   socket(app);
// };

const arrToStr = (arr) => {
  return arr.join('');
}

// s: cadena de caracteres original
// k: maximo numero de caracteres consecutivos
// retorno: la cadena alfabéticamente más grande que se puede construir que no tenga más de k caracteres consecutivos idénticos
const getLargestString = (s, k) => {
  const result = [];
  let begin = 0;
  const arrOfCharacters = s.split('');
  for (let i = 0; i < arrOfCharacters.length; i++) {
    const currentValue = arrOfCharacters[i];
    const nextValue = arrOfCharacters[i + 1];
    if (currentValue !== nextValue) {
      const cut = i + 1;
      const sliceGerenal = arrOfCharacters.slice(begin, cut);
      if (sliceGerenal.length > k) {
        const sliceValidation = arrToStr(sliceGerenal.slice(0, k));
        result.push(sliceValidation);
      } else {
        result.push(arrToStr(sliceGerenal));
      }
      begin = cut;
    }
  }
  return arrToStr(result);
};
// output: zzazz

(async () => {
  console.log(getLargestString('zzzazz', 2));
})();

// init dependencies
// (async () => {
//   let connection;
//   // init databases by drivers
//   config.database.drivers.split(',').forEach(async (driver) => {
//     if (driver === 'mongodb') {
//       connection = require('./app/database/mongodb/connection');
//     }
//     if (driver === 'redis') {
//       connection = require('./app/database/redis/connection').initConnection;
//     }
//     await connection();
//   });
//   initSocket();
// })();
