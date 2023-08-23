export interface Pagination {
  currentPage: number;
  endIndex: number;
  endPage: number;
  pages: number[];
  pageSize: number;
  startIndex: number;
  startPage: number;
  totalItems: number;
  totalPages: number;
}

type PaginationVars = {
  currentPage: number;
  maxPagesToShow?: number;
  pageSize?: number;
};
