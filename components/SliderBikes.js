export default class SliderBikes {
  constructor(sliderSelectors, optionValues) {
    this._section = document.querySelector('.' + sliderSelectors.section);
    this._select = this._section.querySelector('.' + sliderSelectors.select);
    this._buttons = this._section.querySelectorAll('.' + sliderSelectors.button);
    this._slides = this._section.querySelectorAll('.' + sliderSelectors.slide);
    this._dots = this._section.querySelectorAll('.' + sliderSelectors.dot);

    this._bikes = {};

    this._bikeSelector = sliderSelectors.bike;
    this._buttonSelector = sliderSelectors.button;
    this._buttonActiveSelector = sliderSelectors.buttonActive;
    this._dotActiveSelector = sliderSelectors.dotActive;

    this._optionValues = optionValues;

    this._chosenSlideIndex = 0;
    this._chosenBikeIndex = 0;
  }

  _isButton(evt) {
    if (evt.target.classList.contains(this._buttonSelector)) {
      return true;
    }
  }

  _changeButtonStyle(evt) {
    if (this._isButton(evt)) {
      this._section.querySelector('.' + this._buttonActiveSelector).classList.remove(this._buttonActiveSelector);
      evt.target.classList.add(this._buttonActiveSelector);
    }
  }

  _chooseSlide(evt) {
    this._chosenSlideIndex = this._optionValues.indexOf(evt.target.value);
    this._showBikes();
    this._showSlides();
    this._changeButtonStyle(evt);
  }

  _showSlides() {
    for (let slide of this._slides) {
      slide.style.display = 'none';
    }

    this._slides[this._chosenSlideIndex].style.display = 'flex';
  }

  _checkWindowWidth() {
    if (window.innerWidth <= 768) {
      return true;
    } else return false;
  }

  _makeBikesImageObject() {
    for (let i = 0; i < this._slides.length; i++) {
      this._bikes[i] = this._slides[i].querySelectorAll('.' + this._bikeSelector);
    }
  }

  _showBikes() {
    if (this._checkWindowWidth()) {
      if (this._chosenBikeIndex > this._bikes[this._chosenSlideIndex].length - 1) {
        this._chosenBikeIndex = 0;
      } else if (this._chosenBikeIndex < 0) {
        this._chosenBikeIndex = this._bikes[this._chosenSlideIndex].length - 1;
      }

      for (let slide of this._bikes[this._chosenSlideIndex]) {
        slide.style.display = 'none';
      }


      this._bikes[this._chosenSlideIndex][this._chosenBikeIndex].style.display = 'block';
    }
  }

  _previousSlide() {
    this._chosenBikeIndex -= 1;
    this._showBikes();
  }

  _nextSlide() {
    this._chosenBikeIndex += 1;
    this._showBikes();
  }

  _handleSwipeStart(evt) {
    this._touch = evt.changedTouches[0];
    this._x1 = this._touch.clientX;
    this._y1 = this._touch.clientY;
  }

  _handleSwipeEnd(evt) {
    this._touch = evt.changedTouches[0];
    this._x2 = this._touch.clientX;
    this._y2 = this._touch.clientY;
  }

  _changeDot() {
    this._section.querySelector('.' + this._dotActiveSelector).classList.remove(this._dotActiveSelector);
    this._dots[this._chosenBikeIndex].classList.add(this._dotActiveSelector);
  }

  _changeBike(evt) {
    this._handleSwipeEnd(evt);

    this._diffX = this._x1 - this._x2;
    this._diffY = this._y1 - this._y2;

    if (Math.abs(this._diffX) > Math.abs(this._diffY)) {
      if (this._diffX > 50) {
        this._nextSlide();
      } else if (this._diffX < -50) {
        this._previousSlide();
      }
    }

    this._changeDot();
  }

  _setEventListeners() {
    this._slides.forEach((slide) => {
      slide.addEventListener('touchstart', this._handleSwipeStart.bind(this));
      slide.addEventListener('touchend', this._changeBike.bind(this));
    });
    this._buttons.forEach((button) => button.addEventListener('click', this._chooseSlide.bind(this)));
    this._select.addEventListener('change', this._chooseSlide.bind(this));
  }

  enableSlider() {
    this._makeBikesImageObject();
    this._showSlides();
    this._showBikes();
    this._setEventListeners();
  }
}
