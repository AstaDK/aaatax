'use client';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

type FilterTypeProps = {
  value: string;
  onChange: (value: string) => void;
};

const options = [
  { value: 'all', label: 'All Types' },
  { value: 'article', label: 'Article' },
  { value: 'tutorial', label: 'Tutorial' },
  { value: 'news', label: 'News' }
];

export const FilterType = ({ value, onChange }: FilterTypeProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <select
          id="filter-type"
          name="filter-type"
          aria-label="Filter by content type"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            'cursor-pointer appearance-none rounded-lg border border-gray-300 py-2 pl-3 pr-10 text-sm text-gray-900 bg-white',
            'hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200'
          )}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-gray-900"
            >
              {option.label}
            </option>
          ))}
        </select>
        {/* Custom Arrow */}
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
      </div>
    </div>
  );
};
