
const bnt1 = document.getElementById('btn-1');
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const btn2 = document.getElementById('btn-2');

let a = 0;
let b = 0;

bnt1.addEventListener('click', () => {
    a = input1.value;
    console.log('a value '+a);
    if(a>10 || a<=0){
        document.getElementById('warning').style.display = 'block';
        return;
    }
    else{
        document.getElementById('warning').style.display = 'none';
    }
    input1.hidden = true;
});

btn2.addEventListener('click', () => {
    b = input2.value;
    if(b>10 || b<=0){
        document.getElementById('warning').innerHTML = 'The answer must be in range of 1 to 10';
        document.getElementById('warning').style.display = 'block';
        return;
    }
    else{
        document.getElementById('warning').innerHTML = 'Please select number between 1 to 10';
        document.getElementById('warning').style.display = 'none';
    }
    input2.hidden = true;
    // console.log(a);
    // console.log(b);
});

const finalBtn = document.getElementById('final-btn');

finalBtn.addEventListener('click',()=>{
    checkWinner();
    document.getElementById('result').style.display = 'block'; 
})

function checkWinner(){
    if(a==0 || b==0){
        document.getElementById('warning').innerHTML = 'Please give the input first';
        document.getElementById('warning').style.display = 'block';
        return;
    }
    else{
        document.getElementById('warning').innerHTML = 'Please select number between 1 to 10';
        document.getElementById('warning').style.display = 'none';
    }
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

