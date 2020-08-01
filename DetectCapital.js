/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if(word.length <= 1){
    return true;
  }
    const isCapitalLetter = (letter) => {
        return letter !== letter.toLowerCase();
    }
    //if first letter is caps
    if (isCapitalLetter(word[0])){
      //if second letter is caps, check that all letters are caps
      if(isCapitalLetter(word[1])){
        for(var i = 2; i < word.length; i++){
          if (!isCapitalLetter(word[i])){
            return false
          }
        }
        return true;
      }
      //if second letter is not caps, check that all remaining letters are lowercase
      if(!isCapitalLetter(word[1])){
        for(var i = 2; i < word.length; i++){
          if (isCapitalLetter(word[i])){
            return false
          }
        }
        return true;
      }
    }
    //first letter not caps 
    if (!isCapitalLetter(word[0])){
      //check that all remaining letters are lowercase
      for(var i = 1; i < word.length; i++){
        if (isCapitalLetter(word[i])){
          return false
        }
      }
      return true;
    }
};

console.log(detectCapitalUse('tEst'));
console.log(detectCapitalUse('Tst'));
console.log(detectCapitalUse('ETA'));
console.log(detectCapitalUse('E'));
console.log(detectCapitalUse('tA'));