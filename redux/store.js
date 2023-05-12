import { applyMiddleware , createStore , combineReducers } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import invitationsReducer from "./reducers/InvitationsReducer";
import usersReducer from "./reducers/usersReducer";

const reducers = combineReducers({
    invitations : invitationsReducer,
    users : usersReducer
})

const store = createStore(reducers , composeWithDevTools(applyMiddleware(thunk)))

export default store
