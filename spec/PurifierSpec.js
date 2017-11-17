describe('Purifier', function() {

  var purifier;

  beforeEach(function() {
    purifier = new Purifier();
  });

  it('starts at 20 degrees', function() {
    expect(purifier.power).toEqual(3);
  });

  it('increases the temperature with up', function() {
    purifier.up();
    expect(purifier.getCurrentPower()).toEqual(4);
  });
});
