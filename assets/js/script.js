// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const genera = document.querySelector('button');
const limit = 100;
const nodo = document.getElementById('node');

genera.addEventListener('click', function(){
    createGrid(nodo, limit);
})

function createGrid(domElement, limit){
    for (let i = 0; i < limit; i++) {
        const buildElement = document.createElement('div');
        buildElement.innerHTML = (i + 1);
        buildElement.classList.add('cube');
        domElement.append(buildElement);
    
        buildElement.addEventListener('click', function(){
            buildElement.classList.toggle('bg-azure');
            console.log(buildElement.innerHTML);
        })

    }

}