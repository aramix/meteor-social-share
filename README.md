# aramix:social-share
Forked from lukemadera:social-share. Facebook, twitter, pinterest. Fork: bootstrap support. Optional classes can be added to the social buttons.

Cross platform (inc. Cordova) social sharing for facebook, twitter, pinterest


## Demo

[Demo](http://lukemadera-packages.meteor.com/social-share-basic)

[Source](https://github.com/lukemadera/meteor-packages/tree/master/social-share/basic)


## Dependencies

[none]


## Installation

In a Meteor app directory:
```bash
meteor add aramix:social-share
```


## Usage

```html
{{> amxSocialShare opts=opts}}
```

```js
if(Meteor.isClient) {
  Template.socialShare.helpers({
    opts: function() {
      var opts = {
        email: true,
        facebook: true,
        facebookMessage: true,
        gmail: true,
        googlePlus: true,
        linkedIn: true,
        pinterest: true,
        sms: true,
        twitter: true,
        url: true,
        shareData: {
          url: 'http://google.com',
          facebookAppId: '195380783916970',
          subject: 'test subject',
          body: 'test body',
          redirectUrl: 'http://localhost:3000/test'
        },
        customClasses: {
          facebook: 'btn-sm btn-lg',
          twitter: 'btn-sm btn-lg',
          pinterest: 'btn-sm btn-lg'
        }
      };
      return opts;
    }
  });
}
```

Then create your meta tags as needed. An example Iron.router meta tag script is in `router-social.js`.
You can test your meta tags with the Chrome Inspector by spoofing the User Agent to `Facebot` or `Twitterbot`.

For Cordova, add access rules to allow the links:

```js
// Social sharing
App.accessRule('*://*.facebook.com/*');
App.accessRule('*://*.fbcdn.net/*');
App.accessRule('*://*.gmail.com/*');
App.accessRule('*://*.google.com/*');
App.accessRule('*://*.linkedin.com/*');
App.accessRule('*://*.pinterest.com/*');
App.accessRule('*://*.twitter.com/*');

App.accessRule('mailto:*');
App.accessRule('sms:*');
```