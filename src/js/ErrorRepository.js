export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errorsObj = {
      404: 'Invalid input',
      405: 'Server error',
    };

    Object.keys(this.errorsObj).forEach((code) => {
      this.errors.set(code, this.errorsObj[code]);
    });
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Not Found';
    }

    return this.errors.get(code);
  }
}
