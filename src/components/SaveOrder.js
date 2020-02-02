import React, { Component } from 'react';
import { CSVLink } from "react-csv";
import ListOrderForPrint from '../containers/ListOrderForPrint';
import store from '../redux/store';

class SaveOrder extends Component {
  state = {
    filename: (store.getState().order.length === 0 ? ' ' : store.getState().order[0].orderName)
  }
  data = store.getState().order;


  handleFileNameChange = (e) => {
    if (e.target.value.includes('#') ||
      e.target.value.includes('%') ||
      e.target.value.includes('&') ||
      e.target.value.includes('*') ||
      e.target.value.includes(':') ||
      e.target.value.includes('<') ||
      e.target.value.includes('>') ||
      e.target.value.includes('?') ||
      e.target.value.includes('/') ||
      e.target.value.includes('|')
    ) {
      alert(`Następujące znaki są niedopuszczalne w nazwie pliku: # % & * : < > ? / |`);
      return
    }
    this.setState({
      filename: e.target.value
    })
  }

  render() {
    // console.log(this.data);
    return (
      <>
        <div className='file_to_save_box'>
          <label >
            Wpisz nazwę pliku, w którym <br />zostanie zapisane bieżące <br />zamówienie w formacie .csv

          <br />
            <input value={this.state.filename} onChange={this.handleFileNameChange} />
            <br />
          </label>

          <CSVLink
            data={this.data}
            // headers={this.headers}
            filename={this.state.filename + '.csv'}

            onClick={() => {
              alert(`Plik "${this.state.filename}.csv" zostanie zapisany w katalogu "Pobrane"`);
            }}>
            Zapisz plik na dysk
        </CSVLink>
        </div>

        <div>
          <ListOrderForPrint />
        </div>

      </>
    );
  }
}

export default SaveOrder;