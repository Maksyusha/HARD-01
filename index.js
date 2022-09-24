import {
  headerSelectors,
  surfaceSelectors,
  surfaceText,
  bikesSelectors,
  optionValues,
  fromSelectors,
  sectionSelectors
} from './components/constants.js';
import Header from './components/Header.js';
import Slider from './components/Slider.js';
import SliderBikes from './components/SliderBikes.js';
import FormSubmit from './components/FormSubmit.js';
import ChangeTheme from './components/ChangeTheme.js';



const header = new Header(headerSelectors)

header.enableHeader();
header._closeHeaderByScroll();



const slider = new Slider(surfaceSelectors, surfaceText);

slider.enableSlider();



const sliderBikes = new SliderBikes(bikesSelectors, optionValues);

sliderBikes.enableSlider();



const formSubmit = new FormSubmit(fromSelectors);

formSubmit.enableForm();



const changeThemeHeader = new ChangeTheme(sectionSelectors.header)

changeThemeHeader.enableSwitcher();

const changeThemeFooter = new ChangeTheme(sectionSelectors.footer)

changeThemeFooter.enableSwitcher();
