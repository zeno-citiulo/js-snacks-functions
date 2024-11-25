/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const filterByInitials = (array, letter) => {
  const filteredNames = [];
  for(let i = 0; i <array.legth; i++){
    const initial = array[i][0];
    if(initial.toLowerCase() === letter.toLowerCase()){
      filteredNames.push(array[i])
    }
  }
  return filteredNames
}

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(filterByInitials(names, 'a'));
