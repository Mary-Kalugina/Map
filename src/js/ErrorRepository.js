export default class ErrorRepository {
  constructor(errors = {}) {
    this.errors = new Map();

    Object.keys(errors).forEach((code) => {
      this.errors.set(code, errors[code]);
    });
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Not Found';
    }

    return this.errors.get(code);
  }
}
