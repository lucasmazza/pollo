var expect = chai.expect;

for (var i = window.adapters.length - 1; i >= 0; i--){
  var name = window.adapters[i],
      $    = window[name];

  describe('Pollo abort with ' + name, function() {
    beforeEach(function() {
      this.pollo = new Pollo('/test/endpoint.json', 0);
    });

    it("aborts the polling", function() {
      this.pollo.start();
      this.pollo.abort();
      expect(this.pollo.aborted).to.equal(true);
    });
  });
}