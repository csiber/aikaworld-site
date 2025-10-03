'use server';

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { cache, type ReactElement } from 'react';
import { compileMDX } from 'next-mdx-remote/rsc';

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
  content: ReactElement;
};

const DEVLOG_DIR = path.join(process.cwd(), 'content', 'devlog');

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

async function readDevlogDirectory(): Promise<string[]> {
  try {
    const entries = await fs.readdir(DEVLOG_DIR);
    return entries.filter(entry => entry.endsWith('.mdx')).sort();
  } catch (error: unknown) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

export const getDevlogSummaries = cache(async (): Promise<DevlogPostSummary[]> => {
  const files = await readDevlogDirectory();
  const posts: DevlogPostSummary[] = [];

  for (const file of files) {
    const filePath = path.join(DEVLOG_DIR, file);
    const source = await fs.readFile(filePath, 'utf8');
    const { data } = matter(source);
    const parsed = parseFrontmatter(data as Record<string, unknown>);
    const slug = file.replace(/\.mdx$/, '');
    posts.push({ ...parsed, slug });
  }

  posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return posts;
});

export const getDevlogPost = cache(async (slug: string): Promise<DevlogPost> => {
  const filePath = path.join(DEVLOG_DIR, `${slug}.mdx`);
  const source = await fs.readFile(filePath, 'utf8');
  const { frontmatter, content } = await compileMDX<DevlogPostFrontmatter>({
    source,
    options: { parseFrontmatter: true }
  });
  const parsed = parseFrontmatter(frontmatter as Record<string, unknown>);
  return { ...parsed, slug, content };
});

export const getLatestDevlogSummaries = cache(async (limit: number): Promise<DevlogPostSummary[]> => {
  const posts = await getDevlogSummaries();
  return posts.slice(0, Math.max(limit, 0));
});
