import React, { Component } from 'react';
import ListOrderForPrint from '../containers/ListOrderForPrint';
import ReactFileReader from 'react-file-reader';
// import csv2json from 'csvjson-csv2json';
// import store from '../redux/store'
// import { LOAD_ORDER_FROM_HDD } from '../redux/actions'

class LoadOrder extends Component {
  state = {}
  jsonFile;



  handleLoadLastOrder = () => {
    const lastOrder = JSON.parse(localStorage.getItem('lastOrder')).order;
    this.props.addWholeOrder(lastOrder);
  }

  render() {
    console.log(this.props);
    return (
      <>
        <div className="load_orders_buttons">
          <button className='button_load_last_order' onClick={this.handleLoadLastOrder} >Wczytaj ostatnio edytowane zamówienie</button>

          <ReactFileReader handleFiles={this.props.loadOrderFromHDD} fileTypes={'.csv'}>
            <button className='btn_loadOrderFromHDD'>Wybierz i załaduj plik z dysku</button>
          </ReactFileReader>
        </div>
        <ListOrderForPrint />
      </>
    );
  }
}

export default LoadOrder;