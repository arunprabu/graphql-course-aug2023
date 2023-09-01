import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { readFile } from 'fs/promises';

import { resolvers } from "./Schemas/resolvers.js";

const PORT = "5005";
const app = express();

app.use(cors(), express.json());

// REST API Endpoint for Authentication
app.post('/api/login', (req, res) => {
  console.log(req.body);
  res.json({
    msg: 'Under construction'
  });
});

const typeDefs = await readFile('./Schemas/schema.graphql', 'utf-8');

const apolloServer = new ApolloServer({
  typeDefs: typeDefs, // schema
  resolvers: resolvers // resolver fns
});

await apolloServer.start();

// URL in which graphql server can be accessed -- through apollo client
app.use("/graphql", expressMiddleware(apolloServer));

app.listen({port: PORT}, () => {
  console.log(`Apollo GraphQL Server is running on http://localhost:${PORT}/graphql`);
  console.log(
    `REST API Endpoint for login is http://localhost:${PORT}/api/login`
  );
});
