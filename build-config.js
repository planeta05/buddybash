const
  t3package = 'miessner_sitepackage',
  paths = {
    src: './src',
    dest: './public'
  };

let tasks = {
  handlebars: {
    src: `${paths.src}/hbs/pages/*.hbs`,
    data: {},
    options: {
      batch: [
        `${paths.src}/hbs/modules`,
        `${paths.src}/hbs/partials`
      ]
    },
    rename: {
      extname: '.html'
    }
  },

  scss: {
    src: `${paths.src}/scss/*.scss`,
    base: `${paths.src}/scss`,
    dest: `${paths.dest}/Css`
  },

  copyVendorCss: {
    // Add path/file to include to css
    src: [
      './node_modules/multiple-select/dist/multiple-select.css',
      './node_modules/bootstrap/dist/css/bootstrap.min.css',
      './node_modules/swiper/css/swiper.min.css',
      './node_modules/aos/dist/aos.css',
    ],
    dest: `${paths.dest}/src/scss/vendor`
  },

  image: {
    src: `${paths.src}/Images/**/*`,
    dest: `${paths.dest}/Images`
  },

  video: {
    src: `${paths.src}/Videos/**/*`,
    dest: `${paths.dest}/Videos` // .mp4, .avi, .mov in .gitignore
  },

  font: {
    src: `${paths.src}/Font/*.*`,
    dest: `${paths.dest}/Font`
  },

  babel: {
    srcs: [
      `${paths.src}/hbs/modules/**/*.es6`,
      `${paths.src}/JavaScript/Controller/*.es6`,
      `${paths.src}/JavaScript/*.es6`
    ],
    concat: 'app.js',
    dest: `${paths.dest}/JavaScript`
  },

  bundle: {
    // Add path/file to include to bundle
    srcs: [
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/bootstrap/dist/js/bootstrap.js',
      './node_modules/swiper/js/swiper.min.js',
      './node_modules/swup/dist/swup.js',
      './node_modules/@swup/theme/dist/SwupTheme.js',
      './node_modules/@swup/scripts-plugin/dist/SwupScriptsPlugin.js',
      './node_modules/gsap/dist/gsap.min.js',
      './node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
      './node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
      './node_modules/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js',
      './node_modules/aos/dist/aos.js',
      './node_modules/@vimeo/player/dist/player.min.js',
      './node_modules/rellax/rellax.js',
    ],
    concat: 'bundle.js',
    dest: `${paths.dest}/JavaScript`
  },
};

module.exports = {
  t3package,
  paths,
  tasks
};
