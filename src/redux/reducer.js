import { combineReducers } from 'redux';
import { ADD_ORDER_LINE } from './actions'

const order = (state = [], action) => {
  console.log(action);
  if (action.type === ADD_ORDER_LINE) {
    console.log(action.payload);
    return [...state, action.payload]
  }
  return state
}

export default combineReducers({
  order,
}) 