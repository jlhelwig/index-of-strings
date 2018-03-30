// solve("((1)23(45))(aB)", 0) = 10 -- the opening brace at index 0 matches the closing brace at index 10
// solve("((1)23(45))(aB)", 1) = 3
// solve("((1)23(45))(aB)", 2) = -1 -- there is no opening bracket at index 2, so return -1
// solve("((1)23(45))(aB)", 6) = 9
// solve("((1)23(45))(aB)", 11) = 14
// solve("((>)|?(*'))(yZ)", 11) = 14


function solve(str,idx){
  var left = 1
  var right =0
  var place = str.charAt(idx);
    if (place != '(') {
      return -1;
    };
  for (i=idx+1; i< str.length; i++){
    if (str.charAt(i)==='('){
      left++
    };
    if (str.charAt(i)===')'){
      right++
    };
    if (left===right){
      console.log('index of ' +i);
      return i;
    };
  };
}




solve("((1)23(45))(aB)", 1)
solve("((1)23(45))(aB)", 2)
