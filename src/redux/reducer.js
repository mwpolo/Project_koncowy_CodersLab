import { combineReducers } from 'redux';
import { ADD_ORDER_LINE, RESET_ORDER, DELETE_ORDER_LINE, CHANGE_ORDER_LINE, ADD_WHOLE_ORDER } from './actions'

const order = (state = [], action) => {
  // console.log(action);
  if (action.type === ADD_ORDER_LINE) {
    let newState = [...state];
    newState.unshift(action.payload);
    if (newState[0].orderName !== newState[newState.length - 1].orderName) {
      // console.log('Teraz zmiana nr PO');
      newState = newState.map(line => (line = { ...line, orderName: action.payload.orderName }))
    }
    return newState;
  }
  if (action.type === RESET_ORDER) {
    return state = [];
  }
  if (action.type === DELETE_ORDER_LINE) {
    let newState = [...state];
    newState.splice(action.payload, 1);
    return newState;
  }
  if (action.type === CHANGE_ORDER_LINE) {

  }
  if (action.type === ADD_WHOLE_ORDER) {
    console.log('Reducer dodanie localStorage', action.payload);

    return [...state, ...action.payload]
  }
  return state
}

export default combineReducers({
  order,
}) 