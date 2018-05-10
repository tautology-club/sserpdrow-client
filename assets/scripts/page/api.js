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

const getPages = function () {
  return $.ajax({
    url: config.apiUrl + '/pages',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePages = function (data, pageId) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/pages/' + pageId,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createPage,
  getPages,
  updatePages
}
