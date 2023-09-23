import Globalize from 'globalize';

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json' assert { type: 'json' };
import numbersEn from 'cldr-numbers-full/main/en/numbers.json' assert { type: 'json' };
import plurals from 'cldr-core/supplemental/plurals.json' assert { type: 'json' };
import unitsEn from 'cldr-units-full/main/en/units.json' assert { type: 'json' };

beforeAll(() => {
  Globalize.load(likelySubtags);
  Globalize.load(numbersEn);
  Globalize.load(plurals);
  Globalize.load(unitsEn);
});

test('should format megabyte', () =>
  expect(new Globalize('en').unitFormatter('megabyte')(10485760)).toBe('10,485,760 megabytes'));
