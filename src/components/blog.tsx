'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './card/card';
import { FilterType } from './filter/filter';
import { Pagination } from './pagination/pagination';
import { SearchInput } from './search/search';

interface BlogProps {
  posts: {
    id: string;
    title: string;
    summary: string;
    image: string;
  }[];
}

export const Blog = ({ posts }: BlogProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState('all');
  const postsPerPage = 3;

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [posts, searchTerm]);

  const { totalPosts, totalPages, currentPosts } = useMemo(() => {
    const totalPosts = filteredPosts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = filteredPosts.slice(startIndex, endIndex);

    return {
      totalPosts,
      totalPages,
      startIndex,
      endIndex,
      currentPosts
    };
  }, [filteredPosts, currentPage, postsPerPage]);

  return (
    <section className="pt-14 md:pt-16 lg:pt-24">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchInput
          value={searchTerm}
          onChange={setSearchTerm}
        />
        <FilterType
          value={filterType}
          onChange={setFilterType}
        />
      </div>

      {currentPosts.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => (
            <Card
              key={post.id}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] w-full">
                <Link href={`/blog/${post.id}`}>
                  <Image
                    width={1920}
                    height={1080}
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              </div>

              <CardHeader className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900 md:text-xl">
                  <Link
                    href={`/blog/${post.id}`}
                    className="hover:underline focus:outline-none"
                  >
                    {post.title}
                  </Link>
                </h3>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="line-clamp-3 text-sm text-gray-600">{post.summary}</p>
              </CardContent>

              <CardFooter className="border-t border-gray-100 px-6 py-4">
                <Link
                  href={`/blog/${post.id}`}
                  className="flex items-center text-sm font-medium text-navy transition-colors duration-200 hover:text-navy focus:outline-none"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No posts found.</p>
        </div>
      )}

      {totalPosts > postsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalPosts}
          itemsPerPage={postsPerPage}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  );
};
