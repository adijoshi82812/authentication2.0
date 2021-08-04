export const isLoggedReducer = (
  state = localStorage.getItem("token") ? true : false,
  action
) => {
  switch (action.type) {
    case "login":
      return (state = action.payload);

    default:
      return state;
  }
};
