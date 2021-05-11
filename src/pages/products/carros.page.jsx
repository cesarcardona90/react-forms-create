import React, {useState} from 'react';
import OneProductTable from './components/one-product-table/one-product-table.comp'

const ProductsCarrosPage = () =>{



    let productsList = [
            {
                id:"d1",
                name:'Carros Deportivos',
                products:[
                    {
                        id:"d1p1",
                        name:"F8 Spider",
                        price:25000,
                        stock: 3,
                    },
                    {
                        id:"d1p2",
                        name:"812 GTS",
                        price:50000,
                        stock: 2,
                    },
                    {
                        id:"d1p3",
                        name:"Chevrolet Camaro",
                        price:70000,
                        stock:0,
                    },
                    {
                        id:"d1p4",
                        name:"BMW Z8",
                        price:50000,
                        stock:2,
                    }
                ]
            },
            {
                id:"d2",
                name:'Carro Familiar',
                products:[
                    {
                        id:"d2p1",
                        name:"SparK GT",
                        price:5000,
                        stock: 15,
                    },
                    {
                        id:"d2p2",
                        name:"Mazda 3",
                        price:20000,
                        stock: 0,
                    },
                    {
                        id:"d2p3",
                        name:"Gol GT",
                        price:15000,
                        stock:1,
                    },

                ]
            },

    ];  
    
    const[products, setproducts] = useState(productsList);

    

    return (
        <>
            <OneProductTable
                 productsList={products}
                 onAddProduct={(newCarros, categoryId)=>{
                     const newProducts = [];
                     for(let i=0; i<products.length; i++){
                         if(products[i].id !== categoryId){
                             newProducts.push(products[i]);
                         }
                         else{
                            newProducts.push(
                                {
                                    ...products[i],
                                    products:[...products[i].products, newCarros] 
                                }
                                );    
                         }
                         
                     }
                       setproducts(newProducts); 
                 }}
            />
            
        </>
    );    
}

export default ProductsCarrosPage;