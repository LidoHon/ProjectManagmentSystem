const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const colors = require("colors");
const cors = require("cors");
const connectDB = require("./config/db");
const schema = require("./schema/schema");
const port = process.env.PORT || 3000;
const app = express();

//  connect to database
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(port, () => console.log(`Server running on port ${port}`));
