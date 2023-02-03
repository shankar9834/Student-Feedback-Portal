import { createContext, useReducer } from "react";

export const FeedbackContext = createContext();

const feedbackReducer = (state, action) => {
  // logic to be implemented
};

export const FeedbackContextProvider = ({ children }) => {
  const [feedbackState, feedbackDispatch] = useReducer(feedbackReducer, {
    feedbacks: [],
  });
  
  return (
    <FeedbackContext.Provider value={{ ...feedbackState, feedbackDispatch }}>
      {children}
    </FeedbackContext.Provider>
  );
};
