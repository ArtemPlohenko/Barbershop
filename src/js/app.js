import * as flsFunctions from "./modules/functions.js";
import $ from "jquery";
import "slick-carousel";

flsFunctions.isWebp();

$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });
});

// function ready() {
// }

// document.addEventListener("DOMContentLoaded", ready);
