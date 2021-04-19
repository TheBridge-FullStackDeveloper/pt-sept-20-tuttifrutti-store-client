import './styles.scss';

export default function Pagination({
  productsPerPage,
  totalProducts,
  paginate
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination pagination__nav">
      <ul className="pagination pagination__list">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination pagination--item">
            <span
              onClick={() => paginate(number)}
              className="pagination pagination__pageLink paginaton--hover pagination--visited"
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
