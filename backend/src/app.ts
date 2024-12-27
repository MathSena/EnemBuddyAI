import express, { Application } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import topicsRoutes from './routes/topicsRoutes'
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from '../swagger.json' // Caminho do swagger.json
import errorHandler from './middleware/errorHandler'
import rateLimit from 'express-rate-limit'

const app: Application = express()

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limite de 100 requisições por IP
  message: 'Você excedeu o limite de requisições. Tente novamente mais tarde.'
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(cors())
app.use(bodyParser.json())
app.use(errorHandler)
app.use(limiter)
// Rotas
app.use('/api/v1/topics', topicsRoutes)

export default app
