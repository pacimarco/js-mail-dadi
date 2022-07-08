const mail_list = ['mariorossi@info.it','ugorossi@info.it','dariorossi@info.it','davidrossi@info.it'];

let mail_client = prompt ('Inserisci la tua mail') ;

let accesso = false;

for (let mail = 0; mail < mail_list.length; mail++) {
    console.log (mail_list[mail]);
    
    

    if (mail_client == mail_list[mail]) {
    alert ('accesso autorizzato');
    accesso = true;
    }   
}
    // console.log (mail_list[mail]);

if (accesso == true) {
    alert ('accesso autorizzato, benvenuto!');
} else {
    alert ('accesso negato,la tua mail non è presente nella lista, riprova.');
}
