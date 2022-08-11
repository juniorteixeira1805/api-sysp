import { mongoConnection } from './config/db_config'
import { app } from '.'
import { env } from './config/constants'

const PORT = env.PORT || 3333

mongoConnection
  .then(() => {
    app.listen(PORT, () => {
      console.log('Back-end started in 3333 port!')
    })
  })
  .catch((err: any) => {
    console.log(err)
  })
