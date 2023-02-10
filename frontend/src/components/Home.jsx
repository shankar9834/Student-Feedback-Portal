
import {Link} from 'react-router-dom'

import './styles/home.css'

const Home = () => {
    return (
     
     <div>
        <h1 className="title">Welcome to my website</h1>
      <p className="subtitle">This is the home page</p>
      <Link to='/signup'>SignUp</Link>
      <Link to='/login'>Login</Link>
     </div>
    );
  };
  
  export default Home;