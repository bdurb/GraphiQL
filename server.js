const express = require('express')
const expressGraphQL = require('express-graphql')

const PORT = 4000

const app = express();

app.use('/graphql', expressGraphQL({
  graphiql: true
}))




app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})