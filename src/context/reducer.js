export const initialState = {
  user: null,
  dbUser: null,
};

export const actionTypes = {
  SET_FB_USER: "SET_USER",
  SET_DB_USER: "SET_DB_USER",
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
    default:
      return state;
  }
};

export default reducer;
