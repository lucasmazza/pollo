//= require 'jquery'

;(function() {

  function Pollo(endpoint, timeout) {
    this.endpoint = endpoint;
    this.timeout  = timeout;
    this.emitter  = $({});
  }

  Pollo.prototype.start = function() {
    this.execute();
  }

  Pollo.prototype.stop = function() {
    clearTimeout(this.timer);
  }

  Pollo.prototype.on = function(callback, fn) {
    this.emitter.on(callback, fn);
  }

  Pollo.prototype.execute = function() {
    this.before();

    $.ajax(this.endpoint)
      .then($.proxy(this, 'success'))
      .always($.proxy(this, 'done'));
  }

  Pollo.prototype.before = function() {
    this.emitter.trigger('before', arguments);
  }

  Pollo.prototype.done = function() {
    this.enqueue();
    this.emitter.trigger('done', arguments);
  }

  Pollo.prototype.success = function() {
    this.emitter.trigger('success', arguments);
  }

  Pollo.prototype.enqueue = function() {
    this.timer = setTimeout($.proxy(this, 'execute'), this.timeout);
  }

  if ('undefined' == typeof module) {
    window.Pollo = Pollo;
  } else {
    module.exports = Pollo;
  }
})();