import React from 'react'
import { useState } from 'react'

export const ProductForm = ({ addProp }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const addProduct = _ => {
        addProp
            ({
                id: (new Date).getTime(),
                name, price

            })
        setName('');
        setPrice('')
    }
    return (
        <div>
            <h1> Add Product</h1>
            <input type="text" placeholder='Enter Product Name' value={name} onChange={e => {
                setName(e.target.value)
            }} />
            <input type="text" placeholder='Price' value={price} onChange={e => {
                setPrice(e.target.value)
            }} />
            <input type="button" value='Submit' onClick={addProduct} />
        </div>

    )
}
