;(function() {

  function Pollo(endpoint, timeout) {
    this.endpoint = endpoint;
    this.timeout  = timeout;
    this.emitter  = $("<div />");
    this.aborted  = false;
  }

  Pollo.prototype.start = function() {
    this.aborted = false;
    this.execute();
  }

  Pollo.prototype.abort = function() {
    this.aborted = true;
    if(this.timer) {
      clearTimeout(this.timer);
    }

    if(this.ajax) {
      this.ajax.abort();
    }
  }

  Pollo.prototype.on = function(callback, fn) {
    this.emitter.on(callback, fn);
  }

  Pollo.prototype.execute = function() {
    this.before();

    var options = {
      url: this.endpoint,
      success: $.proxy(this, 'success'),
      complete: $.proxy(this, 'done')
    }

    this.ajax = $.ajax(options);
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
    if(!this.aborted) {
      this.timer = setTimeout($.proxy(this, 'execute'), this.timeout);
    }
  }

  if ('undefined' == typeof module) {
    window.Pollo = Pollo;
  } else {
    module.exports = Pollo;
  }
})();