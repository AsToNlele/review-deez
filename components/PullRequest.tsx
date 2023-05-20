import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import GitHubBadge from '@/components/GitHubBadge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { pullRequestType } from '@/types/api';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'; // import plugin
import Link from 'next/link';

function PullRequest({ pr }: { pr: pullRequestType }) {
  dayjs.extend(relativeTime);
  return (
    <Link href={pr.html_url} target="_blank">
      <Card className="w-full h-full">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <CardTitle className="">{pr.title}</CardTitle>
              <CardDescription className="mt-2">{dayjs(pr.created_at).fromNow()}</CardDescription>
            </div>
            <div className="flex flex-col items-center justify-center m-4">
              <Avatar>
                <AvatarImage src={pr.user.avatar_url} alt={pr.user.login} />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Badge className="m-1">{pr.head.repo.name}</Badge>
          {pr.labels.map((label) => (
            <GitHubBadge label={label} key={label.id} />
          ))}
        </CardContent>
      </Card>
    </Link>
  );
}

export default PullRequest;
