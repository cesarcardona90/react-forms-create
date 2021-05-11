import React from 'react';
import './carros-category-row.style.css';

const CarrosCategoryRow = (props) => {
    return (
        <div className="carros-category-row-container">
          {props.categoryName}  
        </div>
    );    
}

export default CarrosCategoryRow;