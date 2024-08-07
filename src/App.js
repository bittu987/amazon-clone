import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home"
import Cart from "./pages/Cart";
import Signin from "./pages/Signin";
import Registration from "./pages/Registration";
import Checkout from "./pages/Checkout";
// import { productsData } from "./api/api";


const Layout =()=>{
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} ></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-[#F5F5F5]">
<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
