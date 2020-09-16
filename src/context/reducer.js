import { dbUser, fbUser } from "../res/dummy";

export const initialState = {
  user: fbUser,
  dbUser: dbUser,
  isAuth: false,
  filtersPass: [],
  filtersOrien: [],
};

export const actionTypes = {
  SET_FB_USER: "SET_USER",
  SET_DB_USER: "SET_DB_USER",
  SET_IS_AUTH: "SET_IS_AUTH",
  ADD_PASS_FILTERS: "ADD_PASS_FILTERS",
  ADD_ORIEN_FILTERS: "ADD_ORIEN_FILTERS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_FB_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.SET_DB_USER:
      return {
        ...state,
        dbUser: action.user,
      };

    case actionTypes.SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };

    case actionTypes.ADD_PASS_FILTERS:
      return {
        ...state,
        filtersPass: action.filters,
      };

    case actionTypes.ADD_ORIEN_FILTERS:
      return {
        ...state,
        filtersOrien: action.filters,
      };
    default:
      return state;
  }
};

export default reducer;
