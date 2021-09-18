window.addEventListener("DOMContentLoaded", () => {
    const tabs = require("./modules/tabs"),
        modal = require("./modules/modal"),
        calculator = require("./modules/calculator"),
        timer = require("./modules/timer"),
        slider = require("./modules/slider"),
        cards = require("./modules/cards"),
        form = require("./modules/form");

    modal();
    calculator();
    timer();
    slider();
    cards();
    form();
    tabs();
});
