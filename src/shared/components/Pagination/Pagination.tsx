import type { FC } from 'react';

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}

const getPages = (page: number, total: number) => {
  const pages: number[] = [];
  pages.push(1);
  if (page > 4) pages.push(-1);
  for (let i = page - 2; i <= page + 2; i++) {
    if (i > 1 && i < total) pages.push(i);
  }
  if (page < total - 3) pages.push(-2);
  if (total > 1) pages.push(total);
  return pages;
};

const Pagination: FC<Props> = ({ page, totalPages, onPageChange }) => {
  const pages = getPages(page, totalPages);

  return (
    <div className="flex gap-2 mt-4">
      <button disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        Prev
      </button>
      {pages.map((p, i) =>
        p < 0 ? (
          <span key={i}>...</span>
        ) : (
          <button
            key={i}
            onClick={() => onPageChange(p)}
            className={p === page ? 'bg-black text-white px-2' : 'px-2'}
          >
            {p}
          </button>
        )
      )}
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
