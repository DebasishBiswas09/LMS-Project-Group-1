import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./NotFound";
import BookList from "./BookList";
import AddBooks from "./AddBooks";

function Book() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes>
            <Route exact path="/" element={<BookList />} />
            <Route path="/add" element={<AddBooks />} />
            <Route path="/books/edit/:id" element={<AddBooks />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Book;
