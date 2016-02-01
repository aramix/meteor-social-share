# aramix:social-share
Forked from ipstas:social-share

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
{{> lmSocialShare opts=opts}}
```

```js
if(Meteor.isClient) {
  Template.socialShareBasic.helpers({
    opts: function() {
      var opts ={
        facebook: true,
        twitter: true,
        pinterest: true,
        shareData: {
          url: 'http://google.com'
        },
        customClasses: {
          facebook: 'btn-xs btn-sm btn-lg',
          twitter: 'btn-xs btn-sm btn-lg',
          pinterest: 'btn-xs btn-sm btn-lg' // whatever else you want
        }
      };
      return opts;
    }
  });
}
```

Then style as needed with the `lm-social-share-btn` and `lm-social-share-facebook`, `lm-social-share-twitter`, `lm-social-share-pinterest` classes.