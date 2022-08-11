import { mongoConnection } from './config/bd_config'
import { app } from './routes'

mongoConnection.then(() => {
  app.listen(3333, () => {
    console.log('Back-end started in 3333 port!')
  })
}).catch((err) => {
  console.log(err)
})
