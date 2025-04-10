import { Blog } from '@/components/sections/blog';
import Information from '@/components/sections/information';
import { POSTS } from '@/constants';

const CONTENT = {
  badge: 'Featured resource',
  title: 'AAA Knowledge Hub',
  subtitle: 'Unlock R&D Tax Savings.',
  buttonText: 'Download Guide'
};

export default function ResourcesPage() {
  return (
    <>
      <Information {...CONTENT} />
      <Blog posts={POSTS} />
    </>
  );
}
