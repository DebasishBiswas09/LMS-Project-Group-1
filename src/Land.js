import App from "./App";
import Home from "./Home";

import About from "./About";

import CustomerList from "./components/CustomerList";
import AddCustomer from "./components/AddCustomer";
import AddBooks from "./components1/AddBooks";
import BookList from "./components1/BookList";
import AddOrd from "./components2/AddOrd";
import OrderList from "./components2/OrderList";
import NotFound from "./components/NotFound";
import Landpg from "./Landpg";
import AddReview from "./component3/AddReview";
import ReviewList from "./component3/ReviewList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import User from "./User";
import Userlogin from "./UserLogin";
import Admin from "./Admin";
import Adminlogin from "./AdminLogin";
function Land() {
  return (
    <div>
      <BrowserRouter>
        <Landpg />
        <Routes>
          {/* Land-Page Home, About */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Land-Page Review */}
          <Route exact path="/review" element={<ReviewList />} />
          <Route path="/add" element={<AddReview />} />
          <Route path="/edit/:id" element={<AddReview />} />

          {/* Land-Page Admin Login*/}
          <Route path="/aloginmv" element={<Adminlogin />} />
          <Route path="/admin" element={<Admin />} />

          {/* Land-Page User Login */}
          <Route path="/uloginmv" element={<Userlogin />} />
          <Route path="/user" element={<User />} />

          {/* Land-Page ShowCustomer */}
          <Route path="/customer" element={<CustomerList />} />
          <Route path="/addc" element={<AddCustomer />} />
          <Route path="/customers/edit/:id" element={<AddCustomer />} />
          {/* Land-Page ShowOrder */}
          <Route exact path="/order" element={<OrderList />} />
          <Route path="/addo" element={<AddOrd />} />
          <Route path="/orders/edit/:id" element={<AddOrd />} />
          {/* Land-Page ShowBook */}
          <Route exact path="/book" element={<BookList />} />
          <Route path="/addb" element={<AddBooks />} />
          <Route path="/books/edit/:id" element={<AddBooks />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Land;