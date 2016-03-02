upperCaseFirstLetters("something to uppercase");
upperCaseFirstLetters("output");
upperCaseFirstLetters("nathan t white");
upperCaseFirstLetters("      hello there     ");


function upperCaseFirstLetters(aStr) {
  var cleaned = aStr.trim(); //removes whitespace on either end of string
  var words = cleaned.split(" ");
  var output = [];

  for(var i = 0; i < words.length; i++) {
    var word = words[i];
    var upperCased = word.charAt(0).toUpperCase() + word.slice(1);
    //return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
    output.push(upperCased);
  }
  console.log(output.join(" "));
  return output.join(" ");
}
  //or can write = cleaned.charAt(0).toUpperCase() + cleaned.substring(1);
