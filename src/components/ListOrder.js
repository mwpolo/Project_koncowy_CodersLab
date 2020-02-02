import React from 'react';
import store from '../redux/store'

const ListOrder = ({ order, deleteLine, handleChangeLine }) => {

  const handleDeleteLine = (index) => {
    deleteLine(index);
    localStorage.setItem("lastOrder", JSON.stringify(store.getState()));
  }
  if (order.length) {
    console.log(order[0].orderName);

    return (
      <>

        <h2>
          {order[0].orderName === '' ? 'Brak numeru !' : order[0].orderName}
        </h2>
        <div className="table_window">

          <table className='table'>
            <thead>
              <tr>
                <th>Lp.</th>
                <th>Ekod</th>
                <th>Kod</th>
                <th>Nazwa</th>
                <th>Rozmiar</th>
                <th>Ilość</th>
                <th>Kolor</th>
                <th>Uwagi</th>
              </tr>
            </thead>
            <tbody>
              {order.map((item, index) => (
                <>
                  <tr className='list' key={index}>
                    <td>{index + 1}.</td>
                    <td>{item.ownCode}</td>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>{item.size}</td>
                    <td>{item.quantity}</td>
                    <td>{item.color}</td>
                    <td>{item.remarks}</td>
                    <td><button onClick={() => handleChangeLine(index)} className='button_line_edit'>Zmień</button></td>
                    <td><button onClick={() => handleDeleteLine(index)} className='button_line_delete'>Usuń</button></td>
                  </tr>

                </>
              ))}
            </tbody>
            <tfoot>

            </tfoot>
          </table>
        </div>
      </>

    );
  } else return <></>

}

export default ListOrder;