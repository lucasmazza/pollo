# Pollo: a simple polling utility

**Pollo** is a simple polling utility that replays Ajax interactions with `jQuery.ajax` and `setTimeout`.

## Installation

Pollo is distributed through the [bower](http://twitter.github.com/bower/) package manager.

```
bower install pollo
```

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

Use [bower](http://twitter.github.com/bower/) to get Pollo dependencies running, [Mocha](http://visionmedia.github.com/mocha/), [chai.js](http://chaijs.com) and [jQuery](http://jquery.com). Then use `make` to start a simple web server on the project root:

```
bower install jquery chai mocha
make test
```

Now open [http://localhost:8000](http://localhost:8000) in your browser and have fun.

## License

Copyright (c) 2012 Lucas Mazza. See LICENSE file.