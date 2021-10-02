var Promise = require('es6-promise-polyfill').Promise;
import "nodelist-foreach-polyfill";


import tabs from "./modules/tabs";
import modal from "./modules/modal";
import calculator from "./modules/calculator";
import timer from "./modules/timer";
import slider from "./modules/slider";
import cards from "./modules/cards";
import form from "./modules/form";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
	const modalTimerId = setTimeout(
		() => openModal(".modal", modalTimerId),
		50000
	);

	modal("[data-modal]", ".modal", modalTimerId);
	calculator();
	timer(".timer", "2021-12-31");
	slider({
		container: ".offer__slider",
		nextArrow: ".offer__slider-next",
		slide: ".offer__slide",
		prevArrow: ".offer__slider-prev",
		totalCounter: "#total",
		currentCounter: "#current",
		wrapper: ".offer__slider-wrapper",
		field: ".offer__slider-inner",
	});
	cards();
	form("form", modalTimerId);
	tabs(
		".tabheader__item",
		".tabcontent",
		".tabheader__items",
		"tabheader__item_active"
	);
});
