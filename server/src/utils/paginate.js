export const paginate = ({
    currentPage = 1,
    maxPagesToShow = 10,
    pageSize = 10,
    totalItems
}) => {
    let totalPages = Math.ceil(totalItems / pageSize);
    let startPage, endPage;

    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    if (totalPages <= maxPagesToShow) {
        startPage = 1;
        endPage = totalPages;
    } else {
        let maxPagesBeforeCurrentPage = Math.ceil(maxPagesToShow / 2);
        let maxPagesAfterCurrentPage = Math.ceil(maxPagesToShow / 2) - 1;

        if (currentPage <= maxPagesBeforeCurrentPage) {
            startPage = 1;
            endPage = maxPagesToShow;
        } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            startPage = totalPages - maxPagesToShow + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    return {
        currentPage,
        endIndex,
        endPage,
        pages,
        pageSize,
        startIndex,
        startPage,
        totalItems,
        totalPages
    }
};
