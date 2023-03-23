import ErrorRepository from '../ErrorRepository';

describe('ErrorRepository', () => {
  test('should return the correct error message', () => {
    const errorRepository = new ErrorRepository();

    expect(errorRepository.translate('404')).toEqual('Invalid input');
    expect(errorRepository.translate('405')).toEqual('Server error');
  });

  test('should return "Not Found"', () => {
    const errorRepository = new ErrorRepository();

    expect(errorRepository.translate('403')).toEqual('Not Found');
  });
});
