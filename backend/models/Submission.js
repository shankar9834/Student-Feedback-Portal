
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Feedback=require('./Feedback');
const Student=require('./Student');
const Question=require('./Question');


const SubmissionSchema=new Schema({
  
    feedback_id:{
       type:mongoose.Schema.Types.ObjectId,
       ref: 'Feedback'
    },
    student_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    answers:[{
        
            question: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Question'
              },
      
            selectedOption: String,
          }
    ],
    text:{
      type:String
      
    }
    

},{timestamps:true})

module.exports=mongoose.model('Submission',SubmissionSchema);
