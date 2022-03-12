import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProduct,
  listProducts,
} from "../../redux/actions/productActions";

function ListPageButtonGroup() {
  const selectList = useSelector((state) => state.selectList);
  const { selects } = selectList;

  const dispatch = useDispatch();

  const massDelete = async () => {
    await dispatch(deleteProduct(selects)).then(() => dispatch(listProducts()));
  };
  return (
    <div>
      <button type="submit" id='add-product-btn'><Link to="/addproduct">ADD</Link></button>
      <button id='delete-product-btn' onClick={massDelete}>MASS DELETE</button>
    </div>
  );
}
export default ListPageButtonGroup;
