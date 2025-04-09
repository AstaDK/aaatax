import Help from '@/components/help';
import Information from '@/components/information';
import { TOC } from '@/components/table-of-content';
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

export default function BlogDetailPage() {
  return (
    <div className="flex flex-col">
      <Information {...CONTENT} />

      <div className="py-14 md:py-16 lg:py-24">
        <div className="grid lg:grid-cols-3 lg:gap-10">
          <div className="hidden lg:block">
            <TOC sections={POSTS[0]?.content ?? []} />
          </div>
          <div className="col-span-2">
            <div className="space-y-8 mb-6">
              {POSTS[0]?.content?.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="space-y-4"
                >
                  <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
                  <p className="text-gray-600">{section.body}</p>
                </section>
              ))}
            </div>
            <Help />
          </div>
        </div>
      </div>
    </div>
  );
}
