
const bnt1 = document.getElementById('btn-1');
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const btn2 = document.getElementById('btn-2');

let a = 0;
let b = 0;

bnt1.addEventListener('click', () => {
    a = input1.value;
    input1.hidden = true;
});

btn2.addEventListener('click', () => {
    b = input2.value;
    input2.hidden = true;
    console.log(a);
    console.log(b);
});

const finalBtn = document.getElementById('final-btn');

finalBtn.addEventListener('click',()=>{
    checkWinner();
    document.getElementById('result').style.display = 'block'; 
})

function checkWinner(){
    const winner = document.getElementById('winner');
    
    if(a==b){
        console.log("a==b");
        winner.innerHTML = 'Player 2';
    }
    else{
        console.log("a!=b");
        winner.innerHTML = 'player 1';
    }
}

