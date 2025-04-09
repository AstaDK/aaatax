'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface TOCProps {
  sections: { id: string; title: string }[];
}

export const TOC = ({ sections }: TOCProps) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -50% 0px', threshold: 0.1 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  return (
    <div className="sticky top-24">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <p className="text-lg font-semibold text-gray-900 mb-4">On this page</p>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li
              key={section.id}
              className="relative"
            >
              <span
                className={cn(
                  'absolute left-0 top-0 h-full w-0.5 rounded-full bg-navy transition-all duration-300 ease-in-out transform',
                  {
                    'scale-x-100': activeSection === section.id,
                    'scale-x-0': activeSection !== section.id
                  }
                )}
              />
              <Link
                href={`#${section.id}`}
                className={cn(`block text-sm transition-all duration-300 ease-in-out transform pl-4`, {
                  'text-slate-900 font-medium translate-x-0.5': activeSection === section.id,
                  'text-slate-600 hover:text-slate-900 hover:scale-105 translate-x-0': activeSection !== section.id
                })}
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
