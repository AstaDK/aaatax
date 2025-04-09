import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { Button } from '../button/button';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({ currentPage, totalPages, totalItems, itemsPerPage, onPageChange }: PaginationProps) => {
  const startIndex = React.useMemo(() => (currentPage - 1) * itemsPerPage + 1, [currentPage, itemsPerPage]);
  const endIndex = React.useMemo(
    () => Math.min(currentPage * itemsPerPage, totalItems),
    [currentPage, itemsPerPage, totalItems]
  );

  const handlePageChange = React.useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    },
    [totalPages, onPageChange]
  );

  return (
    <div className="flex flex-col items-center gap-4 pt-8 md:flex-row md:justify-between">
      <div className="text-sm text-gray-800">
        Showing {startIndex} to {endIndex} of {totalItems} posts
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant="outline"
          className="inline-flex items-center rounded-lg border border-gray-300 px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 md:px-3 md:py-2"
        >
          <ChevronLeft className="mr-1 h-4 w-4 md:h-5 md:w-5" />
          Previous
        </Button>

        <div className="flex flex-wrap gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              onClick={() => handlePageChange(page)}
              variant="outline"
              className={cn(
                `rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-navy`,
                {
                  'bg-navy text-white': currentPage === page,
                  'border border-gray-300 text-slate-700 hover:bg-gray-100': currentPage !== page
                }
              )}
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="outline"
          className="inline-flex items-center rounded-lg border border-gray-300 px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 md:px-3 md:py-2"
        >
          Next
          <ChevronRight className="ml-1 h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </div>
    </div>
  );
};
