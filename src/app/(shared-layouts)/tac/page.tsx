import Information from '@/components/sections/information';
import TAC from '@/components/sections/tac';

const CONTENT = {
  badge: 'Terms and Conditions',
  title: 'Terms and Conditions',
  subtitle: 'Website terms and conditions'
};

export default function ResourcesPage() {
  return (
    <>
      <Information {...CONTENT} />
      <TAC />
    </>
  );
}
