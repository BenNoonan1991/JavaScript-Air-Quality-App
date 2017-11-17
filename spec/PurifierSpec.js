describe('Purifier', function() {

  var purifier;

  beforeEach(function() {
    purifier = new Purifier();
  });

  it('starts on a power of 3', function() {
    expect(purifier.power).toEqual(3);
  });

  it('increases the power with up', function() {
    purifier.up();
    expect(purifier.getCurrentPower()).toEqual(4);
  });

  it('decreases the power with down', function(){
    purifier.down();
    expect(purifier.getCurrentPower()).toEqual(2);
  });
});
