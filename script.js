let fields = [];
let gameOver = false;
let currentShape = 'morty';
let winner = false;

function fillShape(id) {
    if (!fields[id] && !gameOver) {// ! bedeutet negiert es kan nur noch einmal angeclickt werden 
        changeplayer();
        fields[id] = currentShape;
        console.log(fields);
        draw();
        checkForEqual();

    }
}
function changeplayer() {
    if (currentShape == 'morty') {// ist = morty
        currentShape = 'rick'; // dann wird rick eingefügt 
        document.getElementById('player-1').classList.add('palyer-inactiv');// rick wird ausgeblendet
        document.getElementById('player-2').classList.remove('palyer-inactiv');// morty wird ausgeblendet 
    } else {
        currentShape = 'morty'; //ansosten morty
        document.getElementById('player-1').classList.remove('palyer-inactiv');// umgekehrt moryt ausgeblendet 
        document.getElementById('player-2').classList.add('palyer-inactiv');// rick wird ausgeblendet
    }
}

//  spiel von neu beginnen          
function restart() {
    gameOver = false;
    fields = [];
    document.getElementById('RickWin').classList.add('d-none');
    document.getElementById('MortyWin').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');
    for (let i = 1; i < 9; i++) {
        document.getElementById('line-' + i).classList.add('d-none');
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('morty-' + i).classList.add('d-none');
        document.getElementById('rick-' + i).classList.add('d-none');
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'morty') {
            document.getElementById('morty-' + i).classList.remove('d-none');
        }
        if (fields[i] == 'rick') {
            document.getElementById('rick-' + i).classList.remove('d-none');
        }
    }
}

function checkForEqual() {
    checkForWinHorizontal();
    checkForWinVertikal();
    checkForWinDiagonl();
    checkForWinner();

    if (fields[0] && fields[1] && fields[2] && fields[3] && fields[4] && fields[5] && fields[6] && fields[7] && fields[8]) {
        restart();
    }
}


function checkForWinHorizontal() {

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)';//line wir duchgezogen wenn true
        document.getElementById('line-1').classList.remove('d-none');
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
        document.getElementById('line-2').classList.remove('d-none');
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
        document.getElementById('line-3').classList.remove('d-none');
    }

    checkForWinner();
}

//function popUpForRestart()

function checkForWinVertikal() {

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
        document.getElementById('line-5').classList.remove('d-none');
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
        document.getElementById('line-4').classList.remove('d-none');
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = ' rotate(90deg) scaleX(1)';
        document.getElementById('line-6').classList.remove('d-none');
    }
    checkForWinner();
}

function checkForWinDiagonl() {


    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1)';
        document.getElementById('line-7').classList.remove('d-none');
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1)';
        document.getElementById('line-8').classList.remove('d-none');
    }
    checkForWinner();
}

function checkForWinner() {

    if (winner) {
        console.log('Gewonnen:', winner);
        gameOver = true;
        winner = false;
        setTimeout(function () {
            document.getElementById('MortyWin').classList.remove('d-none')//bild wird eingeblendet bei gewinn 
            if (currentShape == 'morty') {
                document.getElementById('RickWin').classList.remove('d-none');
            }
            document.getElementById('restart-btn').classList.remove('d-none');
        }, 900);
    }
}

