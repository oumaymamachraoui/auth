import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT,
  REGISTER_USER,
} from "../actionsType/actionTypes";
import axios from "axios";

export const register = (newUser) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("/api/user/register", newUser);
    dispatch({ type: REGISTER_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error });
  }
};
export const login = (user) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("/api/user/login", user);
    dispatch({ type: LOGIN_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error });
  }
};

export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let config = {
      headers: localStorage.getItem("token"),
    };
    let result = await axios.get("/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
