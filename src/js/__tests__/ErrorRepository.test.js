import ErrorRepository from '../ErrorRepository';

test('error text', () => {
  const errorNew = new ErrorRepository([[404, 'Server not responding']]);
  const result = errorNew.translate(404);

  expect(result).toBe('Server not responding');
});

test('not found', () => {
  const errorNew = new ErrorRepository([[404, 'Server not responding']]);
  const result = errorNew.translate(405);

  expect(result).toBe('Not Found');
});
