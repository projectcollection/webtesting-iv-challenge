const express = require('express')

const snacks = require('./data/snacks/snacksModel');

const router = express.Router()

router.post('/', async (req, res) => {
    const {name} = req.body
    try {
        const data = await snacks.insert({name})
        res.status(201).json(data)
    } catch (error) {
       res.status(500).json(error) 
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const data = await snacks.remove(id)
        if(data === 0){
            res.status(404).json('snack does not exist')
        }else{
            res.status(200).json(data)
        }
    } catch (error) {
        res.status(500).json('server error') 
    }
})



module.exports = router