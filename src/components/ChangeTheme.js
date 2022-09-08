export default class ChangeTheme {
  constructor(sectionSelector) {
    this._lightStyle = document.querySelector('#light');
    this._darkStyle = document.querySelector('#dark');
    this._darkShemeMedia = matchMedia('(prefers-color-scheme: dark)');
    this._section = document.querySelector('.' + sectionSelector)
    this._radios = this._section.querySelectorAll('.theme__radio');
  }

  _getSavedScheme() {
    return localStorage.getItem('color-scheme');
  }

  _saveScheme(scheme) {
    localStorage.setItem('color-scheme', scheme);
  }

  _clearScheme() {
    localStorage.removeItem('color-scheme');
  }

  _setScheme(scheme) {
    this._switchMedia(scheme);

    this._saveScheme(scheme)
  }

  _switchMedia(scheme) {
    this._lightMedia = (scheme === 'light') ? 'all' : 'not all';
    this._darkMedia = (scheme === 'dark') ? 'all' : 'not all';

    this._lightStyle.media = this._lightMedia;
    this._darkStyle.media = this._darkMedia;
  }

  _setupScheme() {
    this._savedScheme = this._getSavedScheme()

    if (this._savedScheme !== null) {
      this._setScheme(this._savedScheme);
    }
  }

  _setupSwitcher() {
    this._savedScheme = this._getSavedScheme();

    if (this._savedScheme !== null) {
      this._radioCurrent = document.querySelector(`.theme__radio[value=${this._savedScheme}]`);
      this._radioCurrent.checked = 'true';
    }

    this._radios.forEach((radio) => {
      radio.addEventListener('change', (evt) => {
        this._setScheme(evt.target.value);
      })
    })
  }

  enableSwitcher() {
    this._setupScheme();
    this._setupSwitcher();
  }

  show() {
    console.log(this._radios);
  }
}
