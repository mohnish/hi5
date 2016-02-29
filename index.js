var md5 = require('blueimp-md5');
var Firebase = require('firebase');

/**
 * Hi5 constructor
 * @param {Object} options Customization options
 * options
 * 	- color
 * 	- backgroundColor
 * 	- feedback
 */
function Hi5(options) {
  this.options = options || {
    backgroundColor: '#BADA55',
    color: '#333',
  };

  this.el = document.querySelector('hi5');
  this.store = new Firebase('https://hi5.firebaseio.com');
}

Hi5.prototype.template = function () {
  var str = '<div class="hi5-feedback">';
  str += '</div>';

  return str;
};

Hi5.prototype.sanitize = function (url) {
  var location = document.location;
  return md5(location.protocol + '//' + location.host + location.pathname);
};

(function(window, document) {
  var element = document.querySelector('#hi5')
    , feedback = document.querySelector('.hi5-feedback')
    , hi5ed = false
    , db = new Firebase('https://hi5.firebaseio.com')
    , timerId = null
    , id
    , url
    , value = {}
    , count
    , isNew;
  window.hi5 = {};

  hi5.sanitizedUrl = function(hashed) {
    if (hashed) {
      return md5(document.location.protocol + '//' + document.location.host + document.location.pathname);
    } else {
      return document.location.protocol + '//' + document.location.host + document.location.pathname;
    }
  };

  hi5.handleHi5 = function() {
    hi5.hideFeedback();
    hi5.updateCount();
    hi5.setCookie();
    hi5.removeEvents();
    hi5.changeFeedbackText('Thanks!');
    hi5.showFeedback();
  };

  hi5.updateCount = function() {
    value = {url: url, count: ++count};
    if (isNew) {
      db.child(id).set(value);
    } else {
      db.child(id).update({count: count});
    }
  };

  hi5.setCookie = function() {
    cookie.set(id, true);
  };

  hi5.hideFeedback = function() {
    if ('hi5-feedback' == feedback.className) feedback.className += ' hi5-hide';
    feedback.className = feedback.className.replace(/hi5-show/g, 'hi5-hide');
  };

  hi5.showFeedback = function() {
    feedback.className = feedback.className.replace(/hi5-hide/g, 'hi5-show');
  };

  hi5.changeFeedbackText = function(text) {
    feedback.innerHTML = text;
  };

  hi5.onMouseOver = function(e) {
    hi5.changeFeedbackText("Don't Move");
    hi5.showFeedback();
    timerId = window.setTimeout(hi5.handleHi5, 1000);
  };

  hi5.onMouseOut = function(e) {
    window.clearTimeout(timerId);
    hi5.hideFeedback();
  };

  hi5.attachEvents = function() {
    element.addEventListener('mouseover', hi5.onMouseOver);
    element.addEventListener('mouseout', hi5.onMouseOut);
  };

  hi5.removeEvents = function() {
    element.removeEventListener('mouseover', hi5.onMouseOver);
    element.removeEventListener('mouseout', hi5.onMouseOut);
  };

  hi5.setup = function() {
    if (!element) return;

    id = hi5.sanitizedUrl(true);
    url = hi5.sanitizedUrl();

    db.child(id).on('value', function(snapshot) {
      var retrievedValue = snapshot.val() && snapshot.val().count;
      if (retrievedValue) {
        count =  retrievedValue;
        isNew = false;
      } else {
        count = 0;
        isNew = true;
      }
      element.innerHTML = count;
    });

    hi5.hideFeedback();

    if ( "true" != cookie.get(id)) {
      hi5.attachEvents();
      hi5.changeFeedbackText('Hi5!');
      hi5.showFeedback();
    } else {
      hi5.changeFeedbackText('Thanks!');
      hi5.showFeedback();
    }
  };

  hi5.setup();
})(window, document);
