const j = require('./j')
const map = require('lodash/map')

map(j, item => {
    return item.num
})
