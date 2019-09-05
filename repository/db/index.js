const ibmdb = require("ibm_db")
const conf = require('../../config')
let cn = conf.db2ConectionString

module.exports.query = (sql, params) => {
    try {
        let options = {connectTimeout: 20, systemNaming: true}
        let db2con = ibmdb.openSync(cn, options)
        let stmt = db2con.prepareSync(sql)
        let result = stmt.executeSync(params)
        let rows = result.fetchAllSync()
        // let rows = db2con.querySync(sql, [])
        db2con.closeSync()
        return rows
    } catch (e) {
        console.log("db2errorConection: " + e.message)
    }
}