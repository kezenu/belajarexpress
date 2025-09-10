const express = require('express');

const app = express();
const port = 3000;

const helloWorld = (req, res) => {
  data = {
    nama: 'WIsnu',
  };
  res.status(200).json({
    msg: 'Succes',
    data: data,
  });
};
app.get('/', helloWorld);

app.listen(port, () => {
  console.log('server berjalan di port 3000');
});
