const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const mongoose = require('mongoose')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Importing Routes
const authRoute = require('./routes/auth')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Connect to DB
  mongoose.connect(config.db.connStr, { useNewUrlParser: true })
  mongoose.Promise = global.Promise
  mongoose.connection.on('error', (err) => {
    // eslint-disable-next-line no-console
    console.error(`DB Connection Error 🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`)
  })

  // Express middleware
  app.use(express.json())
  // Route Middleware
  app.use('/api/user', authRoute)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(1212, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
