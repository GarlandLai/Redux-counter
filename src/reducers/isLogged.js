const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      //below means opposite of state
      return !state;
      default:
      return state;
  }
};

export default loggedReducer;
