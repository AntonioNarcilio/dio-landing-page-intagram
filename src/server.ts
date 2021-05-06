import express from 'express';
import colors from 'colors';
import 'dotenv/config';

const APP = express();
let { PORT } = process.env;

if (PORT == null) {
  PORT = '3333';
}

APP.get('/', (request, response) => {
  response.json({
    message: 'Meu server Express, com Typescript e ESLint!',
  });
});

APP.listen(PORT, () => {
  console.log(colors.blue(`\nServer running on the port 🚪: ${PORT}`));
});
