import '@/app/globals.css';
import { Metadata } from 'next';
import type React from 'react';

import { Sidebar } from '@/components/Sidebar';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Review Deez',
  description: 'All your PRs in one place',
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark">
        <div className="space-y-6 p-6 pb-16 md:block h-full">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">
              Review Deez
              <s className="text-lg decoration-2">🥜</s>
            </h2>
            <p className="text-muted-foreground">
              All your PRs in one place
            </p>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 h-full">
            <aside className="lg:w-1/12">
              <Sidebar />
            </aside>
            <div className="flex-1 lg:w-11/12">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default Layout;
