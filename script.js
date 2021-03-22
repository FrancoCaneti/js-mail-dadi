//Esercizio Mail


//Mail utente
var emailUtente = prompt ('Inserisci la tua mail').toLocaleLowerCase();
console.log ('La tua mail è: ',emailUtente);

// Lista Mail
var listaEmail = ['tonystark@starkindustries.us', 'cap1942@avenger.it', 'hulk@smash.boom', 'god_of_the:thunder2@thor.asg']
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



//Esercizio Dadi

var
 