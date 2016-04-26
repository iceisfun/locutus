// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var gettimeofday = require('../../../../src/php/datetime/gettimeofday.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/datetime/gettimeofday.js', function () {
  it('should pass example 1', function (done) {
    var $obj = gettimeofday()
    var $result = ('sec' in $obj && 'usec' in $obj && 'minuteswest' in $obj &&80, 'dsttime' in $obj)
    var expected = true
    var $obj = gettimeofday()
    var result = ('sec' in $obj && 'usec' in $obj && 'minuteswest' in $obj &&80, 'dsttime' in $obj)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var $timeStamp = gettimeofday(true)
    var $result = $timeStamp > 1000000000 && $timeStamp < 2000000000
    var expected = true
    var $timeStamp = gettimeofday(true)
    var result = $timeStamp > 1000000000 && $timeStamp < 2000000000
    expect(result).to.deep.equal(expected)
    done()
  })
})