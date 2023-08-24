// Let's setup graphiql client tool to test our graphql server

// What is GraphiQL?
// GraphiQL is an in-browser tool for writing, validating, and testing GraphQL queries.
// It provides syntax highlighting, query validation, and 
// an interactive result pane which lets you click on a result field to query it again.

// We need express to run a server -- npm i express
const express = require('express'); 
// we need express-graphql to run a graphql server
const { graphqlHTTP } = require('express-graphql'); // npm i express-graphql

// We need to create express app
const app = express();
const PORT = 3005;

// the only api endpoint front end should hit is /graphql
app.use("/graphql", graphqlHTTP({
  schema: '', // we will add schema here -- it is must
  graphiql: true // this will enable graphiql client tool
}));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}. 
  Open http://localhost:${PORT}/graphql to run queries.`);
});

// Now, We need to start the server -- node graphql-server-demo-v1.js

