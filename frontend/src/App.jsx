import { Route, BrowserRouter, Routes } from 'react-router-dom';

import SignUpMUI from "./components/SignUpMUI";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Navbar from './components/Navbar';


import { AuthContextProvider } from './context/authContext';
import { FeedbackContextProvider } from './context/feedbackContext';

function App() {
  return (

    <AuthContextProvider>
      <FeedbackContextProvider>
        <BrowserRouter>

          <div className="App">
            <Navbar />
            <Routes>
              
              <Route path='/' element={<Home />}></Route>
              <Route path='/login' element={<SignIn />}></Route>
              <Route path='/signup' element={<SignUpMUI />}></Route>
            
            </Routes>
          </div>
        
        </BrowserRouter>
      </FeedbackContextProvider>
    </AuthContextProvider>
  );
}

export default App;
