import axios from "axios";

export const getInvitations = () => async (dispatch) => {
      try {
        const resp = await axios.get('/api/Invitation');
        dispatch({ type: 'GET_INVITATIONS', payload: resp.data });
      } catch (error) {
        console.error('Error fetching invitations:', error);
      }
    };

export const addNewInvitation = () => async (dispatch) => {
    try {
        const resp = await axios.post('/api/Invitation');
        dispatch({ type: 'ADD_INVITATION', payload: resp.data });
    } catch (error) {
        console.error('Error fetching invitations:', error);
    }
}

export const deleteInvitation = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/Invitation/${id}`)
        dispatch({ type: 'DELETE_INVITATION', payload: id });
    } catch (error) {
        console.error('Error fetching invitations:', error);
    }
}