'use strict'

const showPagesTemplate = require('../templates/page.handlebars')
const showMyPagesTemplate = require('../templates/my-page.handlebars')
const store = require('../store.js')

const createPageSuccess = function () {
  $('.status').text('You have successfully created a page!')
  setTimeout(() => $('.status').text(''), 2000)
  $('#myModalCreatePage').modal('toggle')
  $('input[type=text]').val('')
}

const createPageFailure = function () {
  $('.createPageMessage').text('Failed to create page! Please try again')
  setTimeout(() => $('.status').text(''), 2000)
}

const getPagesSuccess = function (data) {
  console.log('getPagesSuccess data is', data)
  const getPagesHTML = showPagesTemplate({pages: data.pages})
  $('.content').html(getPagesHTML)
  if (data.pages.length === 0) {
    $('.content').html('<h2>No pages were found</h2>')
  }
}

const getMyPagesSuccess = function (data) {
  console.log('getMyPagesSuccess data is', data)
  console.log('getMyPagesSuccess store is', store)
  const myPages = []
  data.pages.forEach(function (page) {
    if (page.owner === store.user._id) {
      myPages.push(page)
    }
  })
  const getMyPagesHTML = showMyPagesTemplate({pages: myPages})
  $('.content').html(getMyPagesHTML)
  if (data.pages.length === 0) {
    $('.content').html('<h2>No pages were found</h2>')
  }
}

module.exports = {
  createPageSuccess,
  createPageFailure,
  getPagesSuccess,
  getMyPagesSuccess
}
