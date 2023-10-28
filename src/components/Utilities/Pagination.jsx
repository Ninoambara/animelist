const Pagination = ({ setPage, page, lastPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const nextHandler = () => {
    setPage(page + 1);
    scrollTop();
  };

  const prevHandler = () => {
    setPage(page - 1);
    scrollTop();
  };
  return (
    <div className="text-white text-lg font-bold text-center flex justify-center gap-4 m-10">
      <button
    disabled={page === 1 ? true : false}
    className={page === 1 ? "cursor-not-allowed" : "hover:bg-orange-600 transition p-2"}
    onClick={prevHandler}
  >
    Prev
  </button>
      <p className="p-2">
        {page} of {lastPage}
      </p>
      <button className="p-2 hover:bg-orange-600 transition" onClick={nextHandler}>Next</button>
    </div>
  );
};

export default Pagination;
