import { Blog } from '@/components/blog';
import Information from '@/components/information';
import { POSTS } from '@/constants';

const CONTENT = {
  badge: 'Featured resource',
  title: 'AAA Knowledge Hub',
  subtitle: 'Unlock R&D Tax Savings.',
  buttonText: 'Download Guide'
};

export default function ResourcesPage() {
  return (
    <div className="pt-[9.5rem] lg:pt-[12.5rem]">
      <div className="max-w-full md:max-w-2xl lg:max-w-7xl mx-auto px-5">
        <Information {...CONTENT} />
        <Blog posts={POSTS} />
      </div>
    </div>
  );
}
