import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
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
app.use('/api', router.productRoutes)
app.use('/api', router.productItemRoutes)
app.use('/api', router.productItemStockRoutes)
app.use('/api', router.addressRoutes)
app.use('/api', router.orderRoutes)
app.use('/api', router.orderItemRoutes)
app.use(expressErrorHandler)

export default app

