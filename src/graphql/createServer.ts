import { readFileSync } from 'fs'
import { ApolloServer } from 'apollo-server-express'
import { Resolvers } from './schema/generate/resolvers-types'
import path from 'path'

const createServer = async (): Promise<ApolloServer> => {
  const typeDefs = readFileSync(path.resolve(__dirname,'./schema/schema.graphql'), 'utf8') 
  const resolvers: Resolvers = {
   Query: {
   // enter the query reolsver here

   },
   Mutation:{
// enter the mutation reolsver here
   }
  }
  return new ApolloServer({ typeDefs, resolvers })
}
export default createServer;
  