/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const counterVowels = (string) => {
  let counter = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let i = 0; i < string.length; i++){
    if(vowels.includes(string[i].toLowerCase())) counter++;
  }
  return counter
}

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(counterVowels(word));
