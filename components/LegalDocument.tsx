import type { LegalDocumentDictionary, LegalSectionDictionary, LegalListDictionary } from '../lib/i18n/types';

function renderList(list: LegalListDictionary, index: number) {
  if (list.type === 'numbered') {
    return (
      <ol key={`list-${index}`} className="mt-4 list-decimal space-y-2 pl-6">
        {list.items.map(item => (
          <li key={item} className="opacity-80">
            {item}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ul key={`list-${index}`} className="mt-4 list-disc space-y-2 pl-6">
      {list.items.map(item => (
        <li key={item} className="opacity-80">
          {item}
        </li>
      ))}
    </ul>
  );
}

function Section({ section, level }: { section: LegalSectionDictionary; level: number }) {
  const HeadingTag = (['h2', 'h3', 'h4', 'h5', 'h6'] as const)[Math.min(level, 4)];

  return (
    <section className="mt-10" key={section.title}>
      <HeadingTag className="text-xl font-semibold">{section.title}</HeadingTag>
      {section.paragraphs?.map(paragraph => (
        <p key={paragraph} className="mt-4 text-base opacity-80">
          {paragraph}
        </p>
      ))}
      {section.lists?.map((list, index) => renderList(list, index))}
      {section.afterParagraphs?.map(paragraph => (
        <p key={paragraph} className="mt-4 text-base opacity-80">
          {paragraph}
        </p>
      ))}
      {section.subsections?.map(subsection => (
        <Section key={subsection.title} section={subsection} level={level + 1} />
      ))}
    </section>
  );
}

export default function LegalDocument({ document }: { document: LegalDocumentDictionary }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-semibold">{document.heading}</h1>
      <p className="mt-3 text-sm uppercase tracking-wide text-white/50">
        {document.lastUpdated}
      </p>
      {document.intro ? (
        <p className="mt-6 text-lg opacity-80">{document.intro}</p>
      ) : null}
      {document.sections.map(section => (
        <Section key={section.title} section={section} level={1} />
      ))}
    </div>
  );
}
