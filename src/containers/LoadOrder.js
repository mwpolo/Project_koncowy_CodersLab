import { connect } from 'react-redux';
import LoadOrder from '../components/LoadOrder';
import { addWholeOrder, loadOrderFromHDD } from '../redux/actions'


const mapDispatch = (dispatch) => ({
  addWholeOrder: payload => dispatch(addWholeOrder(payload)),
  loadOrderFromHDD: payload => dispatch(loadOrderFromHDD(payload)),
})

export default connect(null, mapDispatch)(LoadOrder);