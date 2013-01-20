(function(window, document) {
  var element = document.querySelector('#hi5')
    , feedback = document.querySelector('.feedback')
    , hi5ed = false
    , db = new Firebase('https://hi5.firebaseio.com')
    , timerId = null
    , id
    , url
    , value = {}
    , count
    , isNew;
  window.hi5 = {}

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
    value[id] = {url: url, count: ++count};
    if (isNew) {
      db.set(value);
    } else {
      db.child(id).update({count: count});
    }
  };

  hi5.setCookie = function() {
    cookie.set(id, true);
  };

  hi5.hideFeedback = function() {
    feedback.className = feedback.className.replace(/hi5-show/g, 'hi5-hide');
  };

  hi5.showFeedback = function() {
    feedback.className = feedback.className.replace(/hi5-hide/g, 'hi5-show');
  };

  hi5.changeFeedbackText = function(text) {
    feedback.innerHTML = text;
  };

  hi5.onMouseOver = function(e) {
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

    if ( "true" != cookie.get(id)) {
      hi5.attachEvents();
    } else {
      hi5.changeFeedbackText('Thanks!');
      hi5.showFeedback();
    }
  };

  hi5.setup();
})(window, document);