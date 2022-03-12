import { Link } from "react-router-dom";

function ListProduct() {
  return (
    <header>
      <h1>Product list</h1>
      <div>
        <Link to='/add'>
          <button id='add-product-btn'>ADD</button>
        </Link>
        <button id='delete-product-btn'>MASS DELETE</button>
      </div>
    </header>
  );
}

export default ListProduct;
