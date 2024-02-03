 const router=   require('express').Router()
   const regc=   require('../controllers/regcontroller')


router.post('/reg' ,regc.register)






module.exports= router