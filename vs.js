(async function(){
    const cTable = require('console.table')
    const pMg = require('./lib/processManager')
        
    const fileA = 'for.js'
    const fileB = '_.map.js'
    const fileC = '_.each.js' // _.each from @lodash
    
    await pMg.execPromise(`node meter ${fileA}`)
    await pMg.execPromise(`node meter ${fileB}`)
    await pMg.execPromise(`node meter ${fileC}`)
    
    const reportA = require('./report/'+fileA+'.json')
    const reportB = require('./report/'+fileB+'.json')
    const reportC = require('./report/'+fileC+'.json')
    
    const finalReport = []
    Object.entries(reportA).forEach(([key, val])=>{
        const row = {
            name: key,
            [fileA]: reportA[key],
            [fileB]: reportB[key],
            [fileC]: reportC[key]
        }
        finalReport.push(row)
    })
    console.table(finalReport)
})()