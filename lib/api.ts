import { pullRequestType } from '@/types/api';
import repos from '@/repos';
import { orderBy } from 'lodash';
import pLimit from 'p-limit';

export const getAllPR = async ({ ignoreDependabot = true }: { ignoreDependabot?: boolean } = {}): Promise<pullRequestType[]> => {
  const limit = pLimit(2);
  const promises = repos.map((repo) => limit(() => getRepoPR(repo.fullname, { ignoreDependabot })));
  const data = (await Promise.all(promises)).flat(1);
  const sorted = orderBy(data, 'created_at', 'desc');
  return sorted;
};

export const getRepoPR = async (fullRepoName: string, { ignoreDependabot = true }: { ignoreDependabot?: boolean } = {}) => {
  const res = await fetch(`https://api.github.com/repos/${fullRepoName}/pulls?state=open`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_KEY}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  let data: pullRequestType[] = await res.json();

  if (ignoreDependabot) {
    data = data.filter((item) => item.user.login != 'dependabot[bot]');
  }

  return data;
};
