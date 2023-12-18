// 9. Hitta den längsta strängen (3p)
// Skriv en funktion findLongestString som tar en array av
// strängar som input och returnerar den längsta strängen från arrayen.

function findLongestString(strings) {
  // Din kod här

  let longestStr = "";
  //console.log(typeof strings)

  //And then use a forEach to loop trough every string

  strings.forEach((string) => {
    //console.log(string);
    //console.log(string.length)
    if(string.length > longestStr.length) {
      longestStr = string;
    }
  });
  return longestStr;

}

console.log(findLongestString(["apple", "banana", "orange", "kiwi"]));
// Ska logga: "banana"
console.log(findLongestString(["dog", "cat", "elephant", "lion"]));
// Ska logga: "elephant"
