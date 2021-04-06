// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, 
// sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.

// Se il numero è presente nella lista dei numeri generati, la partita termina, 
// altrimenti si continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” 
// o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio,
//  cioè il numero di volte che l’utente ha inserito un numero consentito.


// Generare 16 numeri casuali da 1 a 100 che non possono essere duplicati 
var numeroMax = 100;
var numeroBombe = 16;

var arrayBombe = [];

// Fintanto che la lunghezza di arrayBombe è inferiore a 16, pushare numeri random in arrayBombe
while ( arrayBombe.length < numeroBombe ) {

    var bombeNumeri = numeroRandomBombe(numeroMax)

    if ( !arrayBombe.includes(bombeNumeri) ) {
        arrayBombe.push(bombeNumeri);
    }
}

// Adesso ho l'Array delle bombe (Yay!)

// Mi serve un Array vuoto per pusharci i numeri inseriti dall'utente
var arrayNumeriUtente = [];
// Devo dare per default che la bomba non viene trovata
var bombaTrovata = false;

// Creo un ciclo per far sí che l'utente pushi i numeri nell'Array
while ( arrayNumeriUtente.length < (numeroMax - numeroBombe) && bombaTrovata == false ) {
    var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 100'));

    if (numeroUtente > numeroMax) {
        alert('Devi inserire un numero da 1 a 100, non barare!');
    }

    var controlloBomba = trovaBombe(numeroUtente, arrayBombe)

    if (controlloBomba == false) {
        if ( !arrayNumeriUtente.includes(numeroUtente)) {
            arrayNumeriUtente.push(numeroUtente);
        } else {
            alert('Hai già inserito questo numero! Non va bene!')
        }
    } else {
        bombaTrovata = true; 
        alert ('BOOM! Hai trovato una bomba!');
    }
}

// console.log('Le bombe sono:' + arrayBombe);
// console.log('I numeri utente sono' + arrayNumeriUtente)


// STAMPO IL RISULTATO
var totalScore = arrayNumeriUtente.length; 

if ( bombaTrovata == false ) {
    document.getElementById('score').innerHTML = "Hai vinto! Il tuo punteggio è : " + totalScore;
} else {
    document.getElementById('score').innerHTML = "Hai perso! Il tuo punteggio è : " + totalScore;
}


// Creo una funzione per generare numeri automaticamente indipendentemente dal valore di numeroMax
function numeroRandomBombe () {
    return Math.floor(Math.random() * numeroMax) + 1;
}

// Scrivo una funzione per controllare se l'utente trova una bomba 
function trovaBombe (numeroInserito, bombe) {
    var trovata = false;
    var i = 0;
    while ( i < bombe.length && trovata == false ) {
        var elemento = bombe[i];
        if ( numeroInserito == elemento ) {
            trovata = true;
        }

        i++;
    }
    return trovata
}

