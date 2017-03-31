'use strict'

const AWS = require('aws-sdk')
const S3 = new AWS.S3(require('../s3config.js')())

module.exports = (event, callback) => {
  S3.deleteObject({
    Bucket: 'react-scrabble',
    Key: event.pathParameters.id,
  }, (err, res) => {
    console.log(err, res)
    callback(err, res)
  })
}
