class App {
    constructor() {
        document.addEventListener('swup:contentReplaced', (event) => {
            this.fakeConstructor(this);
        });

        // first execution
        this.fakeConstructor(this);
    }

    fakeConstructor() {
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

    initializeParallaxRellax() {
        var rellax = new Rellax('.rellax', {
            speed: 2,
            center: true,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }
}

new App();
