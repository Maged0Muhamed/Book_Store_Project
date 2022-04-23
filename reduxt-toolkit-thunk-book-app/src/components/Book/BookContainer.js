import React, { Fragment, useEffect } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import "./book.css";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, deleteBook, getBook } from "../../store/bookSlice";

const PostContainer = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const { isLoading, books ,bookInfo} = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList
            isLoading={isLoading}
            books={books}
            isLoggedIn={isLoggedIn}
            deleteBook={deleteBook}
            getBook={getBook}
            dispatch={dispatch}
          />
        </div>
        <div className="col side-line">
          <BookInfo bookInfo={bookInfo} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
