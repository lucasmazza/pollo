var expect = chai.expect;

describe('Pollo timer', function() {
  beforeEach(function() {
    // this.clock = sinon.useFakeTimers();

    this.pollo = new Pollo('/test/endpoint.json', 0);
  });

  afterEach(function() {
    // this.clock.restore();
    this.pollo.stop();
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