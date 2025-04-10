import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type Props = {
  title: string;
  subtitle?: string;
  badge?: string;
  buttonText: string;
  date?: string;
  category?: string[];
  image?: string;
};

const Information = ({ title, subtitle, badge, buttonText, date, category, image }: Props) => (
  <div className="grid items-center gap-10 lg:grid-cols-2">
    <div className="flex flex-col gap-4">
      {date && <span className="text-xl text-slate-800">{date}</span>}
      <h1 className="text-3xl font-semibold lg:text-5xl">{title}</h1>
      <div className="flex flex-wrap gap-3">
        {category &&
          category.map((cat) => (
            <Badge
              key={cat}
              className="bg-navy text-white"
            >
              {cat}
            </Badge>
          ))}
      </div>
    </div>
    {image ? (
      <Image
        width={500}
        height={500}
        src={image}
        alt={title}
        className="w-full object-cover object-center rounded-xl"
      />
    ) : (
      <div className="p-8 bg-navy rounded-xl">
        <div className="flex flex-col gap-5">
          {badge && (
            <Badge
              variant="outline"
              className="w-fit bg-white text-navy"
            >
              {badge}
            </Badge>
          )}
          <h2 className="text-3xl font-semibold lg:text-4xl text-white">{subtitle}</h2>
          <Button
            size="lg"
            className="flex items-center justify-center mt-2.5 w-fit gap-2 rounded-md px-4 py-2 text-sm font-medium
                transition-all duration-300 ease-in-out transform
                hover:scale-105 hover:shadow-lg hover:bg-white/90 hover:translate-y-[-2px]
                active:scale-95 active:translate-y-[0] active:bg-white/70
                focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
                bg-white text-navy"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    )}
  </div>
);

export default Information;
