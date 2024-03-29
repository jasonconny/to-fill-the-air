import React from 'react';
import styles from './PaginationView.scss';

interface PaginationProps {
  currentPage: number;
  handlePaginationClick: (page: number) => void;
  pages: number[];
  totalPages: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  handlePaginationClick,
  pages,
  totalPages,
}) => (
  <ul className={styles.list}>
    {currentPage > 1 && (
      <li className={styles.listItem}>
        <button onClick={() => handlePaginationClick(currentPage - 1)}>
          previous
        </button>
      </li>
    )}

    {pages.map((page: number, index: number) => (
      <li className={styles.listItem} key={index}>
        <button onClick={() => handlePaginationClick(page)}>{page}</button>
      </li>
    ))}

    {currentPage < totalPages && (
      <li className={styles.listItem}>
        <button onClick={() => handlePaginationClick(currentPage + 1)}>
          next
        </button>
      </li>
    )}
  </ul>
);
