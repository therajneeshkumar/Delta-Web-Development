let gameseq = [];
let userseq = [];

let btns = ['yellow', 'red', 'purple', 'green'];

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game is started");
        started = true;

        levelUp();
    }
});

let h2 = document.querySelector('h2');
function levelUp() { 
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    // console.log(randIdx);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor)
    console.log(gameseq);
    gameFlash(randBtn);
}

function gameFlash(btn) { 
    btn.classList.add('flash');
    setTimeout(() => {
        btn.classList.remove('flash');
    }, 250);
}

function userFlash(btn) { 
    btn.classList.add('userflash');
    setTimeout(() => {
        btn.classList.remove('userflash');
    }, 250);
}

function btnPress() { 
    // console.log(this);
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute('id');
    userseq.push(userColor);
    checkSeq(userseq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function checkSeq(idx) { 
    // console.log("current level :", level);
    // let idx = level - 1;

    if (userseq[idx] === gameseq[idx]) {
        // console.log("same value");
        if (userseq.length === gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</> <br> Press any key to start again`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function reset() { 
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}