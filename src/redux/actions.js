const ADD_ORDER_LINE = 'ADD_ORDER_LINE';
const RESET_ORDER = 'RESET_ORDER';
const DELETE_ORDER_LINE = 'DELETE_ORDER_LINE';
const CHANGE_ORDER_LINE = 'CHANGE_ORDER_LINE';

const addLine = (payload) => ({
  type: ADD_ORDER_LINE,
  payload,
})

const resetOrder = () => ({
  type: RESET_ORDER,
})

const deleteLine = (payload) => ({
  type: DELETE_ORDER_LINE,
  payload,
})

const changeLine = (payload) => ({
  type: CHANGE_ORDER_LINE,
  payload,
})
export {
  ADD_ORDER_LINE, RESET_ORDER, DELETE_ORDER_LINE, CHANGE_ORDER_LINE,
  addLine, resetOrder, deleteLine, changeLine,
}