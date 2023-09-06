import axios from "axios"; // npm i axios
import { GraphQLError } from "graphql";
// Connecting to mongoDb and specific collection (table)
import Users from "../models/users.model.js";

export const resolvers = {
  Query: {
    hello: () => "Hello World!",
    age: () => {
      return 20;
    },
    posts: async () => {
      // you can connect to third party rest api endpoints or db
      try {
        // let connect to third party rest api endpoint
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(result);
        return result.data;
      } catch (err) {
        throw new GraphQLError("Unable to fetch posts. Try again later", {
          extensions: { code: "UNABLE_TO_FETCH" },
        });
      }
    },
    postById: async (parent, args) => {
      console.log(parent);
      console.log(args); // receive the args object
      //Let's handle error and customize it
      try {
        // let connect to third party rest api endpoint
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/" + args.id
        );
        console.log(result);
        return result.data;
      } catch (err) {
        throw new GraphQLError("No Post Found with id: " + args.id, {
          extensions: { code: "NOT_FOUND" },
        });
      }
    },
    users: async (_, { limit, cursor }) => {
      console.log(limit);
      console.log(cursor);
      // exec db query as per mongoose syntax
      const dbQuery = cursor ? { _id: { $gt: cursor } } : {};
      const result = await Users.find(dbQuery)
        .sort({ _id: 1 })
        .limit(limit)
        .exec();
      // console.log("========FOUND USERS =========");
      // console.log(result);
      // get the data and return
      return result;
    },
  },
  Mutation: {
    createPost: async (parent, args) => {
      // console.log(args);
      const result = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        args // form data
      );
      // console.log(result.data);
      return result.data;
    },
    updatePost: async (parent, args) => {
      // console.log(args);
      const result = await axios.put(
        "https://jsonplaceholder.typicode.com/posts/" + args.id,
        args // form data
      );
      // console.log(result.data);
      return result.data;
    },
  },
};
