var numGiocatori = prompt("Inserisci il numero di giocatori: ");
// console.log(numGiocatori);

var lanci = new Array();
var lancioDado = 0;

for (var i = 0; i < numGiocatori; i++) {
   lancioDado = Math.floor( (Math.random()*5) + 1 );
   lanci.push(lancioDado);
   document.write("Punteggio giocatore " + (i+1)+ " : " + lancioDado + "<br>" );

}
// console.log(lanci);
document.write("<br>");
for (var i = 0; i < lanci.length; i++) {
   for (var j = i + 1; j < lanci.length; j++) {

      if ( lanci[i] > lanci[j] ) {
         document.write("Giocatore " + (i+1) + " ha vinto contro " + "Giocatore " + (j+1) + "<br>" );
      }
      else if ( lanci[i] < lanci[j] ) {
         document.write("Giocatore " + (j+1) + " ha vinto contro " + "Giocatore " + (i+1) + "<br>" );
      }
      else {
         document.write("Giocatore " + (i+1) + " e Giocatore " + (j+1) + " hanno pareggiato" + "<br>" );
      }
   }
}
