  const Reg=  require('../models/reg')

  exports.register=async(req,res)=>{
    try{
     var {username ,password}= req.body;

      const usercheck = await Reg.findOne({username:username})
      if(usercheck==null){
     const record=   new Reg({username:username ,password:password})
     record.save()
     res.status(201).json({
        message:'Successfully username has been registered',
        status:201
     })
    }else{
        res.status(400).json({        
            message:`${username} is already register`,
        })
    }
    }catch(error){
        res.status(500).json({
            message:error.message,
            status:500
        })
       
    }
  }