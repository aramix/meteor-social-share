lmSocialShare ={};

lmSocialSharePrivate ={};

/**
	@param {String} btnId The html element to attach click (and touch) event handlers to
	@param {String} type One of 'facebook', 'twitter', 'pinterest'
	@param {Object} shareData
  @param {String} url
  @param {String} description [Pinterest only]
  @param {String} image [Pinterest only]
  //@param {String} title [Email only]
  @param {String} [defaultShareText] The default tweet/fb post/etc. text to pre-populate (user can alter)
*/

xlazzSocialLink = function(params, shareData) {
	var sharedUrl = location.href;
	var type = params.currentTarget.id;
  var link;
  if(type ==='xlazz-facebook') {
    link ='https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(sharedUrl);
  }
  else if(type ==='xlazz-twitter') {
    link ='https://twitter.com/share?url='+encodeURIComponent(sharedUrl);
    if(shareData.defaultShareText !==undefined) {
      link +='&text='+encodeURIComponent(shareData.defaultShareText);
    }
  }
  else if(type ==='xlazz-pinterest') {
    link ='http://pinterest.com/pin/create/button/?url='+encodeURIComponent(sharedUrl)+'&media='+encodeURIComponent(shareData.image)+'&description='+encodeURIComponent(shareData.description);
  }
  return link;
};

/* lmSocialSharePrivate.triggerLink = function(params) {
  if(params.link) {
    if(Meteor.isCordova) {
      window.open(params.link, "_blank", "location=yes");
    }
    else {
      window.open(params.link, "", "height=440,width=640,scrollbars=yes");
    }
  }
};

Template.lmSocialShare.created = function() {
  this.instid = new ReactiveVar(Random.id(7));
}; */

Template.lmSocialShare.helpers({

});

Template.lmSocialShare.events({
  'click .xlazz-social-share-btn': function(event, template) {
		var link = xlazzSocialLink(event, this.opts.shareData);
		console.log('lmSocialShare click', event, this, link);
    if(Meteor.isCordova) 
      window.open(link, "_blank", "location=yes");
    else 
      window.open(link, "", "height=440,width=640,scrollbars=yes");
    
	}
});
