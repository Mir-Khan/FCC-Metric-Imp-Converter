/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

// converting functions and inputcheck
const inputRegex = new RegExp(/\d+\.\d+|[a-zA-z]+|\d+/gm);
// for the switch statement
const GAL = "gal";
const LIT = "l";
const LBS = "lbs";
const KG = "kg";
const MI = "mi";
const KM = "km";
// for validating unit input
const unitArr = [GAL, LIT, LBS, KG, MI, KM];

function ConvertHandler() {
  this.getNum = function(input) {
    var result = input.match(inputRegex).slice(0, input.match(inputRegex).length - 1);
    if (result.length === 0) {
      return result = 1;
    }
    if (isNaN(result[0]) && result.length === 1) {
      return "invalid number";
    }
    if (result.length > 1 && input.includes('/')) {
      if (result.length != 2) {
        return "invalid number";
      }
      result = parseFloat(result[0]) / parseFloat(result[1]);
      result = Math.floor(result * 100000) / 100000;
      return result;
    }
    return result[0];
  };

  this.getUnit = function(input) {
    var result;
    result = input.match(inputRegex)[input.match(inputRegex).length - 1];
    if (!unitArr.includes(result.toLowerCase())) {
      return "invalid unit";
    }
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result;

    switch (initUnit.toLowerCase()) {
      case GAL:
        result = LIT;
        break;
      case LIT:
        result = GAL;
        break;
      case LBS:
        result = KG;
        break;
      case KG:
        result = LBS;
        break;
      case MI:
        result = KM;
        break;
      case KM:
        result = MI;
        break;
    }

    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit) {
      case GAL:
        result = 'gallons';
        break;
      case LIT:
        result = 'liters';
        break;
      case LBS:
        result = 'pounds';
        break;
      case KG:
        result = 'kilograms';
        break;
      case MI:
        result = 'miles';
        break;
      case KM:
        result = 'kilometers';
        break;
    }

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    let num = parseFloat(initNum);

    switch (initUnit.toLowerCase()) {
      case GAL:
        result = num * galToL;
        break;
      case LIT:
        result = num / galToL;
        break;
      case LBS:
        result = num * lbsToKg;
        break;
      case KG:
        result = num / lbsToKg;
        break;
      case MI:
        result = num * miToKm;
        break;
      case KM:
        result = num / miToKm;
        break;
    }
    //dealing with the precision of result
    result = Math.floor(result * 100000) / 100000;

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    return result;
  };
}

module.exports = ConvertHandler;
