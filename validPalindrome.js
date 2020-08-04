/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  let len = s.length;
  let halfLen = Math.floor(len / 2);
  for (var i = 0; i < halfLen; i++){
    if (s[i] != s[len - 1 - i]){
      return false;
    }
  }
  return true;
};

// console.log(isPalindrome("race a car"));