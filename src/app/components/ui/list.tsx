'use client';

import * as React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

type ListProps = React.ComponentPropsWithoutRef<typeof Tabs.Root>;

function List({ orientation = 'vertical', children, ...props }: ListProps) {
  const listRef = React.useRef<HTMLDivElement>(null);

  return (
    <Tabs.Root orientation={orientation} {...props}>
      <Tabs.List ref={listRef}>{children}</Tabs.List>
    </Tabs.Root>
  );
}

type ListItemProps = React.ComponentPropsWithoutRef<typeof Tabs.Trigger>;

function ListItem({ children, ...props }: ListItemProps) {
  return <Tabs.Trigger {...props}>{children}</Tabs.Trigger>;
}

export { List, ListItem };
