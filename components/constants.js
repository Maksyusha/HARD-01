const surfaceText = {
  0: [
    'Шоссе',
    'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.'
  ],
  1: [
    'Грэвел',
    'Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.'
  ],
  2: [
    'ТТ',
    'ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.'
  ]
}

const optionValues = [
  'Шоссе',
  'Грэвел',
  'ТТ',
]

const headerSelectors = {
  header: 'header',
  headerToggle: 'header__hamburger-toggle',
  headerButton: 'header__hamburger-button',
  headerMenu: 'header__menu',
  headerMenuActive: 'header__menu_active',
}

const surfaceSelectors = {
  section: 'surface',
  title: 'surface__title',
  text: 'surface__text',
  slide: 'surface__image-flex',
  sliderLeftButton: 'surface__button_type_left',
  sliderRightButton: 'surface__button_type_right',
}

const bikesSelectors = {
  section: 'bikes',
  slide: 'bikes__image-container',
  bike: 'bikes__link',
  button: 'bikes__switcher',
  buttonActive: 'bikes__switcher_active',
  select: 'bikes__select',
  dot: 'bikes__dot',
  dotActive: 'bikes__dot_active'
}

const fromSelectors = {
  section: 'footer',
  form: 'footer__form',
  input: 'footer__input',
}

const sectionSelectors = {
  header: 'header',
  footer: 'footer'
}



export {
  headerSelectors,
  surfaceSelectors,
  surfaceText,
  bikesSelectors,
  optionValues,
  fromSelectors,
  sectionSelectors
}
