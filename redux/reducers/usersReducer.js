const initialState = {
    users : [],
  };
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_USERS':
        return { ...state, users: action.payload };
      case 'DELETE_USER':
        let filterData = state.users.filter(i => i._id !== action.payload)
        return { ...state, users: filterData };
      default:
        return state;
    }
  };
  
  export default usersReducer;
  