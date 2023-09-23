import { mkdir, writeFile } from 'fs/promises';

import Globalize from 'globalize';
import globalizeCompiler from 'globalize-compiler';

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json' assert { type: 'json' };
import numbersEn from 'cldr-numbers-full/main/en/numbers.json' assert { type: 'json' };
import plurals from 'cldr-core/supplemental/plurals.json' assert { type: 'json' };
import unitsEn from 'cldr-units-full/main/en/units.json' assert { type: 'json' };

Globalize.load(likelySubtags);
Globalize.load(numbersEn);
Globalize.load(plurals);
Globalize.load(unitsEn);

const globalize = new Globalize('en');

const code = globalizeCompiler.compile([globalize.unitFormatter('megabyte')]);

await mkdir('./lib/');
await writeFile('./lib/PrecompiledGlobalize.js', code);
