
const express = require("express");
const mongoose = require("mongoose");
const jwt=require('jsonwebtoken');
const cors = require("cors");


const Student=require('./models/Student');
const Teacher=require('./models/Teacher');
const Question=require('./models/Question');
const Feedback=require('./models/Feedback');
const Submission=require('./models/Submission');


const studentRoutes=require('./routes/studentRoutes');
const teacherRoutes=require('./routes/teacherRoutes');
const feedbackRoutes=require('./routes/feedbackRoutes');

const app = express();



app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

 mongoose
  .connect("mongodb://localhost:27017/studentFeedbackPortal")
  .then(() => {
    
    console.log('connected to backend');

  })
  .catch((err) => {

    console.log("error connecting database", err);
    
  }); 


  app.use('/student',studentRoutes);
  
  app.use('/teacher',teacherRoutes);

  app.use('/feedback',feedbackRoutes);
  
  

  
  app.post('/student/submitFeedback/:feedbackId/:studentId',async(req,res)=>{
       
    try{
      const {feedbackId}=req.params;
      const {studentId}=req.params;
     
      const feedback=await Feedback.findById(feedbackId);
      const student=await Student.findById(studentId);

      if(!student)
      {
           throw Error('student not found');
      }

      if(!feedback) {
        
        throw Error('feedback not found');
      }

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
       
  })


  
  app.listen(3005,(req,res)=>{
    console.log('listening on port 3005');
  })