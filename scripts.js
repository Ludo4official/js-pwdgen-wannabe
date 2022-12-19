const nome = prompt('Come ti chiami?')
console.log('Il nome inserito dall utente è', nome);

const cognome = prompt('Qual è il tuo cognome?');
console.log('Il cognome inserito dall utente è', cognome);

let megaPassword = nome + cognome;

const colore = prompt('Qual è il tuo colore preferito?');
console.log('Il colore inserito dall utente è', colore);

password = megaPassword + colore + '21';
console.log(password)

document.writeln(password)