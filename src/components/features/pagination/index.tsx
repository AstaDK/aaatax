import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';
import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

export const PaginationComponent = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange
}: PaginationProps) => {
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
    <div className="mx-auto flex max-w-full flex-col items-center gap-4 pt-8 md:flex-row md:justify-between">
      <div className="text-sm text-gray-800">
        Showing {startIndex} to {endIndex} of {totalItems} posts
      </div>

      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage - 1);
            }}
            className={cn(currentPage === 1 && 'pointer-events-none opacity-80')}
          />
        </PaginationItem>

        {totalPages <= 5 ? (
          Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page);
                }}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))
        ) : (
          <>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(1);
                }}
                isActive={currentPage === 1}
              >
                1
              </PaginationLink>
            </PaginationItem>

            {currentPage > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {(currentPage <= 3
              ? [2, 3]
              : currentPage >= totalPages - 2
                ? [totalPages - 2, totalPages - 1]
                : [currentPage - 1, currentPage, currentPage + 1]
            ).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page);
                  }}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {currentPage < totalPages - 2 && totalPages > 5 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {totalPages > 1 && (
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(totalPages);
                  }}
                  isActive={currentPage === totalPages}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            )}
          </>
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(currentPage + 1);
            }}
            className={cn(currentPage === totalPages && 'pointer-events-none opacity-50')}
          />
        </PaginationItem>
      </PaginationContent>
    </div>
  );
};
