"use strict";

// js/script.js

// Beispiel für eine einfache Toggle-Funktion für ein mobiles Menü
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("is-active");
}

// Event-Listener für Menü-Button
//const menuButton = document.getElementById("menu-button");
//menuButton.addEventListener("click", toggleMenu);

var video = document.getElementById("bgvid");
var lastUpdate = Date.now();
var throttleDuration = 100; // Throttle-Dauer in Millisekunden
var requestId = null; // ID für requestAnimationFrame
var minScrollHeight = 1000; // Minimal erforderliche Höhe für den Scroll-Effekt

function updateVideoPosition() {
  var now = Date.now();

  if (now - lastUpdate > throttleDuration) {
    var scrollPosition = window.scrollY;
    var maxScroll = Math.max(
      minScrollHeight,
      document.documentElement.scrollHeight - window.innerHeight
    );
    var scrollFraction = scrollPosition / maxScroll;

    if (
      isNaN(scrollFraction) ||
      scrollFraction === Infinity ||
      scrollFraction === -Infinity
    ) {
      scrollFraction = 0;
    } else {
      scrollFraction = Math.max(0, Math.min(scrollFraction, 1));
    }

    var scaleFactor = 4;
    var newTime = scrollFraction * video.duration * scaleFactor;

    if (!isNaN(newTime) && isFinite(newTime)) {
      video.currentTime = Math.min(newTime, video.duration);
    }

    lastUpdate = now;
  }

  requestId = requestAnimationFrame(updateVideoPosition);
}

requestId = requestAnimationFrame(updateVideoPosition);

function cancelAnimation() {
  if (requestId) {
    cancelAnimationFrame(requestId);
  }
}

// Event-Listener für das Laden des Videos
video.addEventListener("loadedmetadata", function () {
  //video.play();
  requestId = requestAnimationFrame(updateVideoPosition);
});

(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        680: {
          items: 2,
          nav: false,
          loop: false,
        },
        1000: {
          items: 3,
          nav: true,
        },
      },
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();
