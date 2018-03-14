var mailsAdress = ["alessandro.lausdei@gmail.com", "davide.lecci@gmail.com",
                   "fabio.forghieri@gmail.com", "samuel.poma@gmail.com"];

var newMail = prompt("Inserisci la tua mail: ");
var count = 0;

for (var i = 0; i < mailsAdress.length; i++) {
   if ( newMail == mailsAdress[i] ) {
      count++;
   }
}

if ( count == 1 ) {
   alert("Puoi entrare, Benvenuto!");
} else {
   alert("Attenzione, non sei registrato. Accesso negato!");
}
