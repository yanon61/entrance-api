import bodyParser from 'body-parser'
import express from 'express'
import noImpl from './route/noImpl'
import sample from './route/sample'

class App {
  public app: express.Application

  constructor() {
    this.app = express()
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(bodyParser.json())
    this.routes()
  }

  public routes() {
    this.app.use('/sample', sample)
    this.app.use('/noImpl', noImpl)

    this.app.use((req: express.Request, res: express.Response) => {
      res.status(404)
      res.json({
        message: 'The specified endpoint cannot be found.',
        requestPath: req.path
      })
    })
  }

  public start() {
    this.app.listen(3000, () => console.log('listening on port 3000!'))
  }
}

export default App
