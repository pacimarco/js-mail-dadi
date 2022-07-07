const num_utente = Math.floor(Math.random() * 6) + 1;
const num_pc = Math.floor(Math.random() * 6) + 1;

console.log (num_utente);
console.log (num_pc);

alert("Hai lanciato un dado e hai ottenuto " + num_utente + ".");
alert("Il computer ha ottenuto " + num_pc + ".");

if (num_utente > num_pc) {
  alert("Hai vinto!");

}else if (num_utente < num_pc) {
  alert("Hai perso!");

}else {
  alert("Pareggio!");
}
