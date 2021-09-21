"use strict";
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App() {
    var _this = this;

    _classCallCheck(this, App);

    document.addEventListener('swup:contentReplaced', function (event) {
      _this.fakeConstructor(_this);
    }); // first execution

    this.fakeConstructor(this);
  }

  _createClass(App, [{
    key: "fakeConstructor",
    value: function fakeConstructor() {
      if (document.querySelector('main')) {
        new Navigation();
        new PartnerSlider();
        new QuoteSlider();
        new HeroSlider();
        new ImageGallery();
        new VideoGallery();
        new Timeline();
      }
    }
  }, {
    key: "initializeParallaxRellax",
    value: function initializeParallaxRellax() {
      var rellax = new Rellax('.rellax', {
        speed: 2,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
    }
  }]);

  return App;
}();

new App();