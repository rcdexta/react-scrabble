'use strict'

const AWS = require('aws-sdk')
const S3 = new AWS.S3(require('../s3config.js')())

module.exports = (event, callback) => {
  S3.getObject({
    Bucket: 'react-scrabble',
    Key: `${event.pathParameters.id}.json`,
  }, (err, res) => {
    console.log(err, res)
    let objectData = res.Body.toString('utf-8');
    callback(err, objectData)
  })
}
