const EventEmitter = require('events').EventEmitter

const MyEmitter = function() {}

MyEmitter.prototype.__proto__ = EventEmitter.prototype

module.exports = MyEmitter