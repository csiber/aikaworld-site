import { enDictionary } from '../lib/i18n/dictionaries/en';
import { huDictionary } from '../lib/i18n/dictionaries/hu';

interface Diff {
  path: string;
  message: string;
}

type Inspectable = Record<string, unknown> | unknown[] | null | undefined;

function describeType(value: unknown): string {
  if (Array.isArray(value)) {
    return 'array';
  }
  if (value === null) {
    return 'null';
  }
  return typeof value;
}

function compareValues(a: Inspectable, b: Inspectable, path: string[] = []): Diff[] {
  const differences: Diff[] = [];
  const typeA = describeType(a);
  const typeB = describeType(b);

  if (typeA !== typeB) {
    differences.push({
      path: path.join('.'),
      message: `Eltérő típusok: ${typeA} vs ${typeB}`
    });
    return differences;
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      differences.push({
        path: path.join('.'),
        message: `Eltérő elemszám: ${a.length} vs ${b.length}`
      });
    }

    const min = Math.min(a.length, b.length);
    for (let index = 0; index < min; index += 1) {
      differences.push(...compareValues(a[index] as Inspectable, b[index] as Inspectable, [...path, `[${index}]`]));
    }
    return differences;
  }

  if (typeA === 'object' && a && b) {
    const keysA = Object.keys(a as Record<string, unknown>).sort();
    const keysB = Object.keys(b as Record<string, unknown>).sort();

    const missingInB = keysA.filter(key => !keysB.includes(key));
    const missingInA = keysB.filter(key => !keysA.includes(key));

    missingInB.forEach(key => {
      differences.push({
        path: [...path, key].join('.'),
        message: 'Kulcs hiányzik a hu fordításból'
      });
    });

    missingInA.forEach(key => {
      differences.push({
        path: [...path, key].join('.'),
        message: 'Kulcs hiányzik az en fordításból'
      });
    });

    keysA
      .filter(key => keysB.includes(key))
      .forEach(key => {
        const nextA = (a as Record<string, Inspectable>)[key];
        const nextB = (b as Record<string, Inspectable>)[key];
        differences.push(...compareValues(nextA, nextB, [...path, key]));
      });

    return differences;
  }

  return differences;
}

const differences = compareValues(enDictionary, huDictionary);

if (differences.length > 0) {
  console.error('Fordítás-ellenőrzés sikertelen. Hiányzó vagy eltérő szerkezetű kulcsok:');
  differences.forEach(diff => {
    const location = diff.path || '<gyökér>';
    console.error(` - ${location}: ${diff.message}`);
  });
  process.exitCode = 1;
} else {
  console.log('Fordítás-ellenőrzés sikeres: az en és hu szótárak szerkezete egyezik.');
}
