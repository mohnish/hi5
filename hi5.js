function md5cycle(x, k) {
var a = x[0], b = x[1], c = x[2], d = x[3];

a = ff(a, b, c, d, k[0], 7, -680876936);
d = ff(d, a, b, c, k[1], 12, -389564586);
c = ff(c, d, a, b, k[2], 17,  606105819);
b = ff(b, c, d, a, k[3], 22, -1044525330);
a = ff(a, b, c, d, k[4], 7, -176418897);
d = ff(d, a, b, c, k[5], 12,  1200080426);
c = ff(c, d, a, b, k[6], 17, -1473231341);
b = ff(b, c, d, a, k[7], 22, -45705983);
a = ff(a, b, c, d, k[8], 7,  1770035416);
d = ff(d, a, b, c, k[9], 12, -1958414417);
c = ff(c, d, a, b, k[10], 17, -42063);
b = ff(b, c, d, a, k[11], 22, -1990404162);
a = ff(a, b, c, d, k[12], 7,  1804603682);
d = ff(d, a, b, c, k[13], 12, -40341101);
c = ff(c, d, a, b, k[14], 17, -1502002290);
b = ff(b, c, d, a, k[15], 22,  1236535329);

a = gg(a, b, c, d, k[1], 5, -165796510);
d = gg(d, a, b, c, k[6], 9, -1069501632);
c = gg(c, d, a, b, k[11], 14,  643717713);
b = gg(b, c, d, a, k[0], 20, -373897302);
a = gg(a, b, c, d, k[5], 5, -701558691);
d = gg(d, a, b, c, k[10], 9,  38016083);
c = gg(c, d, a, b, k[15], 14, -660478335);
b = gg(b, c, d, a, k[4], 20, -405537848);
a = gg(a, b, c, d, k[9], 5,  568446438);
d = gg(d, a, b, c, k[14], 9, -1019803690);
c = gg(c, d, a, b, k[3], 14, -187363961);
b = gg(b, c, d, a, k[8], 20,  1163531501);
a = gg(a, b, c, d, k[13], 5, -1444681467);
d = gg(d, a, b, c, k[2], 9, -51403784);
c = gg(c, d, a, b, k[7], 14,  1735328473);
b = gg(b, c, d, a, k[12], 20, -1926607734);

a = hh(a, b, c, d, k[5], 4, -378558);
d = hh(d, a, b, c, k[8], 11, -2022574463);
c = hh(c, d, a, b, k[11], 16,  1839030562);
b = hh(b, c, d, a, k[14], 23, -35309556);
a = hh(a, b, c, d, k[1], 4, -1530992060);
d = hh(d, a, b, c, k[4], 11,  1272893353);
c = hh(c, d, a, b, k[7], 16, -155497632);
b = hh(b, c, d, a, k[10], 23, -1094730640);
a = hh(a, b, c, d, k[13], 4,  681279174);
d = hh(d, a, b, c, k[0], 11, -358537222);
c = hh(c, d, a, b, k[3], 16, -722521979);
b = hh(b, c, d, a, k[6], 23,  76029189);
a = hh(a, b, c, d, k[9], 4, -640364487);
d = hh(d, a, b, c, k[12], 11, -421815835);
c = hh(c, d, a, b, k[15], 16,  530742520);
b = hh(b, c, d, a, k[2], 23, -995338651);

a = ii(a, b, c, d, k[0], 6, -198630844);
d = ii(d, a, b, c, k[7], 10,  1126891415);
c = ii(c, d, a, b, k[14], 15, -1416354905);
b = ii(b, c, d, a, k[5], 21, -57434055);
a = ii(a, b, c, d, k[12], 6,  1700485571);
d = ii(d, a, b, c, k[3], 10, -1894986606);
c = ii(c, d, a, b, k[10], 15, -1051523);
b = ii(b, c, d, a, k[1], 21, -2054922799);
a = ii(a, b, c, d, k[8], 6,  1873313359);
d = ii(d, a, b, c, k[15], 10, -30611744);
c = ii(c, d, a, b, k[6], 15, -1560198380);
b = ii(b, c, d, a, k[13], 21,  1309151649);
a = ii(a, b, c, d, k[4], 6, -145523070);
d = ii(d, a, b, c, k[11], 10, -1120210379);
c = ii(c, d, a, b, k[2], 15,  718787259);
b = ii(b, c, d, a, k[9], 21, -343485551);

x[0] = add32(a, x[0]);
x[1] = add32(b, x[1]);
x[2] = add32(c, x[2]);
x[3] = add32(d, x[3]);

}

