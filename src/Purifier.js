function Purifier() {
  this.MINIMUM_POWER = 1;
  this.DEFAULT_POWER = 3;
  this.power = this.DEFAULT_POWER;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 5;
  this.MAX_LIMIT_PSM_OFF = 7;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 4;
}

Purifier.prototype.getCurrentPower = function () {
  return this.power;
};

Purifier.prototype.up = function () {
  if (this.isMaximumPower()){
    return;
  }
  this.power += 1;
};

Purifier.prototype.down = function () {
  if (this.isMinimumPower()) {
    return;
  }
  this.power -= 1;
};

Purifier.prototype.isMinimumPower = function () {
  return this.power === this.MINIMUM_POWER;
};

Purifier.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode === true;
};

Purifier.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Purifier.prototype.switchPowerSavingModeOn = function () {
  this.powerSavingMode = true;
};

Purifier.prototype.isMaximumPower = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.power === this.MAX_LIMIT_PSM_OFF;
  }
  return this.power === this.MAX_LIMIT_PSM_ON;
};

Purifier.prototype.resetPower = function() {
  this.power = this.DEFAULT_POWER;
};

Purifier.prototype.energyUsage = function() {
  if (this.power < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  if (this.power >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.power <= this.MAX_LIMIT_PSM_ON) {
    return 'medium-usage';
  }
  return 'high-usage';
};
