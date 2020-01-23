import React from 'react';

const ListOrder = ({ order, handleDelete, handleLineChange }) => {
  console.log(order);

  if (order.length) {
    console.log(order[0].orderName);
    return (
      <>

        <h2>Numer Zamówienia:  {order[0].orderName === '' ? 'Brak numeru zamówienia' : order[0].orderName} </h2>
        <table className='table'>
          <thead>
            <tr>
              <th>Lp.</th>
              <th>Kod</th>
              <th>Nazwa</th>
              <th>Rozmiar</th>
              <th>Ilość</th>
              <th>Kolor</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item, index) => (
              <>
                <tr className='list' key={index}>
                  <td>{index + 1}.</td>
                  <td>{item.code}</td>
                  <td>{item.name}</td>
                  <td>{item.size}</td>
                  <td>{item.quantity}</td>
                  <td>{item.color}</td>
                  <td><button onClick={() => handleLineChange(index)} className='button_line_edit'>Zmień</button></td>
                  <td><button onClick={() => handleDelete(index)} className='button_line_delete'>Usuń</button></td>
                </tr>

              </>
            ))}
          </tbody>
          <tfoot>

          </tfoot>
        </table>

      </>

    );
  } else return <></>

}

export default ListOrder;