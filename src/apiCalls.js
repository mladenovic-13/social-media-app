import axios from "axios";
import { LoginStart, LoginSuccess, LoginFailure } from "./context/AuthActions";

// export const loginCall = async (user, dispatch) => {
//   dispatch({ type: "LOGIN_START " });
//   try {
//     const res = await axios.post("auth/login", user);
//     dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//   } catch (err) {
//     dispatch({ type: "LOGING_FAILURE", payload: err });
//   }
// };

export const loginCall = async (user, dispatch) => {
  dispatch(LoginStart());
  try {
    const res = await axios.post("auth/login", user);
    dispatch(LoginSuccess(res.data));
  } catch (err) {
    dispatch(LoginFailure(err));
  }
};
