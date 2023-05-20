import PullRequest from '@/components/PullRequest';
import { getAllPR } from '@/lib/api';

const HomePage = async () => {
  const data = await getAllPR();
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {
        data.map((pr) => (
          <PullRequest pr={pr} key={pr.id} />
        ))
      }
    </div>
  );
};

export default HomePage;
export const revalidate = 60;
