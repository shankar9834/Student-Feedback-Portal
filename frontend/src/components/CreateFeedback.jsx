import { useState, useEffect } from "react";
import "./styles/createFeedback.css"

const optionList=["Agree","Strongly Agree","Disagree","Strongly Disagree"]

const CreateFeedback = () => {
    const [addingQ, setAddingQ] = useState(false);
    const [question, setQuestion] = useState("");
    const [questionList, setQuestionList] = useState([]);

    
    const handleQuestion = (e) => {
      
        setQuestion(e.target.value);
    }
   
    const addQuestion = () => {
        setQuestionList((state) => {
            const que={
                question:question,
                options:optionList
            }
             const questions=[];
             questions.push(...state);
             //questions.push(question) 
             questions.push(que) 
           return questions
        })

        setQuestion("");
        setAddingQ(false);
    }

    const handleAddingQ = () => {
        setAddingQ(true);
    }

    const submitForm=()=>{

        //logic to submit form
       
        // change this formData and take teacher id from localstorage and subject from input
            const formData={
                teacher:"63cd366c2487a07278e6c1ef",
                "subject":"Graph theory",
                questions:questionList
            };

            const subForm=async()=>{
              
                const res=await fetch('http://localhost:3005/feedback',{
                    method:'POST',
                    body: JSON.stringify(formData),
                    headers:{
                        'Content-Type': 'application/json'
                      }
                })

                const data=await res.json();
                console.log(data);
            }
        
            subForm();

            // change this below method and use the method to redirect to different page using react
            window.location.href='/'

        
    }


    return (
        <div className="createFeedback">
            <h1 className="heading">Create Feedback</h1>
            <div>
           {questionList.map((ques,i)=>{
            return (
                <div className="Question">
                <div key={i}>
                 {ques.question}
                </div>
                <div>
                    <select name="options" id="options">
                        <option value={ques.options[0]}>{ques.options[0]}</option>
                        <option value={ques.options[1]}>{ques.options[1]}</option>
                        <option value={ques.options[2]}>{ques.options[2]}</option>
                        <option value={ques.options[3]}>{ques.options[3]}</option>
                    </select>
                </div>
                </div>
            )
           })}</div>


            <div className="sub">
                {addingQ && <div >
                    <input type="text" onChange={handleQuestion}></input>
                    <button onClick={addQuestion}>submit</button>
                </div>}
                
                {!addingQ &&<div> <button onClick={handleAddingQ}>Add question</button></div>}
                
                {questionList.length>0&&
                 <div className="lastSubmit">
                    <button onClick={submitForm}>submit created feedback</button>
                 
                  </div>}
               
               
            </div>

        </div>
    );
}

export default CreateFeedback;