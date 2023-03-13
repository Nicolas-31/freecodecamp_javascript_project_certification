function convertToRoman(num) {
   // object lookup for roman numerals
    const numeralsLookup = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };
    let romanizedStr = '';

    // get the keys of the object and reverse them
    const decimalNumbers = Object.keys(numeralsLookup).reverse();
    decimalNumbers.forEach(key => {
      while(key <= num){
        romanizedStr += numeralsLookup[key];
        num -= key;
      }
    });
   return romanizedStr;
  }
  console.log(convertToRoman(36));