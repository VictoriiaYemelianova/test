const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const axios = require('axios')
const fs = require('fs');

app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

const postApi = 'https://6u3td6zfza.execute-api.us-east-2.amazonaws.com/prod/user/login';
const getApi = 'https://6u3td6zfza.execute-api.us-east-2.amazonaws.com/prod/user/transactions';

app.get('/api/transaction', async (req, res, next) => {
  try {
    const result = await axios.get(getApi);
    res.send(result.data.transactions);
  } catch(err) {
    console.log(err);
  }
});

app.post('/api/sign-in', async (req, res, next) => {
  try {
    const result = await axios.post(postApi, req.body);
    if (result.status === 200) {
      res.send({ success: true });
    }
  } catch(err) {
    console.log(err);
  }
});

app.post('/api/remove', async (req, res, next) => {
  try {
    fs.writeFile(`${__dirname}/reject_transaction.txt`, JSON.stringify(req.body), (err) => {
      if (err) console.log(err);
    });
  } catch(err) {
    console.log(err);
  }
});

app.listen(3000, () => {
  console.log('app listening at http://localhost:3000');
});