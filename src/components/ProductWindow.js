import React from 'react';
import '../style/ProductWindow.css'

const ProductWindow = (props) => {
  return (
    <div className="graphics_window">
      <div onClick={props.handlePickSpinner} className='mini' >
        <img src="./mini_spinners/Mini ED200 Traktor.jpg" alt="traktor" data-code='ED200' data-name='Traktor' />
        <span>Traktor</span>
      </div>
      <div onClick={props.handlePickSpinner} className='mini'>
        <img src="./mini_spinners/Mini ED201 Żaglówka.jpg" alt="żaglówka" data-code='ED201' data-name='Żaglówka' />
        <span>Żaglówka</span>
      </div>
      <div onClick={props.handlePickSpinner} className='mini'>
        <img src="./mini_spinners/Mini ED202 Latarnia 2.jpg" alt="latarnia" data-code='ED202' data-name='Latarnia' />
        <span>Latarnia</span>
      </div>
      <div onClick={props.handlePickSpinner} className='mini'>
        <img src="./mini_spinners/Mini ED203 Jeleń.jpg" alt="jeleń" data-code='ED203' data-name='Jeleń' />
        <span>Jeleń</span>
      </div>
      <div onClick={props.handlePickSpinner} className='mini'>
        <img src="./mini_spinners/Mini ED204_10 MixSplash.jpg" alt="mixSplash" data-code='ED204' data-name='MixSplash' />
        <span>MixSplash</span>
      </div>
    </div>
  );
}

export default ProductWindow;