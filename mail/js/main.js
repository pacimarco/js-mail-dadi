const mail_list = ['mariorossi@info.it','ugorossi@info.it','dariorossi@info.it','davidrossi@info.it'];

for (let mail = 0; mail < mail_list.length; mail++) {
    console.log (mail_list[mail]);
    
    let mail_client = prompt ('Inserisci la tua mail') ;

    if (mail_client == mail_list[mail]) {
    alert ('accesso autorizzato');
    }else {
        alert ('accesso negato, email non registrata, riprova');
    }
        
}
    // console.log (mail_list[mail]);


