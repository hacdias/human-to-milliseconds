/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const toMilliseconds = require('../src/index')

function makeTest (input, output) {
  it(input, (done) => {
    expect(toMilliseconds(input)).to.eql(output)
    done()
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
