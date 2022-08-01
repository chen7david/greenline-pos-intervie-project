import config from '../config/default'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import url from 'url'
import { userRoutes, authRoutes } from './routes/index.routes'
import { expressErrorHandler } from './utils/error.utility'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(helmet())

/* ROUTES */
app.use('/api', userRoutes)
app.use('/api', authRoutes)
app.use(expressErrorHandler)

app.listen(config.server.port, () => {
    console.log("server running at: %s", url.format(config.server))
})

