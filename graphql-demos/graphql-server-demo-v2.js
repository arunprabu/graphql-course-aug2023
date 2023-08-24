// Let's learn about building schema for Graphql server
// along with setting up graphiql client tool to test our graphql server

// Approach #1: Using buildSchema method from graphql package

// We need express to run a server -- npm i express
const express = require('express'); 
// we need express-graphql to run a graphql server
const { graphqlHTTP } = require('express-graphql'); // npm i express-graphql
const { buildSchema } = require('graphql'); // npm i graphql

// We need to create express app
const app = express();
const PORT = 3005;

// We need to use buildSchema method to create schema
// We need to pass schema definition language (SDL) as string to buildSchema method
// SDL is a way to define schema in graphql
// SDL is a way to define types, queries, mutations, etc in graphql
const schema = buildSchema(`
  """ Here starts Schema Defn Language """
  type Query {
    hello: String
  }
`);

// in order handle the queries from front end, we need to create resolver
// resolver is nothing but a function that returns data for a field
// resolver function should have same name as field name
const root = {
  // here's the resolver function for hello field
  hello: () => {
    // return the data for hello field
    return 'Hello World!';
  }
};

// the only api endpoint front end should hit is /graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema, // we will add schema here -- it is must
    rootValue: root, // we will add resolver here -- it is must
    graphiql: true, // this will enable graphiql client tool
  })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}. 
  Open http://localhost:${PORT}/graphql to run queries.`);
});

// Now, We need to start the server -- node graphql-server-demo-v1.js

