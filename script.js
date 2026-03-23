const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const c5 = document.getElementById("c5");
const c6 = document.getElementById("c6");
const c7 = document.getElementById("c7");
const c8 = document.getElementById("c8");
const c9 = document.getElementById("c9");

const text = document.getElementById("text");

const velha = document.getElementById("velha");

let currentPlayer = "X";

function clickC1(){
    if (c1.textContent == ""){
        if (winner() == ""){
            c1.textContent = currentPlayer;
            changePlayer();
        }
    }
    if (winner() != ""){
        text.textContent = winner() + " WON!";
    }
}

function clickC2(){
    if (c2.textContent == ""){
        if (winner() == ""){
            c2.textContent = currentPlayer;
            changePlayer();
        }
    }
    if (winner() != ""){
        text.textContent = winner() + " WON!";
    }
}

function clickC3(){
    if (c3.textContent == ""){
        if (winner() == ""){
            c3.textContent = currentPlayer;
            changePlayer();
        }
    }
    if (winner() != ""){
        text.textContent = winner() + " WON!";
    }
}

function clickC4(){
    if (c4.textContent == ""){
        if (winner() == ""){
            c4.textContent = currentPlayer;
            changePlayer();
        }
    }
    if (winner() != ""){
        text.textContent = winner() + " WON!";
    }
}

function clickC5(){
    if (c5.textContent == ""){
        if (winner() == ""){
            c5.textContent = currentPlayer;
            changePlayer();
        }
    }
    if (winner() != ""){
        text.textContent = winner() + " WON!";
    }
}

function clickC6(){
    if (c6.textContent == ""){
        if (winner() == ""){
            c6.textContent = currentPlayer;
            changePlayer();
        }
    }
    if (winner() != ""){
        text.textContent = winner() + " WON!";
    }
}

function clickC7(){
    if (c7.textContent == ""){
        if (winner() == ""){
            c7.textContent = currentPlayer;
            changePlayer();
        }
    }
    if (winner() != ""){
        text.textContent = winner() + " WON!";
    }
}

function clickC8(){
    if (c8.textContent == ""){
        if (winner() == ""){
            c8.textContent = currentPlayer;
            changePlayer();
        }
    }
    if (winner() != ""){
        text.textContent = winner() + " WON!";
    }
}

function clickC9(){
    if (c9.textContent == ""){
        if (winner() == ""){
            c9.textContent = currentPlayer;
            changePlayer();
        }
    }
    if (winner() != ""){
        text.textContent = winner() + " WON!";
    }
}

function changePlayer(){
    if (currentPlayer == "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }
    text.textContent = "PLAYER " + currentPlayer;
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
    currentPlayer = "X";
    text.textContent = "PLAYER " + currentPlayer;
    velha.classList.replace('velha-opened', 'velha-closed');
}

function winner(){

    //Creating and filling the board
    let board =
    [
        [c1.textContent, c2.textContent, c3.textContent],
        [c4.textContent, c5.textContent, c6.textContent],
        [c7.textContent, c8.textContent, c9.textContent]
    ];

    
    let target = "";

    //Checking the - HORIZONTAL - winner
    for (let x = 0; x<=2; x++){

        //if there is a piece here...
        if (board[x][0] != ""){
            target = board[x][0];

            //if there are more two pieces in this row...
            if (board[x][1] == target && board[x][2] == target){
                //winner
                return target;
            }
        }
    }

    //Checking the - VERTICAL - winner
    for (let y = 0; y<=2; y++){

        //if there is a piece here...
        if (board[0][y] != ""){
            target = board[0][y];

            //if there are more two pieces in this row...
            if (board[1][y] == target && board[2][y] == target){
                //winner
                return target;
            }
        }
    }

    //Checking the - DIAGONAL - winner
    
    //if there is a piece here...
    if (board[0][0] != ""){
        
        target = board[0][0];
        
        //if there are more two pieces in this row...
        if (board[1][1] == target && board[2][2] == target){
            //winner
            return target;
        }
    }
    
    if (board[0][2] != ""){
        
        target = board[0][2];

        //if there are more two pieces in this row...
        if (board[1][1] == target && board[2][0] == target){
            //winner
            return target;
        }
    }

    //TIED
    if
    (
        c1.textContent != "" &&
        c2.textContent != "" &&
        c3.textContent != "" &&
        c4.textContent != "" &&
        c5.textContent != "" &&
        c6.textContent != "" &&
        c7.textContent != "" &&
        c8.textContent != "" &&
        c9.textContent != ""
    )
    {
        velha.classList.replace('velha-closed', 'velha-opened');
        return "a velha kkjk";
    }

    return "";
}