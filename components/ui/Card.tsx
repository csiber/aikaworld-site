import { type ReactElement, type ReactNode } from 'react';

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

type CardRootProps = {
  children: ReactNode;
  className?: string;
};

type CardComponent = ((props: CardRootProps) => ReactElement) & {
  Title: (props: CardTitleProps) => ReactElement;
  Body: (props: CardBodyProps) => ReactElement;
  Actions: (props: CardActionsProps) => ReactElement;
};

const Card = (({ children, className }: CardRootProps) => {
  return (
    <div
      className={cn(
        'flex h-full flex-col gap-6 rounded-2xl border border-slate-200/80 bg-white p-6 text-slate-900 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.2)] transition-colors dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65)] sm:p-8',
        className
      )}
    >
      {children}
    </div>
  );
}) as CardComponent;

type CardTitleProps = {
  children: ReactNode;
  icon?: ReactNode;
  iconClassName?: string;
  eyebrow?: ReactNode;
  className?: string;
};

Card.Title = function CardTitle({
  children,
  icon,
  iconClassName,
  eyebrow,
  className
}: CardTitleProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600 dark:text-white/60">
          {eyebrow}
        </p>
      )}
      <div className="flex items-start gap-4">
        {icon ? (
          <div
            aria-hidden="true"
            className={cn(
              'flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-900/5 text-base font-semibold text-slate-900 ring-1 ring-inset ring-slate-900/10 dark:bg-white/10 dark:text-white dark:ring-white/10',
              iconClassName
            )}
          >
            {icon}
          </div>
        ) : null}
        <h3 className="text-xl font-semibold leading-tight sm:text-2xl">{children}</h3>
      </div>
    </div>
  );
};

type CardBodyProps = {
  children: ReactNode;
  className?: string;
};

Card.Body = function CardBody({ children, className }: CardBodyProps) {
  return <div className={cn('flex flex-col gap-4 text-sm text-slate-600 dark:text-white/70 sm:text-base', className)}>{children}</div>;
};

type CardActionsProps = {
  children: ReactNode;
  className?: string;
};

Card.Actions = function CardActions({ children, className }: CardActionsProps) {
  return (
    <div className={cn('mt-auto flex flex-wrap items-center gap-3 text-sm font-semibold', className)}>
      {children}
    </div>
  );
};

export { Card };
export default Card;
