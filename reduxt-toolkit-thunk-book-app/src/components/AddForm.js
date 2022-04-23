import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { insertBook } from "../store/bookSlice";
const Addform = () => {
  const { isLoggedIn } = useSelector((store) => store.auth);
  //Refs
  const title = useRef(null);
  const price = useRef(null);
  const discription = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title.current.value,
      price: price.current.value,
      discription: discription.current.value,
    };
    dispatch(insertBook(data));
    title.current.value = null;
    price.current.value = null;
    discription.current.value = null;
  };
  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              ref={title}
              type="text"
              className="form-control"
              id="title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              ref={price}
              type="number"
              className="form-control"
              id="price"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              ref={discription}
              className="form-control"
              id="Description"
              rows="3"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isLoggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
