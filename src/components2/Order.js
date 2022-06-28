import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./NotFound";
import OrderList from "./OrderList";
import AddOrd from "./AddOrd";

function Order() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes>
            <Route exact path="/" element={<OrderList />} />
            <Route path="/add" element={<AddOrd />} />
            <Route path="/orders/edit/:id" element={<AddOrd />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Order;
