import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./App.css";
import ListProduct from "./components/ListProduct";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListProduct />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
