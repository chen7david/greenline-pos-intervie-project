import { IConfig } from './development.interface'
import dotenv from 'dotenv'
import { join } from 'path'
dotenv.config({ path: join(__dirname, '../.env') })

const config: IConfig = {
    server: {
        port: process.env.APP_PORT || '3000',
        hostname: process.env.APP_HOST || 'localhost',
        protocol: process.env.APP_PROTOCOL || 'http'
    },

    security: {
        token: {
            access: {
                secret: process.env.ACCESS_TOKEN_SECRET!,
                expiry: process.env.ACCESS_TOKEN_EXPIRY!
            },
            refresh: {
                secret: process.env.REFRESH_TOKEN_SECRET!,
                expiry: process.env.REFRESH_TOKEN_EXPIRY!
            },
        }
    },

    db: {
        client: process.env.DB_CLIENT || 'postgres',
        database: process.env.DB_NAME || 'your-db-name',
        username: process.env.DB_USER || 'your-user-name',
        password: process.env.DB_PASS || 'your-password',
        port: process.env.DB_PORT || 'your-port'
    }
}

export default config