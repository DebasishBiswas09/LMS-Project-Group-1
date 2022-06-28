import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "../components/NotFound";
import ReviewList from "./ReviewList";
import AddReview from "./AddReview";
import reviewService from "../services/review.service";

function Review() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes>
            <Route exact path="/review" element={<ReviewList />} />
            <Route path="/add" element={<AddReview />} />
            <Route path="/reviews/edit/:id" element={<AddReview />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    // <h1>Hello</h1>
  );
}

export default Review;
