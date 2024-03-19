const express = require('express')
const app = express()
const addingdays = require('date-fns')

app.get('/', (request, response) => {
  const date = new Date()
  const month = date.getMonth()
  const year = date.getFullYear()
  const day = date.getDate()

  const result = addingdays(new Date(year, month, day), 100)
  const finalresult = `${result.getDate()}/${
    result.getMonth() + 1
  }/${result.getFullYear()}`

  response.send(finalresult)
})
module.exports = app
