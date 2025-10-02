'use client';

import Link from 'next/link';
import { FormEvent, useMemo, useState } from 'react';
import type { Locale } from '../lib/i18n/config';
import type { HomeDictionary, LightboxDictionary } from '../lib/i18n/types';
import Lightbox from './Lightbox';

type SubscribeErrorCode = 'INVALID_JSON' | 'INVALID_EMAIL' | 'STORAGE_ERROR';
type SubscribeSuccessCode = 'SUCCESS';

type SubscribeResponse = {
  success?: { code: SubscribeSuccessCode };
  error?: { code: SubscribeErrorCode };
};

type HomePageProps = {
  steamUrl: string | null;
  discordUrl: string | null;
  locale: Locale;
  dictionary: HomeDictionary;
  lightboxDictionary: LightboxDictionary;
};

export default function HomePage({
  steamUrl,
  discordUrl,
  locale,
  dictionary,
  lightboxDictionary
}: HomePageProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const basePath = useMemo(() => (locale === 'hu' ? '/hu' : ''), [locale]);

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

  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,106,61,0.25),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            {dictionary.hero.title}
            <span className="text-accentB">{dictionary.hero.highlight}</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl opacity-90">
            {dictionary.hero.description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            {steamUrl && (
              <a className="px-5 py-3 rounded-lg bg-accentA hover:opacity-90 font-semibold" href={steamUrl}>
                {dictionary.hero.wishlistCta}
              </a>
            )}
            {discordUrl && (
              <a className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20" href={discordUrl}>
                {dictionary.hero.discordCta}
              </a>
            )}
            <a className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20" href="#newsletter">
              {dictionary.hero.subscribeCta}
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

      {/* COMMUNITY / NEWSLETTER */}
      <section id="community" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">{dictionary.community.title}</h2>
        <p className="mt-2 opacity-90">{dictionary.community.description}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          {discordUrl && (
            <a className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20" href={discordUrl}>
              {dictionary.community.discordCta}
            </a>
          )}
          {steamUrl && (
            <a className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20" href={steamUrl}>
              {dictionary.community.wishlistCta}
            </a>
          )}
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
