import React from 'react';

const ListOrderForPrint = ({ order }) => {
  // console.log(order);

  if (order.length > 0) {
    // console.log(order[0].orderName);

    return (
      <>

        <h2>
          {order[0].orderName === '' ? 'Brak numeru zamówienia' : order[0].orderName}
        </h2>
        <div >
          <br />

          <table className='tableToPrint'>
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

export default ListOrderForPrint;