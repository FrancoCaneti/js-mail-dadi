//Esercizio Mail


//Mail utente
var emailUtente = prompt ('Inserisci la tua mail').toLocaleLowerCase();
console.log ('La tua mail è: ',emailUtente);

// Lista Mail 
var listaEmail = ['tonystark@starkindustries.us', 'cap1942@avenger.us', 'hulk@smash.boom', 'god_of_the:thunder2@thor.asg']
console.log ('Database Email: ',listaEmail);

//Controllo Mail
var mailFound = false

for ( var i = 0; i < listaEmail.length; i++) {
  if(listaEmail[i] === emailUtente) {
       mailFound = true

   }
}

if (mailFound === true) {
 console.log('Email fornita valida. Buona giornata signor Stark...');
} else {
    console.log('Autenticazione fallita! Avviare protocollo di sicurezza!')
}

document.getElementById('mailFound').innerHTML = (mailFound)


//*************************************************************************************//


//Esercizio Dadi


//Numero Random Utente
var numeroUtente = Math.floor(Math.random()*6)+1;
console.log ('Numero  dado giocatore: ',numeroUtente);

//Numero Random Computer
var numeroComputer = Math.floor(Math.random()*6)+1;
console.log ('Numero  dado computer:',numeroComputer);

//Vincitore
var risultato ;


if (numeroUtente > numeroComputer){
   console.log (risultato = 'hai vinto')
} else if (numeroUtente < numeroComputer){
   console.log (risultato = 'Hai perso') 
} else if (numeroUtente == numeroComputer){
   console.log (risultato = 'Pareggio')
}




document.getElementById('risultato').innerHTML = ('Yazi: '+ risultato)