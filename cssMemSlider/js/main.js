'use strict';

// Переключение табов в блоке .season-tickets

(function () {
  let tabs = document.querySelector('.tabs');
  if (!tabs) {
    return;
  }
  let showTab = function (tabsItemTarget) {
    if (!tabsItemTarget) {
      return;
    }
    let ratesItem = document.querySelector(tabsItemTarget.getAttribute('href'));
    let tabsItemActive = tabsItemTarget.parentElement.querySelector('.tabs__item_active');
    if (!(ratesItem && tabsItemActive)) {
      return;
    }
    let ratesListActive = ratesItem.parentElement.querySelector('.rates__list_active');
    if (tabsItemTarget === tabsItemActive || !ratesListActive) {
      tabsItemTarget.blur();
      return;
    }
    tabsItemActive.classList.remove('tabs__item_active');
    ratesListActive.classList.remove('rates__list_active');
    tabsItemTarget.classList.add('tabs__item_active');
    tabsItemTarget.blur();
    ratesItem.classList.add('rates__list_active');
  };

  tabs.addEventListener('click', function (evt) {
    if (!evt.target.classList.contains('tabs__item')) {
      return;
    }
    evt.preventDefault();
    showTab(evt.target);
  });
})();

// Слайдеры

var $;
$(document).ready(function () {
  $('.trainers__list').slick({
    dots: false,
    infinite: true,
    speed: 1100,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  $('.reviews__list').slick({
    variableWidth: true
  });
});

// Маска

let phone = document.querySelector('#user-phone');
let MASK_OPTIONS = {
  mask: '+{7}(000)0000000'
};
if (phone) {
  IMask(phone, MASK_OPTIONS);
}

// localStorage

let formInputs = document.querySelectorAll('.form input');

if (formInputs) {
  formInputs.forEach((item) => {
    item.value = localStorage.getItem(item.getAttribute('id'));
    item.addEventListener('input', () => {
      localStorage.setItem(item.getAttribute('id'), item.value);
    });
  });
}
