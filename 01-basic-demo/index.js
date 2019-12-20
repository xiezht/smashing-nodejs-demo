var Person = require('./person')

var john = new Person('john')

john.talk()

/**------------------------ */

var MyEmitter = require('./emitter')
var emitter = new MyEmitter()
emitter.on('hello', function cb() {
  console.log('hello')  
})
emitter.emit('hello')
console.log(emitter)

/**----------------------- */

