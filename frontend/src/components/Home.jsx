
import {Link} from 'react-router-dom'
import {useAuthContext} from '../hooks/useAuthContext';

import './styles/home.css'

const Home = () => {

  const {user}=useAuthContext();

    return (
     
     <div>
        <h1 className="title">Welcome to my website</h1>
      <p className="subtitle">This is the home page</p>
     {!user&&<Link to='/signup'>SignUp</Link>}<br/>
     {!user&&<Link to='/login'>Login</Link>} <br/>
     <Link to='/feedback'>create feedback</Link>
      
     </div>
    );
  };
  
  export default Home;