const autoprefixer = require('autoprefixer');
const doiuse = require('doiuse');
const flexBugsFixes = require('postcss-flexbugs-fixes');
const warnCleaner = require('postcss-warn-cleaner');

module.exports = {
    plugins: [
        autoprefixer({browsers: ['last 2 versions'], add: true, remove: false}),
        doiuse({
            browsers: ['ie >= 11', 'last 2 Chrome versions', 'last 2 Firefox versions'],
            ignore: ['flexbox', 'font-unicode-range', 'outline', 'calc', 'css-featurequeries'],
            ignoreFiles: ['**/bootstrap*.css'],
            onFeatureUsage: (val) => {
                throw new Error(`You are using not supported CSS by all specified browsers. ${val.message}`);
            }
        }),
        flexBugsFixes(),
        warnCleaner({ignoreFiles: '**/select2/select2.css'})
    ]
};
