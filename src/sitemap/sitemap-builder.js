require('@babel/register')({
    extends: './.babelrc',
});

const router = require('./router').default;
const Sitemap = require('react-router-sitemap').default;

(
    new Sitemap(router)
        .build('http://jan-adamczyk.de')
        .save('./build/sitemap.xml')
);