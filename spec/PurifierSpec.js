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

  it('has a minimum power of 1', function() {
    for (var i = 0; i < 2; i++) {
      purifier.down();
    }
    expect(purifier.getCurrentPower()).toEqual(1);
  });

  it('has a power saving mode that is on by default', function() {
    expect(purifier.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch PSM off', function(){
    purifier.switchPowerSavingModeOff();
    expect(purifier.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', function() {
  purifier.switchPowerSavingModeOff();
  expect(purifier.isPowerSavingModeOn()).toBe(false);
  purifier.switchPowerSavingModeOn();
  expect(purifier.isPowerSavingModeOn()).toBe(true);
  });

  describe('when power saving mode is on', function() {
    it('has a maximum power of 5', function() {
      for (var i = 0; i < 8; i++) {
        purifier.up();
      }
      expect(purifier.getCurrentPower()).toEqual(5);
    });
  });

  describe('when power saving mode is off', function() {
    it('has a maximum power of 7', function() {
      purifier.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        purifier.up();
      }
      expect(purifier.getCurrentPower()).toEqual(7);
    });
  });

  it('can be reset to the default power', function() {
    for (var i = 0; i < 8; i++) {
      purifier.up();
    }
    purifier.resetPower();
    expect(purifier.getCurrentPower()).toEqual(3);
  });

  describe('displaying usage levels', function() {
    describe('when the power is below 3 degrees', function() {
      it('it is considered low-usage', function() {
        for (var i = 0; i < 8; i++) {
          purifier.down();
        }
        expect(purifier.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when the temperature is 4 or 5', function() {
      it('it is considered medium-usage', function() {
        purifier.up();
        expect(purifier.energyUsage()).toEqual('medium-usage');
      });
    });

      describe('when the power above 5', function() {
          it('it is considered high-usage', function() {
            purifier.powerSavingMode = false;
            for (var i = 0; i < 8; i++) {
              purifier.up();
            }
            expect(purifier.energyUsage()).toEqual('high-usage');
          });
        });
      });
});
