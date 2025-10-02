import type { Locale } from './config';

export type LightboxDictionary = {
  ariaLabel: string;
  close: string;
  closeHint: string;
  previous: string;
  next: string;
};

export type NewsletterDictionary = {
  emailLabel: string;
  emailPlaceholder: string;
  submitIdle: string;
  submitLoading: string;
  consent: string;
  missingEmail: string;
  invalidEmail: string;
  success: string;
  unknownError: string;
  networkError: string;
};

export type HomeDictionary = {
  hero: {
    title: string;
    highlight: string;
    description: string;
    wishlistCta: string;
    discordCta: string;
    subscribeCta: string;
    videoPosterAlt: string;
  };
  modes: {
    title: string;
    cards: {
      title: string;
      description: string;
      points: string[];
      linkLabel: string;
      href: string;
    }[];
  };
  characters: {
    title: string;
    description: string;
    cards: {
      slug: string;
      name: string;
      role: string;
      color: string;
    }[];
  };
  media: {
    title: string;
    description: string;
    images: {
      src: string;
      alt: string;
    }[];
  };
  roadmap: {
    title: string;
    phases: {
      badge: string;
      title: string;
      description: string;
    }[];
  };
  community: {
    title: string;
    description: string;
    discordCta: string;
    wishlistCta: string;
  };
  newsletter: NewsletterDictionary;
};

export type ModesDictionary = {
  navLabel: string;
  heading: string;
  intro: string;
  backToHome: string;
  sections: {
    id: string;
    title: string;
    tagline: string;
    mechanicsTitle: string;
    rewardsTitle: string;
    rolesTitle: string;
    mechanics: string[];
    rewards: string[];
    roles: string[];
  }[];
};

export type CharactersDictionary = {
  breadcrumb: string;
  heading: string;
  intro: string;
  roleLabel: string;
  elementLabel: string;
  playstyleLabel: string;
  profileCta: string;
};

export type CharacterPageDictionary = {
  breadcrumbRoot: string;
  archetypeTitle: string;
  roleLabel: string;
  elementLabel: string;
  playstyleLabel: string;
  tipsTitle: string;
  loreTitle: string;
  mentalityTitle: string;
  likesTitle: string;
  dislikesTitle: string;
  quoteTitle: string;
};

export type Character = {
  slug: string;
  name: string;
  title: string;
  heroImage: string;
  heroImageAlt: string;
  role: string;
  element: string;
  playstyle: string;
  tips: string[];
  lore: string;
  mentality: string;
  likes: string;
  dislikes: string;
  quote: string;
};

export type PresskitDictionary = {
  heading: string;
  description: string;
  factSheetTitle: string;
  downloadsTitle: string;
  usageTitle: string;
  usageDescription: string;
  factSheet: { label: string; value: string; href?: string }[];
  downloadBlocks: {
    title: string;
    description: string;
    items: {
      label: string;
      href: string;
    }[];
  }[];
};

export type LegalListDictionary = {
  type: 'bullet' | 'numbered';
  items: string[];
};

export type LegalSectionDictionary = {
  title: string;
  paragraphs?: string[];
  lists?: LegalListDictionary[];
  afterParagraphs?: string[];
  subsections?: LegalSectionDictionary[];
};

export type LegalDocumentDictionary = {
  heading: string;
  lastUpdated: string;
  intro?: string;
  sections: LegalSectionDictionary[];
};

export type LegalChangelogEntryDictionary = {
  version: string;
  date: string;
  summary: string;
  details?: string[];
};

export type LegalChangelogDictionary = {
  heading: string;
  intro?: string;
  entries: LegalChangelogEntryDictionary[];
};

export type NotFoundDictionary = {
  code: string;
  heading: string;
  description: string;
  homeCta: string;
  charactersCta: string;
};

export type HeaderDictionary = {
  brand: string;
  navLabel: string;
  nav: {
    modes: string;
    characters: string;
    media: string;
    roadmap: string;
    community: string;
  };
  wishlistCta: string;
  discordCta: string;
  localeSwitcherLabel: string;
  locales: Record<Locale, string>;
};

export type FooterLinkDictionary = {
  path: string;
  label: string;
};

export type FooterDictionary = {
  legalHeading: string;
  legalLinks: FooterLinkDictionary[];
  contactHeading: string;
  contactEmailLabel: string;
  contactEmail: string;
  contactAddressLabel: string;
  contactAddressLines: string[];
  copyrightNotice: string;
  lastBuildLabel: string;
};

export type SeoDictionary = {
  defaultTitle: string;
  defaultDescription: string;
  defaultOgAlt: string;
  defaultLocale: string;
  pages: {
    home: { title: string; description: string; ogAlt: string };
    modes: { title: string; description: string; ogAlt: string };
    characters: { title: string; description: string };
    character: {
      description: (character: Character) => string;
      ogDescription: (character: Character) => string;
      ogAlt: (character: Character) => string;
    };
    presskit: { title: string; description: string };
    privacy: { title: string; description: string };
    terms: { title: string; description: string };
    legalCopyright: { title: string; description: string; ogAlt: string };
    legalFanContent: { title: string; description: string; ogAlt: string };
    legalTrademark: { title: string; description: string; ogAlt: string };
    legalChangelog: { title: string; description: string; ogAlt: string };
    notFound: { title: string; description: string };
  };
};

export type Dictionary = {
  locale: Locale;
  header: HeaderDictionary;
  footer: FooterDictionary;
  home: HomeDictionary;
  modes: ModesDictionary;
  charactersPage: CharactersDictionary;
  characterPage: CharacterPageDictionary;
  presskit: PresskitDictionary;
  privacy: LegalDocumentDictionary;
  terms: LegalDocumentDictionary;
  legal: {
    copyright: LegalDocumentDictionary;
    fanContent: LegalDocumentDictionary;
    trademark: LegalDocumentDictionary;
    changelog: LegalChangelogDictionary;
  };
  notFound: NotFoundDictionary;
  lightbox: LightboxDictionary;
  seo: SeoDictionary;
};
