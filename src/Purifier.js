function Purifier() {
  this.MINIMUM_POWER = 1;
  this.power = 3;
}

Purifier.prototype.getCurrentPower = function () {
  return this.power;
};

Purifier.prototype.up = function () {
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
