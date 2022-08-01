import config from '../config/default'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import url from 'url'
import * as router from './routes/index.routes'
import { expressErrorHandler } from './utils/error.utility'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(helmet())

/* ROUTES */
app.use('/api', router.authRoutes)
app.use('/api', router.companyRoutes)
app.use('/api', router.userRoutes)
app.use('/api', router.roleRoutes)
app.use('/api', router.permissionRoutes)
app.use(expressErrorHandler)

app.listen(config.server.port, () => {
    console.log("Server running at: %s", url.format(config.server))
})

