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

  const products2=[
    {
        "id": "41",
        "sku": "JVC200123",
        "name": "Acme DISC",
        "price": "1",
        "size": "700",
        "typeId": "1"
    },
    {
        "id": "42",
        "sku": "GGWP007",
        "name": "War and Peace",
        "price": "20",
        "weight": "2",
        "typeId": "2"
    },
    {
        "id": "43",
        "sku": "TR120555",
        "name": "Chair",
        "price": "40",
        "height": "24",
        "width": "45",
        "length": "15",
        "typeId": "3"
    },
    {
        "id": "45",
        "sku": "SKU1111",
        "name": "name2222",
        "price": "2222",
        "size": "2222",
        "typeId": "1"
    }
]

  useEffect(() => {
   dispatch(listProducts())
  }, []);

  useEffect(() => {
    dispatch(listSelects(toDeleteList));
  }, [toDeleteList]);

  return (
    <Layout  title='Product list' page='list'>
        <div className='products'>
        {products2.map((product) => {
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
