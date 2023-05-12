const initialState = {
    invitations : [],
  };
  
  const invitationsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_INVITATIONS':
        return { ...state, invitations: action.payload };
      case 'ADD_INVITATION':
        return { ...state, invitations: [...state.invitations , action.payload] };
      case 'DELETE_INVITATION':
        let filterData = state.invitations.filter(i => i._id !== action.payload)
        return { ...state, invitations: filterData };
      default:
        return state;
    }
  };
  
  export default invitationsReducer;
  