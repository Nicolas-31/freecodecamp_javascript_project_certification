function palindrome(str) {
    let newStr = str
    .toLowerCase()
    .replace(/[^a-z\d]/g,'')
    
    return newStr.split('').reverse().join('') === newStr;
  }
  
  console.log(palindrome("2_A3*3#A2"));