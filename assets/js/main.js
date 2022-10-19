// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


//faccio iniziare il gioco quando si clicca sul pulsante inizia
const initBtn = document.getElementById("btn");

//il container dei numeri
const domContainer = document.getElementById("container");


initBtn.addEventListener("click", function () {



    let timerSeconds = 30;

    //faccio creare le celle dei numeri nella dom
    createRandomNumbers(domContainer);

    //quando viene cliccato faccio partire un timer di 30 secondi e faccio visualizzare i numeri
    toggleContainer(domContainer);

    //adesso faccio il timer dei 30 secondi

    var timeLeft = 30;
    let elem = document.getElementById('timer-text');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);

        //se il tempo arriva a 0 faccio quanto sotto
        askNumbers();
      } else {
        elem.innerHTML = timeLeft ;
        timeLeft--;
      }
    }




})



//funzione che crea nel container 5 numeri casuali
function createRandomNumbers(domEl) {

    //creo i numeri random e li aggiungo alla cella nella dom
    for (i = 0; i < 5; i++) {
        const randomNum = generateRandomNumber(1, 99);

        const cellaEl = generateCellMarkup(randomNum);

        //inserisco l'elemento creato nell'elemento della dom passato a parametro
        domEl.insertAdjacentElement('beforeend', cellaEl);

    }
}

//funzione toggle , fa sparire il container se presente e comparire se è sparito
function toggleContainer(domEl) {


    if (domEl.style.visibility == "") {

        domEl.style.visibility = "visible";
    } else if (domEl.style.visibility == "hidden") {

        domEl.style.visibility = "visible";
    } else {

        domEl.style.visibility = "hidden";
    }
}

//funzione per generare numero random
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione che genera un elemento cella
function generateCellMarkup(numb) {

    const cellEl = document.createElement('div');
    cellEl.className = "num-cell";
    cellEl.innerText = numb;

    return cellEl;

}

//funzione che chiede i nuemri con il prompt
function askNumbers(){
    let numbers = []


}

