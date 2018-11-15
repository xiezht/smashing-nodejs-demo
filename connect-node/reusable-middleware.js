module.exports = function (opts) {
  var delayTime = opts.time
  return function(req, res, next) {
    var timer = setTimeout(() => {
      console.log('%s %s is taking too long.', req.method, req.url)
    }, delayTime)
    var end = res.end
    res.end = function(chunk, endcoding) {
      res.end = end
      res.end(chunk, endcoding)
      clearTimeout(timer)
    }
    next()
  }
}

