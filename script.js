const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const c5 = document.getElementById("c5");
const c6 = document.getElementById("c6");
const c7 = document.getElementById("c7");
const c8 = document.getElementById("c8");
const c9 = document.getElementById("c9");

let currentPlayer = "X";

function clickC1(){
    c1.textContent = currentPlayer;
    changePlayer();
}

function clickC2(){
    c2.textContent = currentPlayer;
    changePlayer();
}

function clickC3(){
    c3.textContent = currentPlayer;
    changePlayer();
}

function clickC4(){
    c4.textContent = currentPlayer;
    changePlayer();
}

function clickC5(){
    c5.textContent = currentPlayer;
    changePlayer();
}

function clickC6(){
    c6.textContent = currentPlayer;
    changePlayer();
}

function clickC7(){
    c7.textContent = currentPlayer;
    changePlayer();
}

function clickC8(){
    c8.textContent = currentPlayer;
    changePlayer();
}

function clickC9(){
    c9.textContent = currentPlayer;
    changePlayer();
}

function changePlayer(){
    if (currentPlayer == "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }
}

function playAgain(){
    c1.textContent = "";
    c2.textContent = "";
    c3.textContent = "";
    c4.textContent = "";
    c5.textContent = "";
    c6.textContent = "";
    c7.textContent = "";
    c8.textContent = "";
    c9.textContent = "";
}