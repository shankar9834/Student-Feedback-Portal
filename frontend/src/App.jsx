import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Sign from "./components/SignUpMUI";
import SignUpMUI from "./components/Sign";
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
              <Route path='/signup' element={<Sign />}></Route>
              <Route path='/login' element={<SignUpMUI />}></Route>
            
            </Routes>
          </div>
        
        </BrowserRouter>
      </FeedbackContextProvider>
    </AuthContextProvider>
  );
}

export default App;
