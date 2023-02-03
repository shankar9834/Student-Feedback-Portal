import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  // logic to be implemented

     
  switch(action.type)
  {
      case 'LOGIN':
          return {user:action.payload}
      
      case 'LOGOUT':
           return {user:null}
      
     default : 
            return state

  }

};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(()=>{
    const data=localStorage.getItem('user');
    const parsed=JSON.parse(data);
      
    dispatch({type:'LOGIN',payload:parsed})

   // console.log(data);
 },[]) 

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
