import { combineReducers } from 'redux';
import { ADD_ORDER_LINE, RESET_ORDER, DELETE_ORDER_LINE, CHANGE_ORDER_LINE, ADD_WHOLE_ORDER, LOAD_ORDER_FROM_HDD, SORT_ORDER } from './actions'

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
    // console.log('Reducer dodanie localStorage', action.payload);

    return [...action.payload]
  }

  if (action.type === LOAD_ORDER_FROM_HDD) {
    // console.log(action.payload);
    return [...action.payload]
  }

  if (action.type === SORT_ORDER) {
    console.log('reducer dupa', action.payload);
    let newState = [...state];
    if (action.payload !== 'None' && action.payload !== 'Product') {
      newState.sort((a, b) => a[action.payload].localeCompare(b[action.payload]));
    }
    return newState
  }
  return state
}

export default combineReducers({
  order,
}) 