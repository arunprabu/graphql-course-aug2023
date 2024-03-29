export const typeDefs = `#graphql

  """
  Represents Blog Post
  """
  type Post {
    """ID of the Blog Post"""
    id: ID!
    """Title of the Blog Post"""
    title: String!
    """Content of the Blog Post"""
    body: String!
  }

  type User {
    _id: ID!
    name: String 
    email: String 
    phone: String
  }

  # this is a comment
  # create your documentations within """ """
  # Do not forget to restart the server
  type Query {
    """just a simple greeting in String"""
    hello: String
    age: Int!
    posts: [Post]!
    postById(id: Int): Post
    users(limit: Int, cursor: String): [User]
  }

  #Let's try Mutation -- for createPost, updatePost, deletePost 
  type Mutation {
    createPost(title: String!, body: String!): Post
    updatePost(id: Int!, title: String!, body: String!): Post
    # Try Delete Post
    generateReport(name: String): String
  }

  type Report {
    id: ID!
    name: String!
    createdOn: String!
  }

  type Subscription {
    reportGenerated: Report
  }
`;
