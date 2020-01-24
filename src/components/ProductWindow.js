import React from 'react';
import '../style/ProductWindow.css'

const ProductWindow = (props) => {
  return (
    <div className="graphics_window">
      <h2 style={{ width: '100%', textAlign: 'center' }}>Spinery Multikolor 10'</h2>
      <br />

      <div onClick={props.handlePickItem} className='mini' >
        <img src="./mini_spinners/Mini ED200 Traktor.jpg" alt="traktor" data-owncode='3041' data-code='ED200' data-name='Traktor' data-itemsize='10' data-itemcolor='Multikolor' data-quantity='' data-remarks='' />
        <span>Traktor</span>
      </div>

      <div onClick={props.handlePickItem} className='mini'>
        <img src="./mini_spinners/Mini ED201 Żaglówka.jpg" alt="żaglówka" data-owncode='3042' data-code='ED201' data-name='Żaglówka' data-itemsize='10' data-itemcolor='Multikolor' data-quantity='' data-remarks='' />
        <span>Żaglówka</span>
      </div>

      <div onClick={props.handlePickItem} className='mini'>
        <img src="./mini_spinners/Mini ED202 Latarnia 2.jpg" alt="latarnia" data-owncode='3043' data-code='ED202' data-name='Latarnia' data-itemsize='10' data-itemcolor='Multikolor' data-quantity='' data-remarks='' />
        <span>Latarnia</span>
      </div>

      <div onClick={props.handlePickItem} className='mini'>
        <img src="./mini_spinners/Mini ED203 Jeleń.jpg" alt="jeleń" data-owncode='3044' data-code='ED203' data-name='Jeleń' data-itemsize='10' data-itemcolor='Multikolor' data-quantity='' data-remarks='' />
        <span>Jeleń</span>
      </div>

      <div onClick={props.handlePickItem} className='mini'>
        <img src="./mini_spinners/Mini ED204_10 MixSplash.jpg" alt="mixSplash" data-owncode='3045' data-code='ED204' data-name='MixSplash' data-itemsize='10' data-itemcolor='Multikolor' data-quantity='' data-remarks='' />
        <span>MixSplash</span>
      </div>

      <div onClick={props.handlePickItem} className='mini'>
        <img src='./mini_spinners/Mini ED205 Ptaszek.jpg' alt="ptaszek" data-owncode='3047' data-code='ED205' data-name='Ptaszek' data-itemsize='10' data-itemcolor='Multikolor' data-quantity='' data-remarks='' />
        <span>Ptaszek</span>
      </div>

      <div onClick={props.handlePickItem} className='mini'>
        <img src='./mini_spinners/Mini ED206 Super Sun.jpg' alt="SuperSun" data-owncode='3046' data-code='ED206' data-name='SuperSun' data-itemsize='10' data-itemcolor='Multikolor' data-quantity='' data-remarks='' />
        <span>SuperSun</span>
      </div>

      {/* ************************************************************************************* */}
      <h2 style={{ width: '100%', textAlign: 'center' }}>Spinery Multikolor 6'</h2>
      <br />

      <div onClick={props.handlePickItem} className='mini' >
        <img src="./mini_spinners/Mini ED200 Traktor.jpg" alt="traktor" data-owncode='3041' data-code='ED200' data-name='Traktor' data-itemsize='6' data-itemcolor='Multikolor' data-quantity='' data-remarks='' />
        <span>Traktor</span>
      </div>

      <div onClick={props.handlePickItem} className='mini'>
        <img src="./mini_spinners/Mini ED201 Żaglówka.jpg" alt="żaglówka" data-owncode='3042' data-code='ED201' data-name='Żaglówka' data-itemsize='6' data-itemcolor='Multikolor' data-quantity='' data-remarks='' />
        <span>Żaglówka</span>
      </div>

      <div onClick={props.handlePickItem} className='mini'>
        <img src="./mini_spinners/Mini ED202 Latarnia 2.jpg" alt="latarnia" data-owncode='3043' data-code='ED202' data-name='Latarnia' data-itemsize='6' data-itemcolor='Multikolor' data-quantity='' data-remarks='' />
        <span>Latarnia</span>
      </div>

      <div onClick={props.handlePickItem} className='mini'>
        <img src="./mini_spinners/Mini ED203 Jeleń.jpg" alt="jeleń" data-owncode='3044' data-code='ED203' data-name='Jeleń' data-itemsize='6' data-itemcolor='Multikolor' data-quantity='' data-remarks='' />
        <span>Jeleń</span>
      </div>

      <div onClick={props.handlePickItem} className='mini'>
        <img src="./mini_spinners/Mini ED204_10 MixSplash.jpg" alt="mixSplash" data-owncode='3045' data-code='ED204' data-name='MixSplash' data-itemsize='6' data-itemcolor='Multikolor' data-quantity='' data-remarks='' />
        <span>MixSplash</span>
      </div>

      <div onClick={props.handlePickItem} className='mini'>
        <img src='./mini_spinners/Mini ED205 Ptaszek.jpg' alt="ptaszek" data-owncode='3047' data-code='ED205' data-name='Ptaszek' data-itemsize='6' data-itemcolor='Multikolor' data-quantity='' data-remarks='' />
        <span>Ptaszek</span>
      </div>

      <div onClick={props.handlePickItem} className='mini'>
        <img src='./mini_spinners/Mini ED206 Super Sun.jpg' alt="SuperSun" data-owncode='3046' data-code='ED206' data-name='SuperSun' data-itemsize='6' data-itemcolor='Multikolor' data-quantity='' data-remarks='' />
        <span>SuperSun</span>
      </div>
    </div>
  );
}

export default ProductWindow;