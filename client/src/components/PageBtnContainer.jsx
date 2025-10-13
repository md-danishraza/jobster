import React from "react";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useSelector, useDispatch } from "react-redux";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { changePage } from "../state/features/allJobsSlice";
function PageBtnContainer() {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  // array of page numbers starting from 1
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const visiblePages = getPagination(page, numOfPages);

  //   cycle back to 1 and last page
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };
  return (
    <Wrapper>
      {/* prev button */}
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      {/* page numbers btns */}
      {/* <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}
              key={pageNumber}
              //   go to that page
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
      </div> */}

      <div className="btn-container">
        {visiblePages.map((item, index) => {
          if (item === "...") {
            return (
              <span key={`ellipsis-${index}`} className="pageBtn dots">
                ...
              </span>
            );
          }

          return (
            <button
              type="button"
              className={item === page ? "pageBtn active" : "pageBtn"}
              key={item}
              onClick={() => dispatch(changePage(item))}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* next button */}
      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
}

export default PageBtnContainer;

const getPagination = (current, total) => {
  const pages = new Set();

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.add(i);
    return Array.from(pages);
  }

  pages.add(1); // First

  if (current > 3) pages.add("...");

  if (current > 2) pages.add(current - 1);
  pages.add(current);
  if (current < total - 1) pages.add(current + 1);

  if (current < total - 2) pages.add("...");

  pages.add(total); // Last

  return Array.from(pages);
};
