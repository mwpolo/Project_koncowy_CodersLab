const ADD_ORDER_LINE = 'ADD_ORDER_LINE';


const addLine = (type, payload) => ({
  type: ADD_ORDER_LINE,
  payload,
})
export { ADD_ORDER_LINE, addLine }