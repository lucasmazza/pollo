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