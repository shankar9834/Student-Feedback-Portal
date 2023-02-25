const express=require('express');


const Feedback=require('../models/Feedback');
const Question=require('../models/Question');


const router=express.Router();



router.get('/allFeedbacks',async(req,res)=>{
   
    try{
        //const allFeedbacks=await Feedback.find({});
        const allFeedbacks=await Feedback.find({})
                                 .populate({path:'teacher'})
                                 .populate({path:'submittedBy'})
                                 .populate({path:'submission'})
                                 .populate({path:'question'});
       

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

router.post('/', async (req, res) => {
    try {

     // console.log(req.body);
      const { teacher, subject } = req.body;
      const {questions}=req.body;

      const submission=[];
      const question_ids=[]
   
       for( var q of questions)
      {
     
           const {question,options}=q;
       
           const ques=new Question({question,options});
             await ques.save()
             question_ids.push(ques._id);
           
      } 

     
      //await Feedback.deleteMany({});
       const newFeedback = new Feedback({
        teacher,
        subject,
        question:question_ids,
        submission
      });
     
       
      await newFeedback.save(); 
      // console.log(newFeedback);
      res.json({ message: 'Feedback submitted successfully' ,feedback:newFeedback});
   

    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports=router;