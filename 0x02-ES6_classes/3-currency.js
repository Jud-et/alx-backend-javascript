export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }
//getter for name 
  get name() {
    return this._name;
  }
//setter for name with validation
  set name(n) {
    this._name = n;
  }

  get code() {
    return this._code;
  }

  set code(c) {
    this._name = c;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
