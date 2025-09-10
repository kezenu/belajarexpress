const express = require('express');

const app = express();
const port = 3000;

<<<<<<< HEAD
const dataReverse = () => {
  const data = 'saya adalah wisnu';
  const split = data.split(' ');
  const dataArray = [];
  for (let word of split) {
    const reversedWord = word.split('').reverse().join('');
    dataArray.push(reversedWord);
  }
  return dataArray.join(' ');
};

app.get('/', (req, res) => {
  res.send(dataReverse());
});
=======
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
>>>>>>> d81b38f8f2ccbb174ee65c25deb70bcce9870653

app.listen(port, () => {
  console.log('server berjalan di port 3000');
});
