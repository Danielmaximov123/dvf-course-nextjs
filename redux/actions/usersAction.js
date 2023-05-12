import axios from "axios";


export const getUsers = () => async (dispatch) => {
    try {
      const resp = await axios.get('/api/users');
      dispatch({ type: 'GET_USERS', payload: resp.data });
    } catch (error) {
      console.error('Error fetching Users:', error);
    }
  };

  export const deleteUsers = (id) => async (dispatch) => {
    try {
      await axios.delete(`/api/users/${id}`);
      dispatch({ type: 'DELETE_USER', payload: id });
    } catch (error) {
      console.error('Error fetching Users:', error);
    }
  };