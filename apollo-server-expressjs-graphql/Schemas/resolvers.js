import axios from "axios"; // npm i axios

export const resolvers = {
  Query: {
    hello: () => "Hello World!",
    age: () => 20,
    posts: async() => {
      // you can connect to third party rest api endpoints or db
      // Let's connect to  third party rest api
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(result.data);
      return result.data;
    },
  },
};
