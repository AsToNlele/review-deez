import { reviewState, reviewType } from '@/types/api';
import { FileCheck, FileDiff, MessageSquare } from 'lucide-react';

const ReviewStatus = ({ reviews }: { reviews: reviewType[] }) => {
  let lastValidState: reviewState | null = null;
  reviews.map(review => {
    if (review.state in reviewState) {
      lastValidState = review.state;
    }
  });
  return (
    lastValidState ? (
      <><ReviewState state={lastValidState} /></>
    ) : null
  );
};

const ReviewState = ({ state }: { state: reviewState }) => {
  if (state === reviewState.APPROVED) {
    return <FileCheck color="green" />;
  } else if (state === reviewState.CHANGES_REQUESTED) {
    return <FileDiff color="red" />;
  } else {
    return <MessageSquare />;
  }
};

export default ReviewStatus;
