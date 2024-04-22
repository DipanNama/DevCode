const app = require('./app');

const dotenv = require('dotenv');

dotenv.config({ path: 'backend/config/config.env' });

app.get('/', (req, res) => {
    res.send('Hello World');
  });


app.listen(process.env.PORT, () => {
    console.log(`Server is running on localhost:${process.env.PORT}`);
  });