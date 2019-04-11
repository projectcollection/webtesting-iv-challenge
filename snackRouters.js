const router = require('express').Router()


router.get('/', (req, res) => {
    console.log('Running')
    res.end()
})

module.exports = router