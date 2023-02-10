const express=require('express');
const Teacher=require('../models/Teacher');

const router=express.Router();

router.post('/',async (req, res) => {
    try {
      const { name, email, password } = req.body;
       console.log('hitting teacher')
      const teacher = new Teacher({
        name,
        email,
        password
      });
  
      await teacher.save();
      res.status(200).json({ message: 'Teacher created successfully',teacher });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  })


  

  
module.exports=router;