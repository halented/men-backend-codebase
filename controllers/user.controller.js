// user controller
const User = require('../models/user.model')
const router = require('express').Router()


router.route('/new').post((req, res)=>{
    const newUser = new User(req.body)

    newUser.save()
    .then(user => res.json(user))
    .catch(err=> res.status(400).json("Error! " + err))
})

router.route('/').get()

// mongoose method: deleteOne({id: req.params.id})
router.route(':id/delete').delete()

router.route(':id/update').post()

module.exports = router