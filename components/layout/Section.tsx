import type { ReactNode } from 'react';

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

type SectionProps = {
  id?: string;
  tone?: 'primary' | 'neutral';
  children: ReactNode;
  className?: string;
};

export default function Section({ id, tone = 'primary', children, className }: SectionProps) {
  const toneClass =
    tone === 'primary'
      ? 'before:from-accentB/15 before:via-transparent after:bg-gradient-to-b after:from-accentB/10 after:via-transparent after:to-transparent'
      : 'before:from-white/12 before:via-transparent after:bg-gradient-to-b after:from-white/8 after:via-transparent after:to-transparent';

  return (
    <section
      id={id}
      className={cn(
        'relative isolate overflow-hidden py-20 sm:py-24',
        'before:pointer-events-none before:absolute before:inset-x-12 before:-top-24 before:h-48 before:-skew-y-6 before:rounded-[4rem] before:bg-gradient-to-br before:blur-3xl before:content-[""]',
        'after:pointer-events-none after:absolute after:-bottom-24 after:left-0 after:right-0 after:h-32 after:skew-y-6 after:opacity-80 after:blur-3xl after:content-[""]',
        toneClass,
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}
