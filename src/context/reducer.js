export const initialState = {
  user: null,
  dbUser: null,
  isAuth: false,
};

export const actionTypes = {
  SET_FB_USER: "SET_USER",
  SET_DB_USER: "SET_DB_USER",
  SET_IS_AUTH: "SET_IS_AUTH",
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
    default:
      return state;
  }
};

export default reducer;
