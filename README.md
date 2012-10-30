# Pollo: a simple polling utility

## Usage

```javascript
var pollo = new Pollo("/your/api/endpoint.json", 1000);

pollo.on('before', function(event, xhr) {
  // do something before each request.
});

pollo.on('sucess', function(event, xhr) {
  // do something when each request is done.
});

// Start the polling.
pollo.start();
```

## Running tests

Use [bower](http://twitter.github.com/bower/) to get Pollo dependencies running, [mocha](https://visionmedia.github.com/mocha), [chai.js](http://chaijs.com) and [jQuery](http://jquery.com).

```
$ bower install jquery chai mocha
$ make test
```

Now open [http://localhost:8000](http://localhost:8000) in your browser.
