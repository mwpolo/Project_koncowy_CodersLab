import React, { Component } from 'react';
import ListOrder from '../containers/ListOrder';
import ProductWindow from './ProductWindow';
import store from '../redux/store'

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
      remarks: '',
      price: '',
      idName: '',
    },
    productsSelection: 'wszystkie produkty',

  }

  handleInputchange = (e) => {

    const orderLine = { ...this.state.orderLine, [e.target.name]: e.target.value }
    this.setState({
      orderLine
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //isNumber sprawdza czy w input quantity podano liczbę
    function isNumber(n) {
      return !isNaN(parseFloat(n)) && !isNaN(n - 0)
    }
    if (this.state.orderLine.code === '') {
      alert(`\nNie podano kodu produktu.\n\nProszę podać kod produktu.`);
      return;
    }
    if (this.state.orderLine.name === '') {
      alert(`\nNie podano nazwy produktu.\n\nProszę podać nazwę produktu.`);
      return;
    }
    if (this.state.orderLine.name.includes('GB') && this.state.orderLine.remarks === '') {
      alert(`\nNie dokonano wyboru między akcesoriami kulą lub kryształem.\n\nProszę  wybrać kulę, kryształ lub znak " - " i wpisać to w polu Uwagi.`);
      return;
    }
    if (this.state.orderLine.size === '') {
      alert(`\nNie podano rozmiaru produktu.\n\nProszę podać rozmiar produktu.`);
      return;
    }
    if (
      !isNumber(this.state.orderLine.quantity) ||
      this.state.orderLine.quantity.includes('.') ||
      this.state.orderLine.quantity.includes('-')
    ) {
      alert(`\nNie podano prawidłowej ilości produktów.\n\nProszę podać prawidłową ilość produktów.\n\nMusi to być liczba całkowita (nie ułamkowa) i dodatnia.`);
      return;
    }

    if (this.state.orderLine.color === '') {
      alert(`\nNie podano koloru produktów.\n\nProszę podać kolor produktów.`);
      return;
    }

    this.props.addLine(this.state.orderLine);
    localStorage.setItem("lastOrder", JSON.stringify(store.getState()));
  }

  handleChangeLine = (index) => {
    this.setState({
      orderLine: store.getState().order[index]
    })

    this.props.deleteLine(index);
    localStorage.setItem("lastOrder", JSON.stringify(store.getState()));
  }

  handlePickItem = (e) => {
    // console.log(e.target.alt);
    // console.log(e.target.dataset.code);
    // console.log(e.target.dataset.name);
    // console.log(e.target.dataset.idname);
    let orderLine = { ...this.state.orderLine, name: e.target.dataset.name };
    orderLine = { ...orderLine, size: e.target.dataset.itemsize };
    orderLine = { ...orderLine, code: e.target.dataset.code };
    orderLine = { ...orderLine, ownCode: e.target.dataset.owncode };
    orderLine = { ...orderLine, quantity: e.target.dataset.quantity };
    orderLine = { ...orderLine, color: e.target.dataset.itemcolor };
    orderLine = { ...orderLine, remarks: e.target.dataset.remarks };
    orderLine = { ...orderLine, idName: e.target.dataset.idname };
    // console.log(orderLine);
    this.setState({
      orderLine
    })
  }

  handleResetOrder = () => {
    const answer = window.prompt('Jeśli chcesz zresetować całe zamówienie wpisz "tak"');
    // console.log(answer);
    if (answer === null) { return }
    else if (answer.toUpperCase() !== 'TAK') { return }

    this.setState({
      orderLine: {
        orderName: '',
        code: '',
        ownCode: '',
        name: '',
        size: '',
        color: '',
        quantity: '',
        remarks: '',
        price: '',
        idName: '',
      }
    })
    this.props.resetOrder();
    localStorage.setItem("lastOrder", JSON.stringify(store.getState()));
  };

  handleProductSelection = (e) => {
    // console.log(e.target.value);
    this.setState({
      productsSelection: e.target.value
    })
  }

  handleSortOrder = (e) => {
    // console.log(e.target.value); 
    this.props.sortOrder(e.target.value);
  }

  render() {
    // localStorage.setItem("currentOrder", JSON.stringify(this.state.order));
    return (
      <>
        <div className="components_background">

          <form onSubmit={this.handleSubmit}>
            <label className='form_label'> {`Numer Zamowienia: `}
              <input className='input_form' onChange={this.handleInputchange} type='text' name='orderName' style={{ width: '350px', marginRight: '20px' }} autoFocus></input>
            </label>
            <label className='form_label'> {`Rodzaj produktu: `}
              <input className='input_form' onChange={this.handleInputchange} type='text' name='idName' style={{ width: '350px' }} value={this.state.orderLine.idName} ></input>
            </label>
            <br />
            <label className='form_label'> Edik Kod  <br />
              <input className='input_form input_form_narrow' onChange={this.handleInputchange} type='text' name='ownCode' value={this.state.orderLine.ownCode}></input>
            </label>
            <label className='form_label'> Kod  <br />
              <input className='input_form input_form_narrow' onChange={this.handleInputchange} type='text' name='code' value={this.state.orderLine.code}></input>
            </label>

            <label className='form_label'>Nazwa  <br />
              <input className='input_form' onChange={this.handleInputchange} type='text' name='name'
                value={this.state.orderLine.name}></input>
            </label>
            <label className='form_label'>Rozmiar  <br />
              <input className='input_form input_form_narrow' onChange={this.handleInputchange} type='text' name='size' value={this.state.orderLine.size}></input>
            </label>
            <label className='form_label'>Ilość  <br />
              <input className='input_form input_form_narrow' onChange={this.handleInputchange} type='text' name='quantity' value={this.state.orderLine.quantity} ></input>
            </label>

            <label className='form_label'>Kolor  <br />
              <input className='input_form' onChange={this.handleInputchange} type='text' name='color' value={this.state.orderLine.color}></input>
            </label>
            <label className='form_label'>Uwagi  <br />
              <input className='input_form' onChange={this.handleInputchange} type='text' name='remarks' value={this.state.orderLine.remarks}></input>
            </label>

            <button type='submit' className='button_addToOrder'>Dodaj do zamówienia</button>
          </form>
          <button onClick={this.handleResetOrder} className='button_resetOrder'>Reset zamówienia</button>

          <label onChange={this.handleProductSelection} className='products_selection'>Pokaż produkty
            <select >
              <option value="wszystkie produkty">wszystkie produkty</option>
              <option value="Spinery Kolekcja 3D Multikolor 12'">Spinery Kolekcja 3D Multikolor 12'</option>
              <option value="Spinery Kolekcja 3D Multikolor 10'">Spinery Kolekcja 3D Multikolor 10'</option>
              <option value="Spinery Kolekcja GB Multikolor 12'">Spinery Kolekcja GB Multikolor 12'</option>
              <option value="Spinery Kolekcja GB Multikolor 10'">Spinery Kolekcja GB Multikolor 10'</option>
              <option value="Spinery Kolekcja GB Jeden Kolor 12'">Spinery Kolekcja GB Jeden Kolor 12'</option>
              <option value="Spinery Kolekcja GB Jeden Kolor 10'">Spinery Kolekcja GB Jeden Kolor 10'</option>
              <option value="Spinery Kolekcja GB Jeden Kolor  7'">Spinery Kolekcja GB Jeden Kolor 7'</option>
              <option value="Spinery Kolekcja 2D Multikolor 15'">Spinery Kolekcja 2D Multikolor 15'</option>
              <option value="Spinery Kolekcja 2D Multikolor 12'">Spinery Kolekcja 2D Multikolor 12'</option>
              <option value="Spinery Kolekcja 2D Multikolor 10'">Spinery Kolekcja 2D Multikolor 10'</option>
              <option value="Spinery Kolekcja 2D Multikolor  6'">Spinery Kolekcja 2D Multikolor  6'</option>
              <option value="Kolekcja Świąteczna">Kolekcja Świąteczna</option>
              <option value="Kolekcja 2D Jeden Kolor 12'">Kolekcja 2D Jeden Kolor 12'</option>
              <option value="Kolekcja 2D Jeden Kolor 10'">Kolekcja 2D Jeden Kolor 10'</option>
              <option value="Kolekcja 2D Jeden Kolor  6'">Kolekcja 2D Jeden Kolor 6'</option>
              <option value="Kolekcja Cristal Twister 25cm">Kolekcja Cristal Twister 25cm</option>
              <option value="Kolekcja Cristal Twister 16cm">Kolekcja Cristal Twister 16cm</option>
              <option value="Kolekcja Spiral Tails">Kolekcja Spiral Tails</option>
              <option value='Akcesoria'>Akcesoria</option>
            </select>
          </label>

          <label className='sortOrder'>
            Sortuj zamówienie wg:
            <br />
            <select name="" id="" onChange={this.handleSortOrder}>
              <option value="None"> Wybierz </option>
              <option value="ownCode">Kod Edik </option>
              <option value="code">Kod</option>
              <option value="name">Nazwa</option>
              <option value="size">Rozmiar</option>
              <option value="color">Kolor</option>
              <option value="idName">Rodzaj produktu</option>
            </select>
          </label>
          <ListOrder handleChangeLine={this.handleChangeLine} />
          <ProductWindow handlePickItem={this.handlePickItem} selection={this.state.productsSelection} />
        </div>

      </>
    );
  }
}

export default MakeOrder;