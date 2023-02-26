
import {useState, useEffect} from 'react'

import "./styles/viewAllFeedbacks.css"
import Card from './UI/Card';

const ViewAllFeedbacks=()=>{
    const [feedbacks,setFeedbacks]=useState([]);

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


     
     const handleView=()=>{
        //logic to view individual feedback
        
     }

    return (
        
        <div className='viewFeedbacks'>
            <h1>All Feedbacks</h1>    
             <div className='feeds'>
              {feedbacks.length>0&&feedbacks.map((feedback,i)=>{
                return(
                    <Card>
                    <div key={i} className="feedback">
                        <li className='SRNO'>{i+1}</li>
                        <li className='subject'>
                        {feedback.subject}
                        </li>
                        <li>
                            {feedback.teacher.name}
                        </li>
                        <button onClick={handleView}>view</button>
                        
                    </div>
                     </Card>
                )
               })}  
             </div>
               

        </div>
       
    );
     
}

export default ViewAllFeedbacks  