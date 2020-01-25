import { connect } from 'react-redux';
import LoadOrder from '../components/LoadOrder';
import { addWholeOrder } from '../redux/actions'


const mapDispatch = (dispatch) => ({
  addWholeOrder: payload => dispatch(addWholeOrder(payload))
})

export default connect(null, mapDispatch)(LoadOrder);