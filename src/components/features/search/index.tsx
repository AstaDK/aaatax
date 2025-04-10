'use client';

import { cn } from '@/lib/utils';
import { SearchIcon } from 'lucide-react';

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const SearchInput = ({ value, onChange, placeholder = 'Search posts...' }: SearchInputProps) => {
  return (
    <div className="relative w-full sm:w-80">
      <label
        htmlFor="search"
        className="sr-only"
      >
        {placeholder}
      </label>
      <input
        id="search"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className={cn(
          'w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy',
          value ? 'text-gray-900' : 'text-gray-500'
        )}
      />
      <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
    </div>
  );
};
