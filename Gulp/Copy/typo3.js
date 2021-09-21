import {src, dest} from 'gulp';

import {t3package} from '../../build-config.js';

let copyToSitePackage = (done) => {
  src([
    './public/Css/*',
    './public/Font/**/*',
    './public/Images/**/*',
    './public/Videos/**/*',
    './public/JavaScript/*'
  ], {
    base: './public'
  })
    .pipe(dest('../../packages/' + t3package + '/Resources/Public/'));

  done();
};

module.exports = copyToSitePackage;
