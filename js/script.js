import tabs from "./modules/tabs";
import forms from "./modules/forms";
import slider from "./modules/slider";
import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calculator from "./modules/calculator";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", function () {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    300000
  );

  cards();
  forms("form", modalTimerId);
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    currentCounter: "#current",
    slide: ".offer__slide",
    totalCounter: "#total",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
  modal("[data-modal]", ".modal", modalTimerId);
  timer(".timer", "2023-06-11");
  calculator();
  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
});
