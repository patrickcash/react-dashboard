import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import EditUser from "./pages/users/EditUser";
import AddUser from "./pages/users/AddUser";
import Products from "./pages/products/Products";
import EditProduct from "./pages/products/EditProduct";
import AddProduct from "./pages/products/AddProduct";

import "./app.css"

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="users" element={<Users/>}/>
          <Route path="user/:userId" element={<EditUser/>}/>
          <Route path="addUser" element={<AddUser/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="product/:productId" element={<EditProduct/>}/>
          <Route path="addProduct" element={<AddProduct/>}/>
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
