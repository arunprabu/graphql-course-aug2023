// Let's learn about building schema for Graphql server
// along with setting up graphiql client tool to test our graphql server

// Approach #1: Using buildSchema method from graphql package

// We need express to run a server -- npm i express
const express = require("express");
// we need express-graphql to run a graphql server
const { graphqlHTTP } = require("express-graphql"); // npm i express-graphql
const { buildSchema } = require("graphql"); // npm i graphql

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
    hello: String,
    age: Int,
    quoteOfTheDay: String,
    greet(name: String): String,
    favoriteMovies: [String]
  }
`);

// Let's have the resolver for all our queries // Let's have the resolve
const root = {
  // Here is the resolver function for hello query
  hello: () => {
    // Here you can execute db queries, rest api calls, etc
    return "Hello World!";
  },
  // Here is the resolver function for age query
  age: () => {
    return 20;
  },
  // Here is the resolver function for quoteOfTheDay query
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? "Take it easy" : "Be Happy";
  },
  // Here is the resolver function for greet query
  greet: (args) => {
    console.log(args);
    return `Hey ${args.name}!, Good Morning!`;
  },
  // Here is the resolver function for favoriteMovies query
  favoriteMovies: () => {
    return [
      "Avengers",
      "The Godfather",
      "The Dark Knight",
      "The Shawshank Redemption",
    ];
  },
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
