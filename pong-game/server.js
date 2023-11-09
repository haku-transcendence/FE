const http = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const PORT = 8000

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      const parsedUrl = parse(req.url, true)
      handle(req, res, parsedUrl)
    })
    .listen(PORT, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${PORT}`)
    })

  const https = require('https')
  const fs = require('fs')
  const options = {
    key: fs.readFileSync('./cert.key'),
    cert: fs.readFileSync('./cert.crt'),
  }
  https
    .createServer(options, function (req, res) {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      handle(req, res, parsedUrl)
    })
    .listen(PORT + 1, (err) => {
      if (err) throw err
      console.log(`> Ready on https://localhost:${PORT + 1}`)
    })
})
