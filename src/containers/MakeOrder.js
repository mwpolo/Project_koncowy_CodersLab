import { connect } from 'react-redux';
import { addLine, resetOrder, changeLine, deleteLine } from '../redux/actions';
import MakeOrder from '../components/MakeOrder';

const mapDispatch = (dispatch) => ({
  addLine: (payload) => dispatch(addLine(payload)),
  resetOrder: () => dispatch(resetOrder()),
  changeLine: payload => dispatch(changeLine(payload)),
  deleteLine: payload => dispatch(deleteLine(payload)),
});

export default connect(null, mapDispatch)(MakeOrder);