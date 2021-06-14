const typeDefs = `
  type Message {
    id: ID!
    user: String!
    content: String!
  }

  type Task {
    id: ID!
    description: String!
    status: Int!
    sort: Int!
  }

  type Query {
    messages: [Message!]
    tasks: [Task!]
  }











  type Mutation {
    postMessage(user: String!, content: String!): ID!
    postTask(description: String!): ID!
  }

  type Subscription {
    messages: [Message!]
  }

 
`;

module.exports = typeDefs