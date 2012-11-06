var expect = chai.expect;

for (var i = window.adapters.length - 1; i >= 0; i--){
  var name = window.adapters[i],
      $    = window[name];

  describe('Pollo timer with ' + name, function() {
    beforeEach(function() {
      // this.clock = sinon.useFakeTimers();

      this.pollo = new Pollo('/test/endpoint.json', 0);
    });

    afterEach(function() {
      // this.clock.restore();
      this.pollo.stop();
    });

    it("uses " + name, function() {
      expect(window[name]).to.equal($);
    });

    it("fires requests periodically", function(done) {
      var counter = 0;

      this.pollo.on('success', function() {
        counter+= 1;
        if(counter == 3) {
          done();
        }
      });
      this.pollo.start();
    });
  });
}