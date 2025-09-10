const express = require('express');

const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log('server berjalan di port 3000');
});
