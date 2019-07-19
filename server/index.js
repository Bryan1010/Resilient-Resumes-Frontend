const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const mongoose = require('mongoose')
const app = express()
const Sentry = require('@sentry/node')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

require('dotenv').config()

// Importing Routes
const authRoute = require('./routes/auth')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Startnig Sentry
  Sentry.init({ dsn: 'https://a97633e001c24357993675e5cce33aa3@sentry.io/1506607' })

  // The request handler must be the first middleware on the app
  app.use(Sentry.Handlers.requestHandler())

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  consola.info('Connecting To DB')
  // Connect to DB
  mongoose.connect(process.env.MONGO_DB_CONN_STRING, { useNewUrlParser: true })
  mongoose.Promise = global.Promise
  mongoose.connection.on('error', (err) => {
    // eslint-disable-next-line no-console
    console.error(`DB Connection Error 🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`)
    consola.error(new Error(`DB Connection Error 🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`))
  })
  consola.success('Finished connecting to DB')

  // Express middleware
  app.use(express.json())
  // Route Middleware
  app.use('/api/user', authRoute)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
