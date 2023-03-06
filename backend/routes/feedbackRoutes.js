const express=require('express');


const Feedback=require('../models/Feedback');
const Question=require('../models/Question');
const Student=require('../models/Student');
const Submission=require('../models/Submission');
const Notification=require('../models/Notification')
const Teacher =require('../models/Teacher')


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
   //  console.log(req.body);
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
        
      const foundTeacher=await Teacher.findById(teacher)
     // console.log(foundTeacher)
      
     const message=`${foundTeacher.name} created feedback for ${subject}`
        
       const notification=new Notification({message});
      // console.log(notification)
       await notification.save()
       


     
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


  router.post('/submitFeedback',async(req,res)=>{
       
    try{
   
     const {feedbackId,studentId}=req.body
      const feedback=await Feedback.findById(feedbackId);
      const student=await Student.findById(studentId);
     
      if(!student)
      {
           throw Error('student not found');
      }

      if(!feedback) {
        
        throw Error('feedback not found');
      }

   
      // write logic for , if student has already submitted the feedback 
      //i.e studentId exists in submitted by attribute of feedback

      
      const {answers}=req.body;
     
    
       if(feedback.submittedBy.includes(studentId))
       {
        
        throw Error('you have already submitted feedback!!');
       }

         // await Submission.deleteMany({});  
       
         const newSubmission=new Submission({feedback_id:feedbackId,student_id:studentId,answers});
    
       await newSubmission.save();  
       feedback.submission.push(newSubmission._id); 

        feedback.submittedBy.push(studentId);
        await feedback.save(); 

     res.status(200).json({message:'succesfully submitted feedback',feedback});


    }
    catch(err){
      
      res.status(400).json({message:err.message})
    }
  // console.log(req.body)
       
  })  

module.exports=router;