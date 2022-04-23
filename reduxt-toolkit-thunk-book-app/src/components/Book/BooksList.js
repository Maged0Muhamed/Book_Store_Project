import React from "react";
const BooksList = ({
  isLoading,
  books,
  isLoggedIn,
  deleteBook,
  dispatch,
  getBook,
}) => {
  const bookList =
    books.length > 0
      ? books.map((item) => (
          <li
            className="list-group-item d-flex  justify-content-between align-items-center"
            key={item.id}
          >
            <div>{item.title}</div>
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  dispatch(getBook(item));
                }}
              >
                Read
              </button>
              <button
                type="button"
                className="btn btn-danger"
                disabled={!isLoggedIn}
                onClick={() => {
                  dispatch(deleteBook(item))
                    .unwrap()
                    .then((originalPromiseResult) => {
                      console.log(originalPromiseResult);
                    })
                    .catch((rejectedValue) => {
                      console.log(rejectedValue);
                    });
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      : `There's no books available`;
  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? "Loading..." : <ul className="list-group">{bookList}</ul>}
    </div>
  );
};

export default BooksList;
