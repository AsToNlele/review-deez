export type pullRequestType = {
  id: number;
  html_url: string;
  title: string;
  user: {
    login: string;
    id: number;
    avatar_url: string;
  };
  number: number;
  created_at: string;
  updated_at: string;
  labels: labelType[];
  draft: boolean;
  head: {
    repo: {
      name: string;
      full_name: string;
    }
  }
};

export type reviewType = {
  state: reviewState;
}

export enum reviewState {
  APPROVED = "APPROVED",
  CHANGES_REQUESTED = "CHANGES_REQUESTED",
  COMMENTED = "COMMENTED"
}

export type pullRequestWithReviewType = {
  reviews: reviewType[]
} & pullRequestType;

export type labelType = {
  id: number;
  name: string;
  color: string;
  description: string;
};