function cmn(q, a, b, x, s, t) {
a = add32(add32(a, q), add32(x, t));
return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function md51(s) {
txt = '';
var n = s.length,
state = [1732584193, -271733879, -1732584194, 271733878], i;
for (i=64; i<=s.length; i+=64) {
md5cycle(state, md5blk(s.substring(i-64, i)));
}
s = s.substring(i-64);
var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
for (i=0; i<s.length; i++)
tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
tail[i>>2] |= 0x80 << ((i%4) << 3);
if (i > 55) {
md5cycle(state, tail);
for (i=0; i<16; i++) tail[i] = 0;
}
tail[14] = n*8;
md5cycle(state, tail);
return state;
}

/* there needs to be support for Unicode here,
 * unless we pretend that we can redefine the MD-5
 * algorithm for multi-byte characters (perhaps
 * by adding every four 16-bit characters and
 * shortening the sum to 32 bits). Otherwise
 * I suggest performing MD-5 as if every character
 * was two bytes--e.g., 0040 0025 = @%--but then
 * how will an ordinary MD-5 sum be matched?
 * There is no way to standardize text to something
 * like UTF-8 before transformation; speed cost is
 * utterly prohibitive. The JavaScript standard
 * itself needs to look at this: it should start
 * providing access to strings as preformed UTF-8
 * 8-bit unsigned value arrays.
 */
function md5blk(s) { /* I figured global was faster.   */
var md5blks = [], i; /* Andy King said do it this way. */
for (i=0; i<64; i+=4) {
md5blks[i>>2] = s.charCodeAt(i)
+ (s.charCodeAt(i+1) << 8)
+ (s.charCodeAt(i+2) << 16)
+ (s.charCodeAt(i+3) << 24);
}
return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n)
{
var s='', j=0;
for(; j<4; j++)
s += hex_chr[(n >> (j * 8 + 4)) & 0x0F]
+ hex_chr[(n >> (j * 8)) & 0x0F];
return s;
}

function hex(x) {
for (var i=0; i<x.length; i++)
x[i] = rhex(x[i]);
return x.join('');
}

function md5(s) {
return hex(md51(s));
}

/* this function is much faster,
so if possible we use it. Some IEs
are the only ones I know of that
need the idiotic second function,
generated by an if clause.  */

function add32(a, b) {
return (a + b) & 0xFFFFFFFF;
}

if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
function add32(x, y) {
var lsw = (x & 0xFFFF) + (y & 0xFFFF),
msw = (x >> 16) + (y >> 16) + (lsw >> 16);
return (msw << 16) | (lsw & 0xFFFF);
}
}
/***********END OF MD5.js************/
// Copyright (c) 2012 Florian H., https://github.com/js-coder https://github.com/js-coder/cookie.js
!function(e,t){var n=function(){return n.get.apply(n,arguments)};n.utils=utils={isArray:Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},isPlainObject:function(e){return!!e&&Object.prototype.toString.call(e)==="[object Object]"},toArray:function(e){return Array.prototype.slice.call(e)},getKeys:Object.keys||function(e){var t=[],n="";for(n in e)e.hasOwnProperty(n)&&t.push(n);return t},escape:function(e){return String(e).replace(/[,;"\\=\s%]/g,function(e){return encodeURIComponent(e)})},retrieve:function(e,t){return e==null?t:e}},n.defaults={},n.expiresMultiplier=86400,n.set=function(n,r,i){if(utils.isPlainObject(n))for(var s in n)n.hasOwnProperty(s)&&this.set(s,n[s],r);else{i=utils.isPlainObject(i)?i:{expires:i};var o=i.expires!==t?i.expires:this.defaults.expires||"",u=typeof o;u==="string"&&o!==""?o=new Date(o):u==="number"&&(o=new Date(+(new Date)+1e3*this.expiresMultiplier*o)),o!==""&&"toGMTString"in o&&(o=";expires="+o.toGMTString());var a=i.path||this.defaults.path;a=a?";path="+a:"";var f=i.domain||this.defaults.domain;f=f?";domain="+f:"";var l=i.secure||this.defaults.secure?";secure":"";e.cookie=utils.escape(n)+"="+utils.escape(r)+o+a+f+l}return this},n.remove=function(e){e=utils.isArray(e)?e:utils.toArray(arguments);for(var t=0,n=e.length;t<n;t++)this.set(e[t],"",-1);return this},n.empty=function(){return this.remove(utils.getKeys(this.all()))},n.get=function(e,n){n=n||t;var r=this.all();if(utils.isArray(e)){var i={};for(var s=0,o=e.length;s<o;s++){var u=e[s];i[u]=utils.retrieve(r[u],n)}return i}return utils.retrieve(r[e],n)},n.all=function(){if(e.cookie==="")return{};var t=e.cookie.split("; "),n={};for(var r=0,i=t.length;r<i;r++){var s=t[r].split("=");n[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return n},n.enabled=function(){if(navigator.cookieEnabled)return!0;var e=n.set("_","_").get("_")==="_";return n.remove("_"),e},typeof define=="function"&&define.amd?define(function(){return n}):typeof exports!="undefined"?exports.cookie=n:window.cookie=n}(document);
/***********END OF cookie.min.js************/


/***********-hi5.js-************/
/*
 * Hi5
 * http://mohni.sh/hi5/
 *
 * Copyright 2013 Mohnish Thallavajhula <i@mohni.sh>
 * Released under MIT license
 * http://mohni.sh/
 */
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