// input - array of logs ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
//output - array of log reordered so that letter logs come before digit logs
//constraints - 
//edge cases - empty array input, return empty array
//12:35



/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  let letterArray = [];
  //iterate through the log array, checking for letter logs
  for (var i = 0; i < logs.length; i++) {
    //if letter log, remove it from the array and add to letter log array
    let identifierLength = logs[i].indexOf(' ');
    //if its not a numeric digit remove from array
    if (!(logs[i][identifierLength + 1] >= 0 || logs[i][identifierLength + 1] <= 9)) {
      letterArray.push(logs.splice(i, 1)[0]);
      i--;
      // logs.splice(i, 1)
    }
  }
  //sort letter log array ignoring the identifier
  letterArray.sort((e1, e2) => {
    //find index of first space, compare everything after, if =, compare everything before
    let identifierLength1 = e1.indexOf(' ');
    let identifierLength2 = e2.indexOf(' ');
    return e2.slice(identifierLength2) > e1.slice(identifierLength1) ? -1 : e2.slice(identifierLength2) < e1.slice(identifierLength1) ? 1 : e2 > e1 ? -1 : 1; 
  })
  //concatenate sorted letter array in front of the digit array and return
  return letterArray.concat(logs)
};

console.log(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo","a2 act car"]))