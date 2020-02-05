import { connect } from 'react-redux';
import { addLine, resetOrder, changeLine, deleteLine, sortOrder } from '../redux/actions';
import MakeOrder from '../components/MakeOrder';

const mapDispatch = (dispatch) => ({
  addLine: (payload) => dispatch(addLine(payload)),
  resetOrder: () => dispatch(resetOrder()),
  changeLine: payload => dispatch(changeLine(payload)),
  deleteLine: payload => dispatch(deleteLine(payload)),
  sortOrder: payload => dispatch(sortOrder(payload)),
});

export default connect(null, mapDispatch)(MakeOrder);