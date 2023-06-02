import { pullRequestType, pullRequestWithReviewType, reviewType } from '@/types/api';
import repos from '@/repos';
import { orderBy } from 'lodash';
import pLimit from 'p-limit';
import { Fetcher } from './utils';

export const getAllPR = async ({ ignoreDependabot = true }: { ignoreDependabot?: boolean } = {}): Promise<pullRequestWithReviewType[]> => {
  const limit = pLimit(2);
  const promises = repos.map((repo) => limit(() => getRepoPR(repo.fullname, { ignoreDependabot })));
  const data = (await Promise.all(promises)).flat(1);
  const sorted = orderBy(data, 'created_at', 'desc');
  return sorted;
};

export const getRepoPR = async (fullRepoName: string, { ignoreDependabot = true }: { ignoreDependabot?: boolean } = {}) => {
  let prs = await Fetcher<pullRequestType[]>(`repos/${fullRepoName}/pulls?state=open`, `Failed to fetch ${fullRepoName} pull requests`);

  if (ignoreDependabot) {
    prs = prs.filter((item) => item.user.login != 'dependabot[bot]');
  }

  const limit = pLimit(2);
  const promises = prs.map((pr) => limit(() => getPRReview(fullRepoName, pr.number)));
  const prReviews: reviewType[][] = (await Promise.all(promises));

  // Merge prs with reviews
  const prsWReviews: pullRequestWithReviewType[] = prs.map((pr, index: number) => ({
    ...pr,
    reviews: prReviews[index]
  }));

  return prsWReviews;
};

const getPRReview = async (fullRepoName: string, pullNumber: number) => {
  const data = await Fetcher<reviewType[]>(`repos/${fullRepoName}/pulls/${pullNumber}/reviews`, `Failed to fetch pull request #${pullNumber} from ${fullRepoName}`);

  return data;
};
