import React from 'react';
import './carros-product-row.style.css';

const CarrosProductRow = (props) => {
    return (
        <div className="carros-product-row-container">

          {
              props.product.stock === 0
              ?
                <span className="product-without-stock">{props.product.name}</span>
              :
                <span>{props.product.name}</span> 
          }
          {''}{''} ${props.product.price}
        </div>
    );    
}

export default CarrosProductRow;