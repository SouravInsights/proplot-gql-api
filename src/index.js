const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')

const baseURL = `https://lil-noun-api.fly.dev`

const resolvers = {
  Query: {
    ideas: () => {
      return fetch(`${baseURL}/ideas`).then(res => res.json())
    },

    idea: (args) => {
      const { id } = args
      return fetch(`${baseURL}/idea/${id}`).then(res => res.json())
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
