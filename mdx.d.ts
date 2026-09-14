declare module '*.mdx' {
  import type { ComponentType } from 'react';
  import type { MDXComponents } from 'mdx/types';

  export const meta: {
    title: string;
    date: string;
    displayDate?: string;
    category: string;
    author: string;
    thumbnail: string;
  };

  const MDXComponent: ComponentType<{ components?: MDXComponents }>;
  export default MDXComponent;
}
