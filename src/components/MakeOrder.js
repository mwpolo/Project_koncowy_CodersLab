import React, { Component } from 'react';
import ListOrder from './ListOrder';
import ProductWindow from './ProductWindow';

class MakeOrder extends Component {
  state = {
    orderLine: {
      orderName: '',
      code: '',
      ownCode: '',
      name: '',
      size: '',
      color: '',
      quantity: '',
      price: '',
    },
    order: []
  }

  handleInputchange = (e) => {

    const orderLine = { ...this.state.orderLine, [e.target.name]: e.target.value }
    this.setState({
      orderLine
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.orderLine.code === '') {
      alert(`\nNie podano kodu produktu.\n\nProszę podać kod produktu.`);
      return;
    }
    if (this.state.orderLine.name === '') {
      alert(`\nNie podano nazwy produktu.\n\nProszę podać nazwę produktu.`);
      return;
    }
    if (this.state.orderLine.size === '') {
      alert(`\nNie podano rozmiaru produktu.\n\nProszę podać rozmiar produktu.`);
      return;
    }
    if (this.state.orderLine.quantity === '') {
      alert(`\nNie podano ilości produktów.\n\nProszę podać ilość produktów.`);
      return;
    }
    if (this.state.orderLine.color === '') {
      alert(`\nNie podano koloru produktów.\n\nProszę podać kolor produktów.`);
      return;
    }

    let order = [...this.state.order, this.state.orderLine];
    console.log(this.state.orderLine.orderName);
    order = order.map(line => (line = { ...line, orderName: this.state.orderLine.orderName }))
    this.setState({
      order
    })

  }

  handleDelete = (index) => {
    console.log(index);
    let newOrder = [...this.state.order];
    newOrder.splice(index, 1);
    this.setState({
      order: newOrder
    })
  }

  handleLineChange = (index) => {
    let lineToChange = [...this.state.order];
    console.log(lineToChange[index]);
    lineToChange = lineToChange[index];
    this.setState({
      orderLine: lineToChange

    })
    let newOrder = [...this.state.order];
    newOrder.splice(index, 1);
    this.setState({
      order: newOrder
    })
  }
  handlePickSpinner = (e) => {
    // console.log(e.target.alt);
    console.log(e.target.dataset.code);
    console.log(e.target.dataset.name);
    let orderLine = { ...this.state.orderLine, name: e.target.dataset.name };
    orderLine = { ...orderLine, code: e.target.dataset.code };
    this.setState({
      orderLine
    })

  }

  render() {
    localStorage.setItem("currentOrder", JSON.stringify(this.state.order));
    return (
      <>
        <div className="components_background">

          <form onSubmit={this.handleSubmit}>
            <label> {`Numer Zamowienia: `}
              <input className='input_form' onChange={this.handleInputchange} type='text' name='orderName'></input>
            </label>
            <br />
            <label> Edik Kod  <br />
              <input className='input_form input_form_narrow' onChange={this.handleInputchange} type='text' name='ownCode' value={this.state.orderLine.ownCode}></input>
            </label>
            <label> Kod  <br />
              <input className='input_form input_form_narrow' onChange={this.handleInputchange} type='text' name='code' value={this.state.orderLine.code}></input>
            </label>

            <label>Nazwa  <br />
              <input className='input_form' onChange={this.handleInputchange} type='text' name='name'
                value={this.state.orderLine.name}></input>
            </label>
            <label>Rozmiar  <br />
              <input className='input_form input_form_narrow' onChange={this.handleInputchange} type='text' name='size'></input>
            </label>
            <label>Ilość  <br />
              <input className='input_form input_form_narrow' onChange={this.handleInputchange} type='number' name='quantity'></input>
            </label>

            <label>Kolor  <br />
              <input className='input_form' onChange={this.handleInputchange} type='text' name='color'></input>
            </label>
            {/* <select>
              <option>jeden</option>
              <option>dwa</option>
              <option>trzy</option>
            </select> */}
            <button type='submit' className='button_addToOrder'>Dodaj do zamówienia</button>
          </form>

          <ListOrder order={this.state.order} handleDelete={this.handleDelete} handleLineChange={this.handleLineChange} />
          <ProductWindow handlePickSpinner={this.handlePickSpinner} />
        </div>

      </>
    );
  }
}

export default MakeOrder;