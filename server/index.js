const express = require('express');
const dotEnv = require('dotenv').config();
const path = require('path');
const port = process.env.PORT || 5000;
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use('/openai', cors(), require('./routes/openAi'),

);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});