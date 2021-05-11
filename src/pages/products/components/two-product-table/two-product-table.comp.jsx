import React, { useState } from 'react';
import CarrosCategoryRow from '../carros-category-row/carros-category-row.comp';
import CarrosProductRow from '../carros-product-row/carros-product-row.comp';
import './two-product-table.style.css';


const TwoProductTable =(props) =>{

    const[category, setCategory]= useState('d1');
    const[name, setName]= useState('');
    const[price, setPrice]= useState(0);
    const[stock, setStock]= useState(0);
    
    
    
    
    const addProduct=(event)=>{
    event.preventDefault();
    const newProduct ={
            id:name,
            name:name,
            price:parseFloat(price),
            stock:parseFloat(stock),
        };
        props.onAddProduct(newProduct, category);
        
    }


    return (
        <div className="two-product-table-container">
            <div>

            {props.productsList.map((category, index)=>{
                return (
                     <React.Fragment key={category.id}>
                        <CarrosCategoryRow categoryName={category.name}/>
                        {category.products.map((product, indexProduct)=>{
                            return(
                                <CarrosProductRow 
                                key={product.id} 
                                product={product}/>    
                            );

                        })}
                     </React.Fragment>
                );
            })}
            </div>
            <div className="products-form"> 
                <form>
                    <table>
                        <thead>
                            <tr>
                                <th>Carro</th>
                                
                               <th>Nombre del carro</th>
                               <th>Precio</th> 
                                <th>Disponibilidad</th>
                                <th>Agregar Carro</th>
                            </tr>
                        </thead>
                        <tbody>
                                    <tr>
                                <td>
                                    <select
                                        value={category}
                                        onChange={(event)=>{
                                            setCategory(event.target.value);
                                        }}
                                    >
                                        <option value="d1">Deportivos</option>
                                        <option value="d2">Familiares</option>
                                    
                                        
                                    </select>
                                </td>
                                
                                <td>
                                    <input
                                        type="text"
                                        value={name} 
                                        onChange={(event)=>{
                                         setName(event.target.value);
                                        }}
                                    />
                                </td>
                                
                            
                                <td>
                                    <input
                                        type="number"
                                        value={price} 
                                        onChange={(event)=>{
                                         setPrice(event.target.value);
                                        }}
                                    />
                                </td>    
                                <td>
                                    <input
                                        type="number"
                                        value={stock} 
                                        onChange={(event)=>{
                                         setStock(event.target.value);
                                        }}
                                    />
                                </td>
                                    <td>
                                        <button
                                            onClick={addProduct}
                                        >
                                            Agregar Carro
                                        </button>

                                    </td>
                            </tr>

                                
                        </tbody>
                    </table>
                     
                </form>
            </div>

            <div className="products-form"> 
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                     Carros
                                </td>
                            
                            </tr>
                            <tr>
                                <td>
                                    <select
                                        value={category}
                                        onChange={(event)=>{
                                            setCategory(event.target.value);
                                        }}
                                    >
                                        
                                        <option value="d2">Familiares</option>
                                        <option value="d1">deportivo</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Nombre del Carro</td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        value={name} 
                                        onChange={(event)=>{
                                         setName(event.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Precio</td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="number"
                                        value={price} 
                                        onChange={(event)=>{
                                         setPrice(event.target.value);
                                        }}
                                    />
                                </td>    
                            </tr>
                            <tr>
                                <td>Disponibilidad</td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        type="number"
                                        value={stock} 
                                        onChange={(event)=>{
                                         setStock(event.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                                <tr>
                                    <td>
                                        <button
                                            onClick={addProduct}
                                        >
                                            Agregar Carro
                                        </button>

                                    </td>
                            
                                </tr>
                        </tbody>
                    </table>
                     
                </form>
            </div>
        </div>
    );    

    
}

export default TwoProductTable;