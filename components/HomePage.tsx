'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { FormEvent, useMemo, useState } from 'react';
import type { Locale } from '../lib/i18n/config';
import type { HomeDictionary, LightboxDictionary } from '../lib/i18n/types';
import type { DevlogPostSummary } from '../lib/devlog';
import Lightbox from './Lightbox';
import Card from './ui/Card';
import AnimatedHeading from './animations/AnimatedHeading';
import ScrollReveal from './animations/ScrollReveal';
import Section from './layout/Section';

const factionIconClassNames = [
  'bg-accentA/15 text-accentA dark:bg-accentA/25',
  'bg-accentB/15 text-accentB dark:bg-accentB/25',
  'bg-accentC/15 text-accentC dark:bg-accentC/25',
  'bg-accentD/15 text-accentD dark:bg-accentD/25',
  'bg-accentE/15 text-accentE dark:bg-accentE/25'
] as const;

const communityIconStyles: Record<string, { label: string; className: string }> = {
  'dev-journal': { label: 'DJ', className: 'bg-accentA/15 text-accentA dark:bg-accentA/25' },
  'lore-archive': { label: 'LA', className: 'bg-accentC/15 text-accentC dark:bg-accentC/25' },
  signals: { label: 'SU', className: 'bg-accentD/15 text-accentD dark:bg-accentD/25' }
};

const createMonogram = (value: string) =>
  value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part.charAt(0).toUpperCase())
    .join('');

type SubscribeErrorCode = 'INVALID_JSON' | 'INVALID_EMAIL' | 'STORAGE_ERROR';
type SubscribeSuccessCode = 'SUCCESS';

type SubscribeResponse = {
  success?: { code: SubscribeSuccessCode };
  error?: { code: SubscribeErrorCode };
};

type HomePageProps = {
  locale: Locale;
  dictionary: HomeDictionary;
  lightboxDictionary: LightboxDictionary;
  devlogPosts: DevlogPostSummary[];
};

