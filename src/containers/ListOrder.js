import { connect } from 'react-redux';
import ListOrder from '../components/ListOrder';
import { deleteLine } from '../redux/actions';

const mapState = (state) => ({
  order: state.order,
});

const mapDispatch = (dispatch) => ({
  deleteLine: payload => dispatch(deleteLine(payload)),
})

export default connect(mapState, mapDispatch)(ListOrder);