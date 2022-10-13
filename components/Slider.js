export default class Slider{
  constructor(sliderSelectors, textData) {
    this._section = document.querySelector('.' + sliderSelectors.section);
    this._title = this._section.querySelector('.' + sliderSelectors.title);
    this._text = this._section.querySelector('.' + sliderSelectors.text);
    this._slides = this._section.querySelectorAll('.' + sliderSelectors.slide);
    this._sliderLeftButton = this._section.querySelector('.' + sliderSelectors.sliderLeftButton);
    this._sliderRightButton = this._section.querySelector('.' + sliderSelectors.sliderRightButton);

    this._textData = textData;

    this._slideIndex = 0;
  }

  _changeText() {
    this._title.textContent = this._textData[this._slideIndex][0];
    this._text.textContent = this._textData[this._slideIndex][1];
  }

  _previousSlide() {
    this._slideIndex -= 1;
    this._showSlides();
  }

  _nextSlide() {
    this._slideIndex += 1;
    this._showSlides();
  }

  _showSlides() {
    if (this._slideIndex > this._slides.length - 1) {
      this._slideIndex = 0;
    }

    if (this._slideIndex < 0) {
      this._slideIndex = this._slides.length - 1;
    }

    for (let slide of this._slides) {
      slide.style.display = 'none';
    }

    this._slides[this._slideIndex].style.display = 'flex';

    this._changeText();
  }

  _setEventListeners() {
    this._sliderLeftButton.addEventListener('click', this._previousSlide.bind(this));
    this._sliderRightButton.addEventListener('click', this._nextSlide.bind(this));
  }

  enableSlider() {
    this._showSlides();
    this._setEventListeners();
  }
}
