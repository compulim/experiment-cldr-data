import PrecompiledGlobalize from '../lib/PrecompiledGlobalize';

test('should format megabyte', () =>
  expect(new PrecompiledGlobalize('en').unitFormatter('megabyte')(10485760)).toBe('10,485,760 megabytes'));
