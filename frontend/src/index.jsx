import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { AuthContextProvider } from './context/authContext';
import { FeedbackContextProvider } from './context/feedbackContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <AuthContextProvider>
  
      <FeedbackContextProvider>

        <App />
      
      </FeedbackContextProvider>
    
    </AuthContextProvider>
  
  </React.StrictMode>
);



