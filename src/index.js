const express = require('express')
const app = express()

/*
    For the purpose of making the testing easier, we've just put this
    in a seperate file.
*/
const myLib = require('./lib')

const commitRef = process.env.APP_COMMIT_REF || 'N/A'
const buildDate = process.env.APP_BUILD_DATE || new Date().toISOString()


app.get('/', (req, res) => {
  const welcome = myLib.helloWorld()
  const text = `${welcome}! We're at commit ${commitRef} which was built at ${buildDate}`
  res.send(text)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
