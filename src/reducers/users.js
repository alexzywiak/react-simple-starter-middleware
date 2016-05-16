import { FETCH_USERS } from '../actions/types';

export default function(state = [], action) {
  console.log(action);
  switch(action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload.data];
    default:
      return state;
  }
}