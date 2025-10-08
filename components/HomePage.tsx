'use client';

import Link from 'next/link';
import { FormEvent, useMemo, useState } from 'react';
import type { Locale } from '../lib/i18n/config';
import type { HomeDictionary, LightboxDictionary } from '../lib/i18n/types';
import type { DevlogPostSummary } from '../lib/devlog';
import Lightbox from './Lightbox';
import Card from './ui/Card';

const factionIconClassNames = [
  'bg-accentA/15 text-accentA dark:bg-accentA/25',
  'bg-accentB/15 text-accentB dark:bg-accentB/25',
  'bg-accentC/15 text-accentC dark:bg-accentC/25',
  'bg-accentD/15 text-accentD dark:bg-accentD/25',
  'bg-accentE/15 text-accentE dark:bg-accentE/25'
] as const;

const communityIconStyles: Record<string, { label: string; className: string }> = {
  playtests: { label: 'PT', className: 'bg-accentA/15 text-accentA dark:bg-accentA/25' },
  'creator-program': { label: 'CP', className: 'bg-accentB/15 text-accentB dark:bg-accentB/25' },
  'community-challenges': { label: 'CC', className: 'bg-accentD/15 text-accentD dark:bg-accentD/25' }
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
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,106,61,0.25),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            {dictionary.hero.tagline}
          </h1>
          <p className="mt-6 text-lg md:text-xl opacity-90 italic">
            {dictionary.hero.monologue}
          </p>
          <p className="mt-5 text-base md:text-lg text-slate-700 dark:text-slate-200">
            {dictionary.hero.summary}
          </p>
          <div className="mt-8 flex justify-center">
            <a className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold" href="#newsletter">
              {dictionary.hero.primaryCta}
            </a>
          </div>
          <div className="mt-10 aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
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
        </div>
      </section>

      {/* WORLD & FACTIONS */}
      <section id="world" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">{dictionary.world.title}</h2>
        <p className="mt-3 opacity-90 max-w-3xl">{dictionary.world.intro}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {dictionary.world.factions.map((faction, index) => {
            const iconClassName = factionIconClassNames[index % factionIconClassNames.length];
            const monogram = createMonogram(faction.name);

            return (
              <Card key={faction.name}>
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
                  <span className="inline-flex items-center gap-2 text-inherit">
                    <span className="underline decoration-accentB decoration-2 underline-offset-4">
                      {dictionary.world.ctaLabel}
                    </span>
                    <span className="text-accentB dark:text-accentB" aria-hidden>
                      →
                    </span>
                  </span>
                </Card.Actions>
              </Card>
            );
          })}
        </div>
      </section>

      {/* MODES */}
      <section id="modes" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">{dictionary.modes.title}</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {dictionary.modes.cards.map(card => (
            <div key={card.title} className="rounded-xl border border-white/10 p-6 bg-white/5 flex flex-col">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 opacity-90">{card.description}</p>
              <ul className="mt-4 list-disc list-inside opacity-80 text-sm">
                {card.points.map(point => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link
                href={card.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accentB hover:opacity-80"
              >
                {card.linkLabel}
                <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CHARACTERS */}
      <section id="characters" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">{dictionary.characters.title}</h2>
        <p className="mt-2 opacity-90">{dictionary.characters.description}</p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {dictionary.characters.cards.map(character => (
            <Link
              key={character.slug}
              href={`${basePath}/characters/${character.slug}`}
              className="rounded-xl border border-white/10 p-4 bg-white/5 hover:bg-white/10 transition"
            >
              <div className={`h-36 w-full rounded-lg bg-${character.color}`} />
              <div className="mt-3 font-semibold">{character.name}</div>
              <div className="text-sm opacity-80">{character.role}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* MEDIA */}
      <section id="media" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">{dictionary.media.title}</h2>
        <p className="mt-2 opacity-90">{dictionary.media.description}</p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dictionary.media.images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-lg border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accentB"
            >
              <img
                className="h-full w-full object-cover transition duration-150 group-hover:scale-105"
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        images={dictionary.media.images}
        isOpen={lightboxIndex !== null}
        initialIndex={lightboxIndex ?? 0}
        onClose={closeLightbox}
        dictionary={lightboxDictionary}
      />

      {/* ROADMAP */}
      <section id="roadmap" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">{dictionary.roadmap.title}</h2>
        <ol className="mt-6 relative border-s border-white/10 ps-6">
          {dictionary.roadmap.phases.map((phase, index) => (
            <li key={phase.badge} className="mb-6 last:mb-0">
              <div
                className={`absolute -start-[6px] mt-1.5 h-3 w-3 rounded-full ${
                  ['bg-accentA', 'bg-accentD', 'bg-accentB'][index % 3]
                }`}
              />
              <h3 className="font-semibold">{phase.badge}</h3>
              <p className="opacity-80 text-sm">{phase.title}</p>
              <p className="opacity-70 text-sm">{phase.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* DEVLOG TEASERS */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">{dictionary.devlog.title}</h2>
            <p className="text-sm md:text-base opacity-90">{dictionary.devlog.description}</p>
          </div>
          <Link
            href={resolveLocalizedHref('/devlog')}
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10"
          >
            {dictionary.devlog.viewAllLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>

        {hasDevlogPosts && (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {devlogPosts.map(post => (
              <article
                key={post.slug}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20"
              >
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img src={post.cover} alt={post.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <time className="text-xs uppercase tracking-wide text-white/60" dateTime={post.date}>
                    {post.date}
                  </time>
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-sm md:text-base opacity-80">{post.summary}</p>
                  <Link
                    href={resolveLocalizedHref(`/devlog/${post.slug}`)}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accentB hover:opacity-80"
                  >
                    {dictionary.devlog.readMoreLabel}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* COMMUNITY / NEWSLETTER */}
      <section id="community" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">{dictionary.community.title}</h2>
        <p className="mt-2 opacity-90">{dictionary.community.description}</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {dictionary.community.cards.map((card, index) => {
            const href = resolveLocalizedHref(card.ctaHref);
            const iconConfig = communityIconStyles[card.id] ?? {
              label: createMonogram(card.title),
              className: factionIconClassNames[index % factionIconClassNames.length]
            };

            return (
              <Card key={card.id}>
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
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accentB px-4 py-2 text-sm text-black transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accentB focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#05060a]"
                  >
                    {card.ctaLabel}
                    <span aria-hidden>→</span>
                  </a>
                  {card.note ? (
                    <p className="text-xs font-normal text-slate-500 dark:text-white/60">{card.note}</p>
                  ) : null}
                </Card.Actions>
              </Card>
            );
          })}
        </div>

        <div id="community-newsletter" className="mt-12 max-w-xl">
          <h3 className="text-xl font-semibold">{dictionary.community.newsletterTitle}</h3>
          <p className="mt-2 text-sm md:text-base opacity-80">
            {dictionary.community.newsletterDescription}
          </p>
        </div>

        <form id="newsletter" className="mt-6 max-w-md" onSubmit={handleSubmit}>
          <label className="block text-sm mb-2">{dictionary.newsletter.emailLabel}</label>
          <div className="flex gap-2">
            <input
              required
              type="email"
              placeholder={dictionary.newsletter.emailPlaceholder}
              className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/10 outline-none"
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
              className="px-4 rounded-md bg-accentB hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? dictionary.newsletter.submitLoading : dictionary.newsletter.submitIdle}
            </button>
          </div>
          <p className="mt-2 text-xs opacity-70">
            {dictionary.newsletter.consentPrefix}
            <Link
              href={`${basePath}/privacy`}
              className="underline decoration-dotted underline-offset-2 hover:text-accentB"
            >
              {dictionary.newsletter.consentLinkLabel}
            </Link>
            {dictionary.newsletter.consentSuffix}
          </p>
          {feedback && (
            <p
              className={`mt-3 text-sm ${status === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}
              role="status"
              aria-live="polite"
            >
              {feedback}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
