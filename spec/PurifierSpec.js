describe('Purifier', function() {

  var purifier;

  beforeEach(function() {
    purifier = new Purifier();
  });

  it('starts at 20 degrees', function() {
    expect(purifier.temperature).toEqual(3);
  });
});
