module.exports = function toReadable (number) {
  
  const units = (un) => {
   
    switch (un) {
      case 0:
        return 'zero';
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      case 6:
        return 'six';
      case 7:
        return 'seven';
      case 8:
        return 'eight';
      case 9:
        return 'nine';
    }
}

const units19 = (un) => {
   
    switch (un) {
      case 0:
        return 'ten';
      case 1:
        return 'eleven';
      case 2:
        return 'twelve';
      case 3:
        return 'thirteen';
      case 4:
        return 'fourteen';
      case 5:
        return 'fifteen';
      case 6:
        return 'sixteen';
      case 7:
        return 'seventeen';
      case 8:
        return 'eighteen';
      case 9:
        return 'nineteen';
    }
}

  const tens = (t) => {
   
    switch (t) {
      case 3:
        return 'thirty';
      case 2:
        return 'twenty';
      case 4:
        return 'forty';
      case 5:
        return 'fifty';
      case 6:
        return 'sixty';
      case 7:
        return 'seventy';
      case 8:
        return 'eighty';
      case 9:
        return 'ninety';
    }
}

const getTeens = (gt) => {
  if (gt < 10) {return units(gt)}
  if (gt > 9 && gt < 20) {
    return (units19(gt % 10));
  } else {
    if (gt % 10 === 0) {
      return tens(gt / 10);
    } else {
      return (`${tens(Math.trunc(gt / 10))} ${units(gt % 10)}`);
    }
  }
  
}

if (String(number).length === 1) {
  return units(number);
}

if (String(number).length === 2) {
  
  return getTeens(number);
}

if (String(number).length === 3) {

  if (number % 100 === 0) {
    return (`${units(Math.trunc(number / 100))} hundred`)
  } else {
    return (`${units(Math.trunc(number / 100))} hundred ${getTeens(number - (Math.trunc(number / 100) * 100))}`);
  }
  
  
}


}
