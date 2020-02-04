import csv2json from 'csvjson-csv2json';

const ADD_ORDER_LINE = 'ADD_ORDER_LINE';
const RESET_ORDER = 'RESET_ORDER';
const DELETE_ORDER_LINE = 'DELETE_ORDER_LINE';
const CHANGE_ORDER_LINE = 'CHANGE_ORDER_LINE';
const ADD_WHOLE_ORDER = 'ADD_WHOLE_ORDER';
const LOAD_ORDER_FROM_HDD = 'LOAD_ORDER_FROM_HDD';


const addLine = (payload) => ({
  type: ADD_ORDER_LINE,
  payload,
});

const resetOrder = () => ({
  type: RESET_ORDER,
});

const deleteLine = (payload) => ({
  type: DELETE_ORDER_LINE,
  payload,
});

const changeLine = (payload) => ({
  type: CHANGE_ORDER_LINE,
  payload,
});

const addWholeOrder = (payload) => ({
  type: ADD_WHOLE_ORDER,
  payload,
});

const loadOrderFromHDD = (files) => (dispatch) => {
  var reader = new FileReader();
  reader.onload = function (e) {
    // Use reader.result

    this.jsonFile = (csv2json(reader.result));

    dispatch({ type: LOAD_ORDER_FROM_HDD, payload: this.jsonFile })
  }
  reader.readAsText(files[0]);

}

export {
  ADD_ORDER_LINE, RESET_ORDER, DELETE_ORDER_LINE, CHANGE_ORDER_LINE, ADD_WHOLE_ORDER, LOAD_ORDER_FROM_HDD,
  addLine, resetOrder, deleteLine, changeLine, addWholeOrder, loadOrderFromHDD
}