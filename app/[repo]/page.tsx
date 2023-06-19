import PullRequest from '@/components/PullRequest';
import { getRepoPR } from '@/lib/api';
import repos from '@/repos';

const RepoPage = async ({ params }: { params: { repo: string } }) => {
  const { repo } = params;
  const foundRepo = repos.find((item) => item.name === repo);
  if (!foundRepo) {
    return '404';
  }
  const data = await getRepoPR(foundRepo.fullname);
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

export default RepoPage;
export const revalidate = 60;
