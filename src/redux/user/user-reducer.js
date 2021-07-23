let initialstate = { accountAddress: "", ethId: "" };

const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        accountAddress: action.payload.accountAddress,
        ethId: action.payload.ethId,
      };
    case "INITIAL_STATE":
      return {
        ...state,
        accountAddress: "",
        ethId: "",
      };
    default:
      return state;
  }
};
export default userReducer;
