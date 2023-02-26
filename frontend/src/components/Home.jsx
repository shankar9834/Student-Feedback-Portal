
import {Link} from 'react-router-dom'
import {useAuthContext} from '../hooks/useAuthContext';

import './styles/home.css'

const Home = () => {

  const {user}=useAuthContext();

    return (
     
     <div className='homeWrap'>
        <h1 className="title">Welcome to Feedback Portal</h1>
      <p className="subtitle">This is the home page</p>
     {!user&&<Link className="link" to='/signup'>SignUp</Link>} 
     <br/>
     <br/>
     <br/>
     {!user&&<Link className="link" to='/login'>Login</Link>} 
      <br/>
     <br/>
     <br/>
     {user&&<Link className="link" to='/feedback'>create feedback</Link>
     }
    <br/>
     <br/>
     <br/>
     {user&& <Link className="link" to='/allfeedbacks'>view all feedbacks</Link>}
    

     </div>
    );
  };
  
  export default Home;