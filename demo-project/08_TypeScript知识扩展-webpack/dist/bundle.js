;(() => {
  'use strict'
  var e = {
      774: (e, o) => {
        ;(o.__esModule = !0),
          (o.sum = void 0),
          (o.sum = function (e, o) {
            return e + o
          })
      }
    },
    o = {}
  function t(r) {
    var n = o[r]
    if (void 0 !== n) return n.exports
    var l = (o[r] = { exports: {} })
    return e[r](l, l.exports, t), l.exports
  }
  ;(() => {
    var e = t(774),
      o = 'Hello World'
    console.log(o.length, o), console.log((0, e.sum)(20, 30))
    var r = document.createElement('h2')
    ;(r.textContent = 'Hello TypeScript'),
      document.body.append(r),
      new Promise(function (e, o) {}),
      console.log(o.startsWith('Hello'))
  })()
})()
