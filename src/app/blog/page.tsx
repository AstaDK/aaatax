import { Blog } from '@/components/blog';
import Information from '@/components/information';
import { POSTS } from '@/constants';

const CONTENT = {
  badge: 'Featured resource',
  title: 'AAA Knowledge Hub',
  subtitle: 'Unlock R&D Tax Savings.',
  buttonText: 'Download Guide',
  date: 'April 9, 2025',
  category: ['Featured', 'Tax'],
  image: '/gavel.webp'
};

export default function BlogPage() {
  return (
    <>
      <Information {...CONTENT} />
      <Blog posts={POSTS} />
    </>
  );
}
