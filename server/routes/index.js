const express = require('express');
const router = express.Router();
const userRouter = require('./user')
const categoryRouter = require('./category')
const itemRouter = require('./items')
const pubRouter = require('./pub')

router.use('/users', userRouter)
router.use('/categories', categoryRouter)
router.use('/items', itemRouter)
router.use('/pub', pubRouter)

module.exports = router