import { connect } from 'react-redux';
import { addLine } from '../redux/actions';
import MakeOrder from '../components/MakeOrder';

const mapDispatch = (dispatch) => ({
  addLine: (payload) => dispatch(addLine(payload))
});

export default connect(null, mapDispatch)(MakeOrder);