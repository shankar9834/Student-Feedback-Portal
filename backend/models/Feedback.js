
const mongoose=require('mongoose');
const Teacher=require('./Teacher');
const Question=require('./Question');
const Student=require('./Student');
const Submission=require('./Submission');


const FeedbackSchema = new mongoose.Schema({
   
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher'
    },
    
    subject:{
      type:String,
      required:true
    },
    
    /* questions: [QuestionSchema] */
    question:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question'
    }]
    ,
    
    

   /*  submission: [{
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
      }, 
      answers:[{
        question: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Question'
          },
  
        selectedOption: String,
      }]       
   }] */

   submission:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Submission'
      
   }],

   submittedBy:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    }
   ]


  },{timestamps:true});
  
  const Feedback = mongoose.model('Feedback', FeedbackSchema);
  module.exports = Feedback;

  
  
  
  
  