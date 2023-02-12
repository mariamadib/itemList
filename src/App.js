import { useState } from 'react';
import { ProductForm } from './component/ProductForm';
import './App.css';
import { ProductList } from './model/ProductList';


function App() {
  const [products, setProducts] = useState([]);
  // const itemList = [

  //   { name: "Tomatoes", value: 5.0 },
  //   { name: "Basil", value: 2.5 },
  //   { name: "Mozerella", value: 9.99 },
  // ]
  const addProduct = product => {
    setProducts([...products, product]);
    alert(`${product.name} is added`)
  }
  const deleteProduct = product => {
    setProducts(products.filter(productItem =>
      productItem.id !== product.id))
    alert(`${product.name} is deletd`)
  }

  return (
    <div className="App">

      <ProductForm addProp={addProduct} />
      {
        products.map(product => <ProductList key={product.id} item={product} deleteProp={deleteProduct} />)
      }
      {/* {itemList && itemList.map((item) => (
        <div>
          {item.name}  {item.value} $
        </div>
      ))} */}
    </div>
  );
}

export default App;
