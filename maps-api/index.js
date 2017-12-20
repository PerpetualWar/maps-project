const express = require('express');
const format = require('date-fns/format');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8001;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());

app.get('/date', (req, res) => {
  const formattedDate = format(new Date(), 'DD MMMM YYYY H:m.ss');
  res.send(formattedDate);
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};