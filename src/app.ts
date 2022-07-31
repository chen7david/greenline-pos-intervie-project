import config from 'config'
import express from 'express'
import { userRoutes, authRoutes } from './routes/index.routes'
import { expressErrorHandler } from './utils/error.utility'

const app = express()
app.use(express.json())
app.use('/api', userRoutes)
app.use('/api', authRoutes)
app.use(expressErrorHandler)
app.listen(3000)

