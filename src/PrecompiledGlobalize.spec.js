import PrecompiledGlobalize from '../lib/PrecompiledGlobalize';

test('should format megabyte', () =>
  expect(new PrecompiledGlobalize('en').unitFormatter('megabyte')(12345)).toBe('12,345 megabytes'));
