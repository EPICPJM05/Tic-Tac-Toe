var boardVisibility = document.getElementById('board').style.display='none';
var P1mark, P2mark, msg;
const p1 = document.getElementById("P1name");
const p2 = document.getElementById("P2name");
var first;
function getRandomTurn(){
    if(p1 == "" || p2 == ""){
        alert("Fill Names in the given field")
    }else{
        var mark = parseInt(Math.random()*50);
        console.log(mark);
        if(mark%2 == 0){
            P1mark = 'X';
            P2mark = 'O';
            first = p1.value;
            second = p2.value;
        }else if(mark%2 == 1){
            P1mark = 'O';
            P2mark = 'X';
            first = p2.value;
            second = p1.value;
        }
        msg = p1.value + " got the mark: " + P1mark + "\n" + p2.value + " got the mark: " + P2mark ;
        console.log(msg)
        document.getElementById("msg").innerText=msg;
        document.getElementById("plStatus").innerText= first+"'s turn";
        boardVisibility = document.getElementById('board').style.display='grid';
        p1.value = first;
        p2.value= second;
    }
}

moveCount=0;
//putting locked values
const locked = []
const p1pos = []
const p2pos = []
var p;

function  putMark(a){
    var stsP1 = p1.value + "'s turn";
    var stsP2 = p2.value + "'s turn";
    var status = document.getElementById("plStatus")
    if(moveCount%2==0){
        if(locked.includes(a)){
            alert("Already Filled")
            return;
        }else{
            status.innerText= (P1mark == 'X')? stsP2 : stsP1
            document.getElementById("pos"+a).innerText="X";
            locked.push(a);
            p1pos.push(a);
            console.log(p1pos);
        }
    }else{
        if(locked.includes(a)){
            alert("Already Filled")
            return;
        }else{
            status.innerText= (P1mark == 'O')? stsP2 : stsP1
            document.getElementById("pos"+a).innerText="O";
            locked.push(a);
            p2pos.push(a);
            console.log(p2pos);
        }
    }
    moveCount++;

    //
    if(moveCount>8){
        setTimeout(() => {
            alert('Game Over');
        }, 1000);
    }else if(winSituation()){
        setTimeout(() => {
            alert(p + " wins !!!");
        }, 1000);
    }
}


function winSituation(){
    //add conditions

    var co1= p1pos.includes(1)&&p1pos.includes(2)&&p1pos.includes(3);
    var co2= p1pos.includes(1)&&p1pos.includes(4)&&p1pos.includes(7);
    var co3= p1pos.includes(1)&&p1pos.includes(5)&&p1pos.includes(9);
    var co4= p1pos.includes(2)&&p1pos.includes(5)&&p1pos.includes(8);
    var co5= p1pos.includes(3)&&p1pos.includes(5)&&p1pos.includes(7);
    var co6= p1pos.includes(3)&&p1pos.includes(6)&&p1pos.includes(9);

    var c1= p2pos.includes(1)&&p2pos.includes(2)&&p2pos.includes(3);
    var c2= p2pos.includes(1)&&p2pos.includes(4)&&p2pos.includes(7);
    var c3= p2pos.includes(1)&&p2pos.includes(5)&&p2pos.includes(9);
    var c4= p2pos.includes(2)&&p2pos.includes(5)&&p2pos.includes(8);
    var c5= p2pos.includes(3)&&p2pos.includes(5)&&p2pos.includes(7);
    var c6= p2pos.includes(3)&&p2pos.includes(6)&&p2pos.includes(9);

    if(co1||co2||co3||co4||co5||co6){
        p = p1.value;
    }else if(c1||c2||c3||c4||c5||c6){
        p = p2.value;
    }
    return p;
}

