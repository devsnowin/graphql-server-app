const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const colors = require('colors');
require('dotenv').config();

const connectDB = require('./database/config');
const schema = require('./schema/schema');

const PORT = process.env.PORT;
const app = express();

// Connect to DB
connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
