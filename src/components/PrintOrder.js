import React, { Component } from 'react'
import ListOrderForPrint from '../containers/ListOrderForPrint'

class PrintOrder extends Component {
  state = {}
  handlePrint = () => {
    window.print()
  }
  render() {
    return (
      <>
        <button className='button_print' onClick={this.handlePrint}>Drukuj zamówienie</button>
        <ListOrderForPrint />
      </>
    );
  }
}

export default PrintOrder;