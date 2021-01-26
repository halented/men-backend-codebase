// user controller
const User = require('../models/user.model')
const router = require('express').Router()


router.route('/new').post()

router.route('/').get()

// mongoose method: deleteOne({id: req.params.id})
router.route(':id/delete').delete()

router.route(':id/update').post()

module.exports = router