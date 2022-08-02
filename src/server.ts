import config from '../config/default'
import app from './app'
import url from 'url'


app.listen(config.server.port, () => {
    console.log("Server running at: %s", url.format(config.server))
})