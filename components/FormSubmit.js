export default class FormSubmit {
  constructor(formSelectors) {
    this._form = document.querySelector('.' + formSelectors.form);
    this._input = this._form.querySelector('.' + formSelectors.input);
  }

  _submitForm(evt) {
    evt.preventDefault();

    this._input.placeholder = 'Круто!';
    this._input.value = '';
  }

  _setEventListener() {
    this._form.addEventListener('submit', (evt) => this._submitForm(evt));

  }

  enableForm() {
    this._setEventListener();
  }
}
