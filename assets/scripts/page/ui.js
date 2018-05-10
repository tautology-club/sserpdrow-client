'use strict'

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

module.exports = {
  createPageSuccess,
  createPageFailure
}
