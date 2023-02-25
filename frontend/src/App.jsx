import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';

import SignUpMUI from "./components/SignUpMUI";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Navbar from './components/Navbar';


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

  return (


    <BrowserRouter>

      <div className="App">
        <Navbar />
        <Routes>

          <Route path='/' 
          
            element={<Home />}>

          </Route>
          
          <Route path='/login'
          
           element={!user ? <SignIn /> : <Navigate to='/logged' />}>

          </Route>
          
          <Route path='/signup'
          
             element={!user ? <SignUpMUI /> : <Navigate to='/logged' />}>

          </Route>

          <Route path='/logged'
         
           element={user ? <h1>welcome back {user.name} !!</h1> : <Navigate to='/signup' />}>

          </Route>

          <Route path="/feedback"

            element={<CreateFeedback/>}>
               
          </Route>

          <Route path="/allfeedbacks"

            element={<ViewAllFeedbacks/>}>
               
          </Route>

        </Routes>

        {user && <button onClick={handleLogout}>logout</button>}
      
      </div>

    </BrowserRouter>

  );
}

export default App;
