import config from 'config'
import express from 'express'
import { userRoutes } from './routes/index.routes'


const app = express()
app.use(express.json())
app.use(userRoutes)
app.listen(3000)

