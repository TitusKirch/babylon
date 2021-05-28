import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    project(_id: ID!): Project
    projects: [Project]
  }

  type Project {
    _id: ID!
    title: [MultiligualText]
    description: [MultiligualText]
    languages: [Language]
    category: Category!
  }
`;
