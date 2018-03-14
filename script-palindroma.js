var word = prompt("Inserisci una parola per verificare se è palindroma:");

var characters = new Array();
var charactersReverse = new Array();
var check = false;

characters = Array.from(word);
charactersReverse = Array.from(word).reverse();

console.log(characters);
console.log(charactersReverse);

for (var i = 0; i < characters.length; i++) {
   if ( characters[i] == charactersReverse[i] ) {
      check = true;
   } else {
      check = false;
      break;
   }
}

if (check == true) {
   document.write("La parola " + word + " è palindroma");
} else {
   document.write("La parola " + word + " non è palindroma");
}
