var expect = chai.expect;

for (var i = window.adapters.length - 1; i >= 0; i--){
  var name = window.adapters[i],
      $    = window[name];

  describe('Pollo callbacks with ' + name, function() {
    beforeEach(function() {
      this.server = sinon.fakeServer.create();

      this.server.respondWith(/\/success/, function (xhr, id) {
          xhr.respond(200, { "Content-Type": "application/json" }, '{"ok":true}');
      });

      this.server.respondWith(/\/fail/, function (xhr, id) {
          xhr.respond(404, { "Content-Type": "application/json" }, '{"ok":false}');
      });

      this.pollo = new Pollo('/success', 0);
    });

    it("uses " + name, function() {
      expect(window[name]).to.equal($);
    });

    afterEach(function() {
      this.server.restore();
      this.pollo.abort();
    });

    it("triggers 'success' and 'done' callbacks when the request is finished", function(done) {
      var success = sinon.spy();
      var finished = sinon.spy();

      this.pollo.on('success', success);
      this.pollo.on('done', finished)

      this.pollo.on('done', function() {
        expect(success.called).to.equal(true);
        expect(finished.called).to.equal(true);
        done();
      });

      this.pollo.start();
      this.server.respond();
    });

    it("triggers 'before' callbacks before firing the request", function(done) {
      var before = sinon.spy();
      this.pollo.on('before', before);

      this.pollo.on('done', function() {
        expect(before.called).to.equal(true);
        done();
      });

      this.pollo.start();
      this.server.respond();
    });

    it("triggers only the 'done' callback when the request fails", function(done) {
      this.pollo = new Pollo('/fail', 0);
      var success = sinon.spy();
      var finished = sinon.spy();

      this.pollo.on('success', success);
      this.pollo.on('done', finished)

      this.pollo.on('done', function() {
        expect(success.called).to.equal(false);
        expect(finished.called).to.equal(true);
        done();
      });

      this.pollo.start();
      this.server.respond();
    });
  });
};

