import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProducts } from "../redux/actions/productActions";
import {listSelects} from "../redux/actions/selectActions"

import Layout from "./layout/Layout";
import Product from "./Product";

function ListProduct() {
  const [toDeleteList, setToDeleteList] = useState([]);
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  useEffect(() => {
    dispatch(listSelects(toDeleteList));
  }, [toDeleteList]);
  return (
    <Layout  title='Product list' page='list'>
        <div className='products'>
        {products.map((product) => {
          return (
             <Product
             key={product.sku}
                product={product}
                toDeleteList={toDeleteList}
                setToDeleteList={setToDeleteList}
              />  
          );
        })} 
      </div> 
    </Layout>
  );
}

export default ListProduct;
