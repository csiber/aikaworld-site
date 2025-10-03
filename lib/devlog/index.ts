'use server';

import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { cache } from 'react';
import { devlogEntries } from './generated';

export type DevlogPostFrontmatter = {
  title: string;
  date: string;
  summary: string;
  cover: string;
};

export type DevlogPostSummary = DevlogPostFrontmatter & {
  slug: string;
};

export type DevlogPost = DevlogPostSummary & {
  content: string;
};

function parseFrontmatter(frontmatter: Record<string, unknown>): DevlogPostFrontmatter {
  const { title, date, summary, cover } = frontmatter;
  if (typeof title !== 'string' || !title.trim()) {
    throw new Error('A devlog bejegyzés frontmatterjében kötelező a title mező.');
  }
  if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error(`A(z) "${title}" devlog bejegyzésben a date mezőnek YYYY-MM-DD formátumú karakterláncnak kell lennie.`);
  }
  if (Number.isNaN(new Date(date).getTime())) {
    throw new Error(`A(z) "${title}" devlog bejegyzés date mezője nem érvényes dátum.`);
  }
  if (typeof summary !== 'string' || !summary.trim()) {
    throw new Error(`A(z) "${title}" devlog bejegyzés frontmatterjében kötelező a summary mező.`);
  }
  if (typeof cover !== 'string' || !cover.trim()) {
    throw new Error(`A(z) "${title}" devlog bejegyzés frontmatterjében kötelező a cover mező.`);
  }

  return {
    title: title.trim(),
    date,
    summary: summary.trim(),
    cover: cover.trim()
  };
}

export const getDevlogSummaries = cache(async (): Promise<DevlogPostSummary[]> => {
  const posts = devlogEntries.map(entry => {
    const { data } = matter(entry.source);
    const parsed = parseFrontmatter(data as Record<string, unknown>);
    return { ...parsed, slug: entry.slug } satisfies DevlogPostSummary;
  });

  posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return posts;
});

export const getDevlogPost = cache(async (slug: string): Promise<DevlogPost> => {
  const entry = devlogEntries.find(item => item.slug === slug);

  if (!entry) {
    throw new Error(`A "${slug}" azonosítójú devlog bejegyzés nem található.`);
  }

  const { content, data } = matter(entry.source);
  const parsed = parseFrontmatter(data as Record<string, unknown>);
  const rendered = await remark().use(remarkHtml).process(content);
  return { ...parsed, slug, content: rendered.toString().trim() };
});

export const getLatestDevlogSummaries = cache(async (limit: number): Promise<DevlogPostSummary[]> => {
  const posts = await getDevlogSummaries();
  return posts.slice(0, Math.max(limit, 0));
});
