Package.describe({
  name: 'aramix:social-share',
  version: '1.0.3',
  // Brief, one-line summary of the package.
  summary: 'Forked from lukemadera:social-share. Now supports bootstrap and optional classes for social buttons.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/aramix/meteor-social-share',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
	api.use('tanis:bootstrap-social@0.1.1');

  Cordova.depends({
    'org.apache.cordova.inappbrowser': '0.6.0'
  });

  api.addFiles([
    'social-share.html',
    'social-share.css',
    'social-share-svg.js',
    'social-share.js'
  ], 'client');

  api.export('amxSocialShare');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('aramix:social-share');
  api.addFiles('social-share-tests.js');
});
