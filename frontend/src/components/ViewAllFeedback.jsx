
import {useState, useEffect} from 'react'

import "./styles/viewAllFeedbacks.css"


const ViewAllFeedbacks=()=>{
    const [feedbacks,setFeedbacks]=useState([]);
    const [toggleView,setToggleView]=useState(false);
    const [viewSubmit,setViewSubmit]=useState(false);
    const [val,setVal]=useState()

     useEffect(()=>{
        
        const getFeedbacks=async()=>{
            const res=await fetch('http://localhost:3005/feedback/allFeedbacks')
            const data=await res.json()
          
            setFeedbacks(data.allFeedbacks);
          
           console.log(data.allFeedbacks)
        }
        getFeedbacks();
       // console.log(feedbacks)
      

     },[]) 


     
     const handleView=(e)=>{
        //logic to view individual feedback
        console.log(e.target.value)
        setVal(e.target.value);
        setToggleView(true)
       
        
     }

     const handleGOBack=()=>{
        setToggleView(false)
     }

     const handleSubmitFeedback=()=>{

     }

    return (
        
      
      <div className='viewFeedbacks'>
            <h1>All Feedbacks</h1>    
             <div className='feeds'>
              {!toggleView&&feedbacks.length>0&&feedbacks.map((feedback,i)=>{
                return(
                   
                    <div key={i} className="feedback">
                        <li className='SRNO'>{i+1}</li>
                        <li className='subject'>
                        {feedback.subject}
                        </li>
                        <li>
                            {feedback.teacher.name}
                        </li>
                        <button value={i+1} onClick={handleView}>view</button>
                        
                    </div>
                     
                )
               })}
               {toggleView&& <div className="feedback" style={{width:"600px",height:"600px",marginLeft:"420px"}}>
              
                <h2>Subject Name: {feedbacks[val-1].subject}</h2>   
                <h2>Teacher Name:{feedbacks[val-1].teacher.name}</h2>   
                <div><ul>
                    {feedbacks[val-1].question.map((ele,ind)=>{
                        return <div className="quesInp" >
                            <input type="text" value={ele.question}></input>
                           
                        </div>
                    })}
                    </ul>
                </div>
                <button  onClick={handleGOBack}>go back</button>
                <button  onClick={handleSubmitFeedback}>submit feedback</button>
                </div>}  
             </div>
       
        </div> 
       
    );
     
}

export default ViewAllFeedbacks  