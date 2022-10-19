// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


//faccio iniziare il gioco quando si clicca sul pulsante inizia
const initBtn = document.getElementById("btn");

//il container dei numeri
const domContainer = document.getElementById("container");


initBtn.addEventListener("click", function () {

    initBtn.style.visibility = "hidden";


    let timerSeconds = 30;

    //faccio creare le celle dei numeri nella dom
    const randomNumbers = createRandomNumbers(domContainer);

    //variabile per i numeri che inserirà l'user
    let userNumbers = []

    //quando viene cliccato faccio partire un timer di 30 secondi e faccio visualizzare i numeri
    toggleContainer(domContainer);

    //adesso faccio il timer dei 30 secondi

    var timeLeft = 30;
    let elem = document.getElementById('timer-text');

    var timerId = setInterval(function () {
        if (timeLeft == -1) {

            clearTimeout(timerId);

            //se il tempo arriva a 0 faccio quanto sotto

            //disabilito la griglia
            toggleContainer(domContainer);

            //chiedo i numeri all'utente
            const muTimeout = setTimeout(function () {

                userNumbers = askNumbers();

                //stampo il risultato
                getResult(randomNumbers, userNumbers)

            }, 500)

        } else {
            elem.innerHTML = timeLeft;
            timeLeft--;
        }
    }, 1000);
})



//funzione che crea nel container 5 numeri casuali, e li ritorna come risultato
function createRandomNumbers(domEl) {

    let randomNumbers = []

    //creo i numeri random e li aggiungo alla cella nella dom
    for (i = 0; i < 5; i++) {
        const randomNum = generateRandomNumber(1, 99);

        const cellaEl = generateCellMarkup(randomNum);

        //inserisco l'elemento creato nell'elemento della dom passato a parametro
        domEl.insertAdjacentElement('beforeend', cellaEl);

        randomNumbers.push(randomNum)
    }

    return randomNumbers
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
function askNumbers() {
    let numbers = []

    for (i = 0; i < 5; i++) {

        let userNum = Number(prompt("Inserisci uno dei numeri visti: "))

        numbers.push(userNum)

    }

    return numbers
}


//funzione genero il risultato
/**
 * 
 * @param {array} randomNumbers 
 * @param {array} userNumbers 
 */
function getResult(randomNumbers, userNumbers) {

    let resultString = "";

    //stampo il risultato e dico di ricaricare la pagina per ricominciare
    const resultTextEl = document.getElementById("result");
    console.log(randomNumbers);
    console.log(userNumbers);
    //confronto i array e vedo quanti ne ha indovinati

    //ordino i 2 array e poi li confronto l'un l'altro
    randomNumbers.sort()
    userNumbers.sort()

    console.log(randomNumbers);
    console.log(userNumbers);
    for (i = 0; i < randomNumbers.lenght; i++) {

        let trovato = false
        //per confrontare 2 array per ognuno del primo ciclo il secondo e cerco il diretto interessato
        for (k = 0; k < userNumbers.lenght; k++) {

            if (userNumbers[k] == randomNumbers[i]) {
                trovato = true
            }

        }

        if (trovato == true) {
            console.log("hai vinto");
            //ha indovinato il numero
            resultString += "Hai indovinato il numero " + randomNumbers[i] + " bravo!" + "\n"
        } else {
            console.log("hai perso");
            //non lo ha indovinato
            resultString += "Non hai indovinato il numero " + randomNumbers[i] + " , mi dispiace..." + "\n"
        }
    }

    resultTextEl.innerText = resultString + "\n" + "Ricarica la pagina per ricominciare"
}

