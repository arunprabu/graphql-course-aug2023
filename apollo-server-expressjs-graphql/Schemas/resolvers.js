import axios from "axios"; // npm i axios
 // Connecting to mongoDb and specific collection (table)
// import Users from '../models/users.model.js';

export const resolvers = {
  Query: {
    hello: () => "Hello World!",
    age: () => 20,
    posts: async () => {
      // you can connect to third party rest api endpoints or db
      // Let's connect to  third party rest api
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(result.data);
      return result.data;
    },
    postById: async (parent, args) => {
      console.log(parent);
      console.log(args); // receive the args object
      // Let's connect to  third party rest api
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + args.id
      );
      console.log(result.data);
      return result.data;
    },
    users: async () => {
      // // exec db query as per mongoose syntax
      // const result = await Users.find();
      // console.log("========FOUND USERS =========");
      // console.log(result);
      // // get the data and return
      // return result;
    },
  },
  Mutation: {
    createPost: async (parent, args) => {
      console.log(args);
      const result = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        args // form data
      );
      console.log(result.data);
      return result.data;
    },
    updatePost: async (parent, args) => {
      console.log(args);
      const result = await axios.put(
        "https://jsonplaceholder.typicode.com/posts/" + args.id,
        args // form data
      );
      console.log(result.data);
      return result.data;
    },
  },
};
