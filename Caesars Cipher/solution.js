function rot13(str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // get the alphabet in english language 
    
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let index = alphabet.indexOf(str[i]); // find the index of the letter in the alphabet
        if(index === -1) // if the letter is not in the alphabet
        {
           result += str[i]; // add the letter to the result
        } else {
            let newIndex = (index + 13)%26; // 13 is the number of letters to shift
            result += alphabet[newIndex]; // add the new letter to the result
        }
        
    }
    return result;
};
console.log(rot13("SERR PBQR PNZC"));