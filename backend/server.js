const app = require('./app');

const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

app.get('/', (req, res) => {
    res.send('Hello World');
  });

  app.get('/run', (req, res) => {
    res.send('Hello World 2');
  });


app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });