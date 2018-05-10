'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createPage = function (data) {
  data.user = store.user
  return $.ajax({
    url: config.apiUrl + '/pages',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createPage
}
