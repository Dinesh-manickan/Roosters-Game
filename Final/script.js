
let row = Math.floor(Math.random()*8);
let col = Math.floor(Math.random()*8);

let farmarLocation = "33";
let komoLocation   = String(row)+String(col);
let Score = 0;

function wining(){
    if (farmarLocation[0]==komoLocation[0] && farmarLocation[1]==komoLocation[1]){
        swal("Good play!", "You clicked the button!", "success")
          setInterval(() => {
            location.reload();
          }, 10000);
        
    }

}
function displayBoard(n){
    var game = document.getElementById("game");
    for(let i=0; i<n; i++){
        var row = document.createElement("div");
        row.id='row_id_'+String(i);
        row.className='row';

        for(let j=0; j<n; j++){
            var col = document.createElement('div');
            col.id="col_id_"+String(i)+String(j);
            col.className='col';

            var btn = document.createElement("button");
            btn.id=String(i)+String(j);
            btn.className=' btn_custom';
            btn.disabled=true;

         
            btn.onclick = function(){
                farmar(i,j);
                wining();
                komo();
                wining();
                moveFarmar();
            }
            
            col.appendChild(btn);
            row.appendChild(col);

        }
        game.appendChild(row);
    }
}

function komo(){

    let randomNumber = Math.floor(Math.random()*4)+1;

    console.log(randomNumber);
    if(randomNumber==1 && Number(col)<=7 && Number(col)>=0){
        col=Number(col)+1;
        col=String(col);
    }else if(randomNumber==2 && Number(col)>0  && Number(col)<=7){
        col=Number(col)-1;
        col=String(col);
    }else if(randomNumber==3 && Number(row)<=7 && Number(row)>=0 ){
        row=Number(row)+1;
        row=String(row);
    }
    else{
        if(Number(row)>=0 && Number(row<=7)){
            row=Number(row)-1;
            row=String(row);
        }else{
            komo();
        }
        
    }

    // if(String(row)==farmarLocation[0] && String(col)==farmarLocation[1]){
    //     // row = Math.floor(Math.random()*8);
    //     // col = Math.floor(Math.random()*8);
    //     wining();

    // }
    
    try {
        var kBtn = document.getElementById(komoLocation[0]+komoLocation[1]);
        kBtn.classList.remove("komoBtn");
        kBtn.className='btn_custom';
        kBtn.innerHTML='';
        kBtn.disabled=true;
    } catch (error) {
        console.log(error);
    }
    var komoBtn = document.getElementById(String(row)+String(col));
    komoBtn.innerHTML="R";
    komoBtn.className="komoBtn";
    
    komoLocation = String(row)+String(col);
    
}

function farmar(row,col){
    try {
        var fBtn = document.getElementById(farmarLocation[0]+farmarLocation[1]);
        fBtn.classList.replace("FarmarBtn","btn_custom");
        fBtn.innerHTML='';
        fBtn.disabled=true;
        // console.log(fBtn);
        
    } catch (error) {
        console.log(error);
    }

    var Farmar = document.getElementById(String(row)+String(col));
    Farmar.className='FarmarBtn';
    Farmar.innerHTML='F';
    Farmar.disabled=true;
    farmarLocation = String(row)+String(col);

    // if (farmarLocation[0]==komoLocation[0] && farmarLocation[1]==komoLocation[1]){
    //     window.alert("won");
    // }
    Score++;
    document.getElementById('gameScore').innerHTML = Score;
}

function play(){
    displayBoard(8);
    komo();
    // if (farmarLocation[0]==komoLocation[0] && farmarLocation[1]==komoLocation[1]){
    //     window.alert("won");
    // }

    farmar(farmarLocation[0],farmarLocation[1]);
    moveFarmar();
}

function moveFarmar(){
    let row = Number(farmarLocation[0]);
    let col = Number(farmarLocation[1]);

    const buttons = document.getElementsByTagName("button");
    for (const button of buttons) {
        button.disabled = true;
    }

    if(col>0){
        try {
            var left  = document.getElementById(String(row)+String(col-1));
            left.disabled=false;
        } catch (error) {
            console.log(error);
        }
        
    }

    if(col<8){
        try {
            var right = document.getElementById(String(row)+String(col+1));
        right.disabled=false;
        } catch (error) {
            console.log(error);
        }

        
    }

    if(row>0){
        try {
            var top   = document.getElementById(String(row-1)+String(col));
            top.disabled=false;
        } catch (error) {
            console.log(error);
        }

        
    }

    if(row<8){
        try {
            var down  = document.getElementById(String(row+1)+String(col));
            down.disabled=false;
        } catch (error) {
            console.log(error);
        }

        
    }
    
    // // // Diagonal
    // try {
    //     var up = document.getElementsByName(String(row+1)+String(col-2))
    // }
    // if(col>0){
    //     var topLeftDiagonal  = document.getElementById(String(row-1)+String(col-1));
    //     topLeftDiagonal.disabled=false;
    // }

    // if(col<8){
    //     var topRightDiagonal = document.getElementById(String(row-1)+String(col+1));
    //     topRightDiagonal.disabled=false;
    // }

    // if(row>0){
    //     var downRightDiagonal   = document.getElementById(String(row+1)+String(col+1));
    //     downRightDiagonal.disabled=false;
    // }

    // if(row<8){
    //     var downLeftDiagonal  = document.getElementById(String(row+1)+String(col-1));
    //     downLeftDiagonal.disabled=false;
    // }

}



play();
