const j = require('./j')
const each = require('lodash/each')

each(j, item => {
    return item.num
})
