import React from 'react'

export const ProductList = ({ item, deleteProp }) => {
    const deleteProduct = _ => {
        deleteProp(item)
    }
    return (
        <div>
            {item.name} {item.price} $
            <input type="button" value="Delete" onClick={deleteProduct} />
        </div>
    )
}
