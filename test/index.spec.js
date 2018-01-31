/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const toMilliseconds = require('../src/index')

function makeTest (input, output) {
  it(input, (done) => {
    toMilliseconds(input, (err, val) => {
      expect(err).to.eql(null)
      expect(val).to.eql(output)
      done()
    })
  })

  it(input + ' Promise', () => {
    return toMilliseconds(input).then((val) => {
      expect(val).to.eql(output)
    })
  })
}

describe('human timeout', () => {
  makeTest('1ns', 1e-6)
  makeTest('1us', 0.001)
  makeTest('1µs', 0.001)
  makeTest('1ms', 1)
  makeTest('1s', 1000)
  makeTest('1m', 60000)
  makeTest('1h', 3.6e+6)
  makeTest('1h30m', 3.6e+6 + 30 * 60000)
  makeTest('1.5h', 1.5 * 3.6e+6)
})
