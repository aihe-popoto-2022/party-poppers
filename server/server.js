const path = require('path')
const express = require('express')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

//setup end point * means any path
server.get('*', (req, res) => {
  //console.log('server hit')
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
