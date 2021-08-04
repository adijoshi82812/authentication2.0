export const loginHandler = (state) => {
  return (dispatch) => {
    dispatch({
      type: "login",
      payload: state,
    });
  };
};

export const userHandler = (username) => {
  return (dispatch) => {
    dispatch({
      type: "update",
      payload: username,
    });
  };
};
