import * as flsFunctions from "./modules/functions.js";
import $ from "jquery";
import "slick-carousel";

flsFunctions.isWebp();

function ready() {
  // Slick slider
  $(document).ready(function () {
    $(".carousel").slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      prevArrow:
        '<button class="slick-prev" aria-label="Back" type="button">Back</button>',
      nextArrow:
        '<button class="slick-next" aria-label="Forward" type="button">Forward</button>',
    });
  });

  // Smooth scrolling
  $(".anchor-link").click(function (e) {
    e.preventDefault();
    var target = $($(this).attr("href"));
    if (target.length) {
      var scrollTo = target.offset().top;
      $("body, html").animate({ scrollTop: scrollTo + "px" }, 800);
    }
  });
}

document.addEventListener("DOMContentLoaded", ready);
