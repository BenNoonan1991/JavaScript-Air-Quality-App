function Purifier() {
  this.power = 3;
}

Purifier.prototype.getCurrentPower = function () {
  return this.power;
};

Purifier.prototype.up = function () {
  this.power += 1;
};

Purifier.prototype.down = function () {
  this.power -= 1;
};
