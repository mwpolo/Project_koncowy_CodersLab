import { connect } from 'react-redux';
import ListOrderForPrint from '../components/ListOrderForPrint';


const mapState = (state) => ({
  order: state.order,
});


export default connect(mapState)(ListOrderForPrint);