import { ADD_USER, SELECT_USER } from "../constants/action-types";
import usersData from '../../usersData.json';

const initialState = {
  users: usersData,
  selectedUserIndex: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case SELECT_USER:
      return { ...state, selectedUserIndex: action.payload };
    default:
      return state;
  }
};
export default rootReducer;