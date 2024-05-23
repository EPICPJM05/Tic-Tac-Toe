var boardVisibility = document.getElementById('board').style.display = 'none';
document.getElementById('msg').style.display = 'none';
document.getElementById('score').style.display = 'none';
var P1mark, P2mark, msg , P1score=0, P2score=0;
const p1 = document.getElementById("P1name");
const p2 = document.getElementById("P2name");
// Plyr1 = {mark, score};
// Plyr2 = {mark, score};
var first;
function getRandomTurn() {
    if (p1.value == "" || p2.value == "") {
        alert("Fill Names in the given field");
    } else {
        document.getElementById("strt-btn").style.display='none';
        document.getElementById("fun-msg").style.display='none';
        p1.style.display='none';
        p2.style.display='none';
        var mark = parseInt(Math.random() * 50);
        console.log(mark);
        if (mark % 2 == 0) {
            P1mark = 'X';
            P2mark = 'O';
            first = p1.value;
            second = p2.value;
        } else if (mark % 2 == 1) {
            P1mark = 'O';
            P2mark = 'X';
            first = p2.value;
            second = p1.value;
        }
        msg = p1.value + " got the mark: " + P1mark + "\n" + p2.value + " got the mark: " + P2mark;
        console.log(msg);
        document.getElementById("msg").innerText = msg;
        document.getElementById("plStatus").innerText = first + "'s turn";
        boardVisibility = document.getElementById('board').style.display = 'grid';
        document.getElementById('score').style.display = '';
        document.getElementById('msg').style.display = '';
    }
}

moveCount = 0;
//putting locked values
const locked = []
const p1pos = []
const p2pos = []
var p;

function putMark(a) {
    var status = document.getElementById("plStatus")
    if (winner == null) {
        var stsP1 = first + "'s turn";
        var stsP2 = second + "'s turn";
        if (moveCount % 2 == 0) {
            if (locked.includes(a)) {
                alert("Already Filled")
                return;
            } else {
                status.innerText = (P1mark == 'X') ? stsP2 : stsP1
                document.getElementById("pos" + a).innerText = "X";
                locked.push(a);
                p1pos.push(a);
                console.log(p1pos);
            }
        } else {
            if (locked.includes(a)) {
                alert("Already Filled")
                return;
            } else {
                status.innerText = (P1mark == 'O') ? stsP2 : stsP1
                document.getElementById("pos" + a).innerText = "O";
                locked.push(a);
                p2pos.push(a);
                console.log(p2pos);
            }
        }
        moveCount++;

        //
        if (winSituation()) {
            setTimeout(() => {
                alert(winner + " wins !!!");
            }, 300);
        } else if (moveCount >= 9) {
            setTimeout(() => {
                alert("It's a Draw !!");
                scoreCard();
                playAgain();
            }, 1000);
        }
    } else {
        status.innerText = "Congratulations " + winner + ", you are the Winner!";
    }
}

var winner;
function winSituation() {
    //add conditions

    //P1 winning
    var co1 = p1pos.includes(1) && p1pos.includes(2) && p1pos.includes(3);
    var co2 = p1pos.includes(1) && p1pos.includes(4) && p1pos.includes(7);
    var co3 = p1pos.includes(1) && p1pos.includes(5) && p1pos.includes(9);
    var co4 = p1pos.includes(2) && p1pos.includes(5) && p1pos.includes(8);
    var co5 = p1pos.includes(3) && p1pos.includes(5) && p1pos.includes(7);
    var co6 = p1pos.includes(3) && p1pos.includes(6) && p1pos.includes(9);
    var co7 = p1pos.includes(4) && p1pos.includes(5) && p1pos.includes(6);
    var co8 = p1pos.includes(7) && p1pos.includes(8) && p1pos.includes(9);

    //P2 winning
    var c1 = p2pos.includes(1) && p2pos.includes(2) && p2pos.includes(3);
    var c2 = p2pos.includes(1) && p2pos.includes(4) && p2pos.includes(7);
    var c3 = p2pos.includes(1) && p2pos.includes(5) && p2pos.includes(9);
    var c4 = p2pos.includes(2) && p2pos.includes(5) && p2pos.includes(8);
    var c5 = p2pos.includes(3) && p2pos.includes(5) && p2pos.includes(7);
    var c6 = p2pos.includes(3) && p2pos.includes(6) && p2pos.includes(9);
    var c7 = p2pos.includes(4) && p2pos.includes(5) && p2pos.includes(6);
    var c8 = p2pos.includes(7) && p2pos.includes(8) && p2pos.includes(9);

    if (co1 || co2 || co3 || co4 || co5 || co6 || co7 || co8) {
        p = first;
        winner = p;
        scoreCard();
        return winner;
    } else if (c1 || c2 || c3 || c4 || c5 || c6 || c7 || c8) {
        p = second;
        winner = p;
        scoreCard();
        return winner;
    }
    return false;
}

function playAgain() {

    locked.length = 0;
    p1pos.length = 0;
    p2pos.length = 0;
    console.log(locked);
    winner = null;
    moveCount=0;

    for (i = 1; i <= 9; i++) {
        document.getElementById("pos" + i).innerText = "";
    }
    getRandomTurn();
}

function scoreCard(){
    if(winner == p1.value){
        P1score++;
    }else if(winner == p2.value){
        P2score++;
    }
    console.log(p1.value + " score: "+ P1score);
    console.log(p2.value + " score: "+ P2score);
    document.getElementById("score").innerText= p1.value + " score: " + P1score + "\n" + p2.value + " score: " + P2score;
}