import { Link } from "react-router-dom";

function AddProduct() {
  return (
    <header>
      <h1>Add Product</h1>
      <div>
        <Link to='/add'>
          <button id='save-product-btn'>Save</button>
        </Link>
        <button id='cancel-product-btn'>Cancel</button>
      </div>
    </header>
  );
}

export default AddProduct;
