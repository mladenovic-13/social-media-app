import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    username: "SafakKocaoglu",
    email: "nikolanik999@gmail.com",
    profilePicture: "person/3.jpeg",
    isAdmin: false,
    city: "Pirot",
    from: "Srbija",
    relationship: "1",
    coverPicture: "post/1.jpeg",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
