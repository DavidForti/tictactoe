let fields =[];

let currentShape = 'morty';

function fillShape(id){
    if(!fields[id]){// ! bedeutet negiert es kan nur noch einmal angeclickt werden 
        if (currentShape == 'morty'){// ist = morty
            currentShape = 'rick'; // dann wird rick eingefügt 
            document.getElementById('player-1').classList.remove('palyer-inactiv');// rick wird ausgeblendet
            document.getElementById('player-2').classList.add('palyer-inactiv');// morty wird ausgeblendet 
        }else{
            currentShape = 'morty'; //ansosten morty
            document.getElementById('player-2').classList.remove('palyer-inactiv');// umgekehrt moryt ausgeblendet 
            document.getElementById('player-1').classList.add('palyer-inactiv');// rick wird ausgeblendet
        }
        fields[id] = currentShape;
        console.log(fields);
        draw();
        checkForWin();
    }
}

function draw(){
    for (let i = 0; i < fields.length; i++) {
        if(fields[i] == 'morty'){
            document.getElementById('morty-'+i).classList.remove('d-none');
        }
        if(fields[i] == 'rick'){
            document.getElementById('rick-'+i).classList.remove('d-none');
        }

        
    }
}
function checkForWin(){
    let winner; 
    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]){
        winner = fields[0];
    }

    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]){
        winner = fields[3];
    }

    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]){
        winner = fields[6];
    }

    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]){
        winner = fields[0];
    }

    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]){
        winner = fields[1];
    }

    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]){
        winner = fields[2];
    }

    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]){
        winner = fields[0];
    }
    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2]){
        winner = fields[2];
    }
    if(winner){
    console.log('Gewonnen:',winner);
    }
}