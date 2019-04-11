const db = require('../dbconfig');

module.exports = {
    insert,
    remove,
    getAll,
    findBy,
}

const tblName = 'snacks'

async function insert(snack) {
    const [id] = await db(tblName).insert(snack) 
    return findBy({id})
}

function remove(id) {
    return db(tblName).where({id}).del()
}

function getAll() {
    return db(tblName)
}

function findBy(filter) {
    return db(tblName).where(filter).first()
}