export default function HomePage({
  locale,
  dictionary,
  lightboxDictionary,
  devlogPosts
}: HomePageProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const shouldReduceMotion = useReducedMotion();

  const basePath = useMemo(() => (locale === 'hu' ? '/hu' : ''), [locale]);

  const resolveLocalizedHref = (href: string) => {
    if (!href) {
      return '#';
    }

    if (href.startsWith('#') || href.startsWith('http')) {
      return href;
    }

    return `${basePath}${href}`;
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      setStatus('error');
      setFeedback(dictionary.newsletter.missingEmail);
      return;
    }

    setStatus('loading');
    setFeedback('');

    try {
      const response = await fetch('/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: normalizedEmail })
      });

      let data: SubscribeResponse | null = null;

      try {
        data = (await response.json()) as SubscribeResponse;
      } catch (error) {
        data = null;
      }

      if (response.ok) {
        setStatus('success');
        setFeedback(dictionary.newsletter.success);
        setEmail('');
        return;
      }

      const errorCode = data?.error?.code;
      const errorMessage =
        errorCode === 'INVALID_EMAIL'
          ? dictionary.newsletter.invalidEmail
          : dictionary.newsletter.unknownError;
      setStatus('error');
      setFeedback(errorMessage);
    } catch (error) {
      setStatus('error');
      setFeedback(dictionary.newsletter.networkError);
    }
  };

  const hasDevlogPosts = devlogPosts.length > 0;

  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden pb-28 pt-28 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(60%_70%_at_50%_-20%,rgba(118,75,162,0.45),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(160deg,rgba(9,12,24,0.65)_0%,rgba(5,6,10,0.3)_45%,transparent_100%)]" />
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
          <AnimatedHeading as="h1" className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {dictionary.hero.tagline}
          </AnimatedHeading>
          <motion.p
            className="mt-6 max-w-3xl text-lg italic text-white/80 md:text-xl"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? undefined : { delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {dictionary.hero.monologue}
          </motion.p>
          <motion.p
            className="mt-5 max-w-2xl text-base text-white/75 md:text-lg"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? undefined : { delay: 0.28, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {dictionary.hero.summary}
          </motion.p>
          <motion.div
            className="mt-10 flex justify-center"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={shouldReduceMotion ? false : { opacity: 1, scale: 1 }}
            transition={shouldReduceMotion ? undefined : { delay: 0.4, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <a className="btn-aurora focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentB focus-visible:ring-offset-2 focus-visible:ring-offset-black" href="#newsletter">
              {dictionary.hero.primaryCta}
            </a>
          </motion.div>
          <ScrollReveal className="mt-14 w-full">
            <div className="group relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_45px_120px_-50px_rgba(124,58,237,0.65)]">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-40" aria-hidden />
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster="https://media.aikaworld.com/teaser-poster.png"
              >
                <source src="https://media.aikaworld.com/teaser.webm" type="video/webm" />
                <img
                  src="https://media.aikaworld.com/teaser-poster.png"
                  alt={dictionary.hero.videoPosterAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </video>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WORLD & FACTIONS */}
      <Section id="world">
        <AnimatedHeading className="text-2xl font-bold sm:text-3xl">
          {dictionary.world.title}
        </AnimatedHeading>
        <ScrollReveal delay={0.1} className="mt-4 max-w-3xl text-base text-white/75">
          <p>{dictionary.world.intro}</p>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {dictionary.world.factions.map((faction, index) => {
            const iconClassName = factionIconClassNames[index % factionIconClassNames.length];
            const monogram = createMonogram(faction.name);

            return (
              <ScrollReveal key={faction.name} delay={index * 0.12} className="h-full">
                <Card className="group h-full backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_-50px_rgba(124,58,237,0.85)]">
                  <Card.Title icon={monogram} iconClassName={iconClassName}>
                    {faction.name}
                  </Card.Title>
                  <Card.Body>
                    <p className="font-semibold text-accentB dark:text-accentB">{faction.tagline}</p>
                    <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-slate-600 dark:text-white/70 sm:text-base">
                      {faction.bullets.map(bullet => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </Card.Body>
                  <Card.Actions className="text-slate-900 dark:text-accentB">
                    <Link
                      href={resolveLocalizedHref(dictionary.world.ctaHref)}
                      className="inline-flex items-center gap-2 text-inherit underline decoration-accentB decoration-2 underline-offset-4 transition hover:translate-x-[2px] hover:opacity-90"
                    >
                      {dictionary.world.ctaLabel}
                      <span className="text-accentB dark:text-accentB" aria-hidden>
                        →
                      </span>
                    </Link>
                  </Card.Actions>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      {/* MODES */}
      <Section id="modes" tone="neutral">
        <AnimatedHeading className="text-2xl font-bold sm:text-3xl">
          {dictionary.modes.title}
        </AnimatedHeading>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {dictionary.modes.cards.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 0.15} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-[0_35px_90px_-50px_rgba(59,130,246,0.55)]">
                <AnimatedHeading as="h3" className="text-xl font-semibold">
                  {card.title}
                </AnimatedHeading>
                {card.subtitle ? (
                  <p className="mt-1 text-xs uppercase tracking-[0.26em] text-white/60">{card.subtitle}</p>
                ) : null}
                {card.body || card.description ? (
                  <p className="mt-3 text-sm text-white/75 md:text-base">{card.body ?? card.description}</p>
                ) : null}
                {card.points?.length ? (
                  <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-white/70">
                    {card.points.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
                {card.linkLabel && card.href ? (
                  <Link
                    href={card.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accentB transition hover:translate-x-[2px] hover:opacity-90"
                  >
                    {card.linkLabel}
                    <span aria-hidden>→</span>
                  </Link>
                ) : null}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CHARACTERS */}
      <Section id="characters">
        <AnimatedHeading className="text-2xl font-bold sm:text-3xl">
          {dictionary.characters.title}
        </AnimatedHeading>
        <ScrollReveal delay={0.1} className="mt-3 max-w-3xl text-base text-white/75">
          <p>{dictionary.characters.description}</p>
        </ScrollReveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {dictionary.characters.cards.map((character, index) => (
            <ScrollReveal key={character.slug} delay={index * 0.08} className="h-full">
              <Link
                href={`${basePath}/characters/${character.slug}`}
                className="group block h-full rounded-2xl border border-white/10 bg-white/5 p-4 transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-[0_35px_90px_-60px_rgba(236,72,153,0.7)]"
              >
                <div className={`h-36 w-full rounded-xl bg-${character.color}`} />
                <div className="mt-4 font-semibold text-white">{character.name}</div>
                <div className="text-sm text-white/70">{character.element}</div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* MEDIA */}
      <Section id="media" tone="neutral">
        <AnimatedHeading className="text-2xl font-bold sm:text-3xl">
          {dictionary.media.title}
        </AnimatedHeading>
        <ScrollReveal delay={0.1} className="mt-3 max-w-3xl text-base text-white/75">
          <p>{dictionary.media.description}</p>
        </ScrollReveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {dictionary.media.images.map((image, index) => (
            <ScrollReveal key={image.src} delay={index * 0.08} className="h-full">
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accentB focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                <img
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Lightbox
        images={dictionary.media.images}
        isOpen={lightboxIndex !== null}
        initialIndex={lightboxIndex ?? 0}
        onClose={closeLightbox}
        dictionary={lightboxDictionary}
      />

      {/* ROADMAP */}
      <Section id="roadmap">
        <AnimatedHeading className="text-2xl font-bold sm:text-3xl">
          {dictionary.roadmap.title}
        </AnimatedHeading>
        <ol className="relative mt-10 border-s border-white/15 ps-6">
          {[dictionary.roadmap.phase1, dictionary.roadmap.phase2, dictionary.roadmap.phase3].map((phase, index) => (
            <ScrollReveal key={phase.title} delay={index * 0.12}>
              <li className="relative mb-8 last:mb-0">
                <div
                  className={`absolute -start-[10px] top-1.5 h-3 w-3 rounded-full shadow-[0_0_20px_rgba(96,165,250,0.7)] ${
                    ['bg-accentA', 'bg-accentD', 'bg-accentB'][index % 3]
                  }`}
                />
                <AnimatedHeading as="h3" className="text-lg font-semibold">
                  {phase.title}
                </AnimatedHeading>
                <p className="mt-2 text-sm text-white/75">{phase.body}</p>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </Section>

      {/* DEVLOG TEASERS */}
      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <ScrollReveal className="max-w-3xl space-y-3">
            <AnimatedHeading className="text-2xl font-bold sm:text-3xl">
              {dictionary.devlog.title}
            </AnimatedHeading>
            <p className="text-sm text-white/75 md:text-base">{dictionary.devlog.description}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Link
              href={resolveLocalizedHref('/dev-journal')}
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:translate-x-[2px] hover:border-white/40 hover:bg-white/10"
            >
              {dictionary.devlog.viewAllLabel}
              <span aria-hidden>→</span>
            </Link>
          </ScrollReveal>
        </div>

        {hasDevlogPosts && (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {devlogPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.12} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_45px_120px_-60px_rgba(30,64,175,0.65)]">
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <img src={post.cover} alt={post.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <time className="text-xs uppercase tracking-[0.28em] text-white/60" dateTime={post.date}>
                      {post.date}
                    </time>
                    <AnimatedHeading as="h3" className="text-xl font-semibold">
                      {post.title}
                    </AnimatedHeading>
                    <p className="text-sm text-white/75 md:text-base">{post.summary}</p>
                    <Link
                      href={resolveLocalizedHref(`/dev-journal/${post.slug}`)}
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accentB transition hover:translate-x-[2px] hover:opacity-90"
                    >
                      {dictionary.devlog.readMoreLabel}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}
      </Section>

      {/* COMMUNITY / NEWSLETTER */}
      <Section id="community" tone="primary">
        <AnimatedHeading className="text-2xl font-bold sm:text-3xl">
          {dictionary.community.title}
        </AnimatedHeading>
        <ScrollReveal delay={0.1} className="mt-3 max-w-3xl text-base text-white/75">
          <p>{dictionary.community.description}</p>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {dictionary.community.cards.map((card, index) => {
            const href = resolveLocalizedHref(card.ctaHref);
            const iconConfig = communityIconStyles[card.id] ?? {
              label: createMonogram(card.title),
              className: factionIconClassNames[index % factionIconClassNames.length]
            };

            return (
              <ScrollReveal key={card.id} delay={index * 0.12} className="h-full">
                <Card className="h-full backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_-55px_rgba(34,211,238,0.75)]">
                  <Card.Title
                    eyebrow={card.eyebrow}
                    icon={iconConfig.label}
                    iconClassName={iconConfig.className}
                  >
                    {card.title}
                  </Card.Title>
                  <Card.Body>
                    <p>{card.description}</p>
                  </Card.Body>
                  <Card.Actions className="flex-col items-start gap-2 text-accentB dark:text-accentB">
                    <a
                      href={href}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-accentB px-4 py-2 text-sm text-black transition hover:-translate-y-[1px] hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accentB focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#05060a]"
                    >
                      {card.ctaLabel}
                      <span aria-hidden>→</span>
                    </a>
                    {card.note ? (
                      <p className="text-xs font-normal text-white/60">{card.note}</p>
                    ) : null}
                  </Card.Actions>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        <div id="community-newsletter" className="mt-14 max-w-xl">
          <ScrollReveal delay={0.2} className="space-y-3">
            <AnimatedHeading as="h3" className="text-xl font-semibold">
              {dictionary.community.newsletterTitle}
            </AnimatedHeading>
            <p className="text-sm text-white/70 md:text-base">{dictionary.community.newsletterDescription}</p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <form id="newsletter" className="mt-6 max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm" onSubmit={handleSubmit}>
            <label className="block text-sm font-semibold tracking-[0.2em] text-white/70">
              {dictionary.newsletter.emailLabel}
            </label>
            <div className="mt-3 flex gap-2">
              <input
                required
                type="email"
                placeholder={dictionary.newsletter.emailPlaceholder}
                className="w-full rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-white/90 outline-none transition focus:border-accentB focus:ring-1 focus:ring-accentB"
                value={email}
                onChange={event => {
                  setEmail(event.target.value);
                  if (status !== 'idle') {
                    setStatus('idle');
                    setFeedback('');
                  }
                }}
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                className="btn-aurora px-6 py-2 text-xs"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? dictionary.newsletter.submitLoading : dictionary.newsletter.submitIdle}
              </button>
            </div>
            <p className="mt-3 text-xs text-white/60">
              {dictionary.newsletter.consentPrefix}
              <Link
                href={`${basePath}/privacy`}
                className="underline decoration-dotted underline-offset-4 hover:text-accentB"
              >
                {dictionary.newsletter.consentLinkLabel}
              </Link>
              {dictionary.newsletter.consentSuffix}
            </p>
            {feedback && (
              <p
                className={`mt-4 text-sm ${status === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}
                role="status"
                aria-live="polite"
              >
                {feedback}
              </p>
            )}
          </form>
        </ScrollReveal>
      </Section>
    </div>
  );
}
