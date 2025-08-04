const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="pagination">
      {page !== 1 && page !== 2 && (
        <>
          <button onClick={() => setPage(1)}>{1}</button>
          <span>...</span>
        </>
      )}
      {page - 1 > 0 && (
        <button onClick={() => setPage(page - 1)}>{page - 1}</button>
      )}
      <button disabled>{page}</button>
      {page + 1 <= totalPages && (
        <button onClick={() => setPage(page + 1)}>{page + 1}</button>
      )}
    </div>
  );
};

export default Pagination;
