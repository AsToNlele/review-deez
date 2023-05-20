'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import repos from '@/repos';

const sidebarNavItems = [
  {
    name: 'Home',
    href: '/',
  },
  ...repos.map((repo) => (
    {
      name: repo.name,
      href: `/${repo.name}`,
    }
  )),
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        'flex flex-wrap space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
      )}
    >
      {sidebarNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            pathname === item.href
              ? 'bg-muted hover:bg-muted'
              : 'hover:bg-transparent hover:underline',
            'justify-start',
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
