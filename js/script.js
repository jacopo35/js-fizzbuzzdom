/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100.
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
MILESTONE 3
Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
 */

// Scrivere un programma che stampi in console i numeri da 1 a 100
let i;

//creare un ciclo for da 1 a 100
for (i = 1; i <= 100; i++) {

//creare un if per le condizioni dei multipli
if (i % 3 == 0 && i % 5 !== 0) { //resto == 0 allora multiplo di 3
        console.log('Frizz');
 } else if (i % 3 !== 0 && i % 5 == 0) { //resto == 0 allora multiplo di 5
        console.log('Buzz');
} else if (i % 3 == 0 && i % 5 == 0) { //multipli di 15
        console.log('FrizzBuzz');
} else {
        console.log(i);
 }
}