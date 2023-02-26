import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import {useState} from 'react'
import SignUpMUI from "./components/SignUpMUI";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Navbar from './components/Navbar';


//testing starts

//import Navbar from './components/testing/Navbar';


//testing ends

// styles
import "./components/styles/logoutbutton.css"

import CreateFeedback from './components/CreateFeedback';
import ViewAllFeedbacks from './components/ViewAllFeedback';

import { useAuthContext } from './hooks/useAuthContext';



function App() {

  const { user, dispatch } = useAuthContext();
  // console.log(user); 

  const handleLogout = (e) => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' })
  }

  //testing


  //testing

  return (



    <BrowserRouter>

      <div className="App">
        
     
        <Navbar/>
        
        
        <Routes>

          <Route path='/' 
          
            element={<Home />}>

          </Route>
          
          <Route path='/login'
          
           element={!user ? <SignIn /> : <Navigate to='/' />}>

          </Route>
          
          <Route path='/signup'
          
             element={!user ? <SignUpMUI /> : <Navigate to='/' />}>

          </Route>

          <Route path='/logged'
         
           element={user ? <h1>welcome back {user.name} !!</h1> : <Navigate to='/signup' />}>

          </Route>

          <Route path="/feedback"

            element={user?<CreateFeedback/>:<Navigate to="/login"/>}>
               
          </Route>

          <Route path="/allfeedbacks"

            element={user?<ViewAllFeedbacks/>:<Navigate to='/signup'/>}>
               
          </Route>

        </Routes>

        {user && <div className='btndiv'><button className="logout" onClick={handleLogout}>logout</button></div>}
      
      </div>

    </BrowserRouter>

  );
}

export default App;
