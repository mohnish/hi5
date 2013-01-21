## hi5

hi5 is a simple script that allows users to hi5 a web page. It updates the hi5 count in **realtime**. (TODO: video showing the realtime hi5 count updates)

### Demo

Check out the demo here: [http://mohni.sh/hi5/](http://mohni.sh/hi5/ "Hi5")

### Setup

- Create a firebase account and setup a firebase API endpoint. (TODO: detailed explanation)
- Update the reference in the code. (TODO: detailed explanation)
- Add `<link rel="stylesheet" href="hi5.css">` to your `head` section.
- Add `<script src="hi5.js"></script>` in the `body` section right before the closing (`</body>`) tag.
- Add the following in your code, where you want to display your hi5's:


		<div class="hi5-container">
  			<div id="hi5"></div>
		    <div class="hi5-feedback"></div>
		</div>


### Screenshots

[![](http://i.imgur.com/f6xS0Pk.png)](http://mohni.sh/hi5/)

### Dependencies

- [MD5.js](http://www.myersdaily.org/joseph/javascript/md5-text.html)
- [Cookie.js](https://github.com/js-coder/cookie.js)

Inspired by the kudos feature of [Svbtle](http://svbtle.com).

## <3

Built with Firebase and lots of [<3](http://twitter.com/arrowgunz)!

## License

MIT