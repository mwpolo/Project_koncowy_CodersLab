import React, { Component } from 'react';
import ListOrderForPrint from '../containers/ListOrderForPrint';

class LoadOrder extends Component {
  state = {}
  handleLoadLastOrder = () => {
    const lastOrder = JSON.parse(localStorage.getItem('lastOrder')).order;
    console.log(lastOrder);
    console.log(this.props);
    this.props.addWholeOrder(lastOrder);
  }

  render() {
    return (
      <>
        <button className='button_load_last_order' onClick={this.handleLoadLastOrder} >Wczytaj ostatnie zamówienie</button>
        <ListOrderForPrint />
      </>
    );
  }
}

export default LoadOrder;