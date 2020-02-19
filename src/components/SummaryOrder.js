import React, { Component } from 'react';
import store from '../redux/store';
class SummaryOrder extends Component {
  state = {}

  handlePrint = () => {
    window.print()
  }
  render() {
    let sortedOrder = [...store.getState().order]
    sortedOrder.sort((a, b) => a.idName.localeCompare(b.idName));
    sortedOrder.forEach((item, i) => {
      // console.log(i, item.idName);
    });
    // console.log(sortedOrder);

    let summaryArray = []; // tablica zawierająca podsumowanie zamówienia
    let itemKind;
    sortedOrder.forEach(item => {
      if (itemKind !== item.idName) {
        // console.log(item.idName);
        itemKind = item.idName;
        summaryArray.push({ idName: itemKind, lines: 0, itemsCount: 0 })
      }
    })
    summaryArray = summaryArray.map((summaryItem) => {
      sortedOrder.forEach(sortedItem => {
        if (summaryItem.idName === sortedItem.idName) {
          summaryItem.lines++;
          summaryItem.itemsCount += parseInt(sortedItem.quantity);
        }
      })
      return summaryItem
    })




    return (
      <>
        <button className='button_print' onClick={this.handlePrint}>Drukuj podsumowanie</button>
        <div className="printSummary">

          <h2>
            {sortedOrder.length === 0 ? 'Brak numeru zamówienia' : sortedOrder[0].orderName}
          </h2>


          {summaryArray.map((summaryItem, index) => (
            <div key={index}>
              <span>{summaryItem.idName}</span>
              <span>Ilość pozycji: {summaryItem.lines} ;</span>
              <span>Łączna ilość produktów: {summaryItem.itemsCount} szt.</span>

              <table className='tableToPrint'>
                <thead>
                  <tr>
                    <th style={{ width: "30px" }}>Lp.</th>
                    <th style={{ width: "42px" }}>Ekod</th>
                    <th style={{ width: "75px" }}>Kod</th>
                    <th style={{ width: "180px" }}>Nazwa</th>
                    <th style={{ width: "70px" }}>Rozmiar</th>
                    <th style={{ width: "40px" }}>Ilość</th>
                    <th style={{ width: "115px" }}>Kolor</th>
                    <th style={{ width: "130px" }}>Uwagi</th>
                  </tr>
                </thead>
                <tbody>

                  {sortedOrder.map((sortedItem, index) => {

                    if (summaryItem.idName === sortedItem.idName) {

                      return (
                        <>
                          <tr className='list' key={index}>
                            <td>{index + 1}.</td>
                            <td>{sortedItem.ownCode}</td>
                            <td>{sortedItem.code}</td>
                            <td>{sortedItem.name}</td>
                            <td>{sortedItem.size}</td>
                            <td>{sortedItem.quantity}</td>
                            <td>{sortedItem.color}</td>
                            <td>{sortedItem.remarks}</td>
                          </tr>

                        </>
                      )
                    }
                    return (<></>)
                  })}
                </tbody>
                <tfoot>
                </tfoot>
              </table>
              <br />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default SummaryOrder;