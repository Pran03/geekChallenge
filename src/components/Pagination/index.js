import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

import "./index.css";

const Pagination = (props) => {
  const {
    totalPagesCount,
    changePageNumber,
    activePageNumber,
    deleteMultipleUsers,
  } = props;
  const PageNumber = [];

  for (
    let numberOfPages = 1;
    numberOfPages <= totalPagesCount;
    numberOfPages++
  ) {
    PageNumber.push(numberOfPages);
  }

  const decrementPageNumber = () => {
    if (activePageNumber > 1) changePageNumber(activePageNumber - 1);
  };

  const incrementPageNumber = () => {
    if (activePageNumber < totalPagesCount)
      changePageNumber(activePageNumber + 1);
  };

  const onClickingDeleteMultiple = () => {
    deleteMultipleUsers();
  };


  return (
    <nav className="nav-cont">
      <button
        className="delete-button"
        type="button"
        onClick={onClickingDeleteMultiple}
      >
        Delete Selected
      </button>
      <ul className="pagination-cont">
        
        <li className="page-no-item">
          <button
            type="button"
            onClick={decrementPageNumber}
            className="nav-button "
          >
            <AiFillLeftCircle className="icon" />
          </button>
        </li>
        {PageNumber.map((num) => (
          <li key={num} className="page-no-item">
            <button
              type="button"
              className={
                num === activePageNumber ? "page-no active" : "page-no"
              }
            >
              {num}
            </button>
          </li>
        ))}
        <li className="page-no-item">
          <button onClick={incrementPageNumber} className="nav-button">
            <AiFillRightCircle className="icon" />
          </button>
        </li>
        
      </ul>
    </nav>
  );
};

export default Pagination;