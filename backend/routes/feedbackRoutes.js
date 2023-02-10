const express=require('express');
const Feedback=require('../models/Feedback');

const router=express.Router();



router.get('/allFeedbacks',async(req,res)=>{
   
    try{
        const allFeedbacks=await Feedback.find({});

        if(!allFeedbacks) throw Error("no feedbacks found");
        
        res.status(200).json({allFeedbacks});
    }
    catch(err)
    {
        res.status(500).json({ message: err.message });
    }
    
    
})


router.get('/view/:id',async(req,res)=>{
   
     try{

        const {id}=req.params;

        const feedback=await Feedback.findById(id);
       
        if(!feedback) throw Error("no feedback found");

        res.status(200).json({feedback});


     }catch(err){
        res.status(500).json({message:err.message});
     }

})

module.exports=router;