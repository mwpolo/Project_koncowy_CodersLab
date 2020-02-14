import React from 'react';
// import '../style/ProductWindow.css';
import itemsData from './ItemsData'

const ProductWindow = (props) => {
  let itemsDataFiltered;
  if (props.selection === 'wszystkie produkty') {
    itemsDataFiltered = itemsData;
  } else {
    itemsDataFiltered = itemsData.filter(line => line.idName === props.selection);
  }


  return (

    <div className="graphics_window">

      {itemsDataFiltered.map((item, index) => {
        if (item.dataCode) {
          return (
            <div key={index} className='mini'
              onClick={props.handlePickItem}>
              <img src={item.imgSource} alt={item.dataName}
                data-owncode={item.dataOwncode} data-code={item.dataCode} data-name={item.dataName} data-itemsize={item.dataItemsize} data-itemcolor={item.dataItemcolor} data-quantity='' data-remarks={item.dataRemarks} data-idname={item.idName} />
              <span>{item.dataName} {item.dataItemcolor} {item.dataRemarks}</span>
            </div>
          )
        } else {
          return (
            <>
              <h2 key={index} style={{ width: '100%', textAlign: 'center', fontSize: '28px', padding: '10px' }}>{item.idName}</h2>
              <br />
            </>
          )
        }
      })}

    </div>
  );
}

export default ProductWindow;