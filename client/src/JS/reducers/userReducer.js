import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT,
  REGISTER_USER,
} from "../actionsType/actionTypes";

const initialState = {
  user: null,
  loadUser: false,
  errors: null,
  isAuth: false,
};
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true };
    case REGISTER_USER:
      localStorage.setItem("token");
      return { ...state, loadUser: false, user: payload.user, isAuth: true };
    case LOGIN_USER:
      localStorage.setItem("token");
      return { ...state, loadUser: false, user: payload.user, isAuth: true };
    case CURRENT_USER:
      return { ...state, loadUser: false, user: payload };
    case LOGOUT:
      localStorage.removeItem("token");
      return { loadUser: false, isAuth: false, user: null, errors: [] };
    case FAIL_USER:
      return { ...state, errors: payload };
    default:
      return state;
  }
};

export default userReducer;
