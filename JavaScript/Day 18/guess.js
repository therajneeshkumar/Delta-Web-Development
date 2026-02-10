let rangeInput = document.querySelector("#random");
let generated = document.querySelector(".generated");
let computerNumber;

rangeInput.addEventListener('change', () => {
    computerNumber = Math.floor(Math.random() * Number(rangeInput.value)) + 1;
    document.querySelector(".randomResult").innerHTML = computerNumber;
    rangeInput.value = '';
    generated.innerHTML = "A random number is generated.";
    generated.style.height = "15%";
})


let userInput = document.querySelector("#userInputNumber");
let result = document.querySelector(".result");
let count = document.querySelector(".count");
let countMessage = document.querySelector(".countMessage");
let attempts = ['1st', '2nd', '3rd', '4th'];

userInput.addEventListener('change', () => {
     {
        if (userInput.value.toLowerCase() == "quit") {
            result.innerHTML = "User Quit from the game";
            userInput.value = '';
            generated.innerHTML = '';
            count += 1;
            if (count == 1) {
                countMessage.innerHTML = `User Quit in <span class="count">${attempts[0]}</span> Attempt.`;
            } else if (count == 2) {
                countMessage.innerHTML = `User Quit in <span class="count">${attempts[1]}</span> Attempt.`;
            }
            else if (count == 3) {
                countMessage.innerHTML = `User Quit in <span class="count">${attempts[2]}</span> Attempt.`;
            }
            else if (count == 4) {
                countMessage.innerHTML = `User Quit in <span class="count">${attempts[3]}</span> Attempt.`;
            }
            else {
                nextAttempt = String(Number(attempts[3][0]) + (count - Number(attempts[3][0]))) + (attempts[3].slice(1, 3));
                countMessage.innerHTML = `User Quit in <span class="count">${nextAttempt}</span> Attempt.`;
            }
            // break;
        } else if (userInput.value == computerNumber) {
            result.innerHTML = `You are right. Congrats!!! Random Number was <span>${userInput.value}</span>`;
            userInput.value = '';
            count += 1;
            countMessage.innerHTML = `You Guessed the Correct Number in <span class="count">${count}</span> Attempts.`;
        } else if (userInput.value < computerNumber) {
            result.innerHTML = "Hint : Your guess was too small. Please try again.";
            userInput = document.querySelector("#userInputNumber");
            userInput.value = '';
            count += 1;
            countMessage.innerHTML = `Current Number of Attempts is ${count}`;
        } else {
            result.innerHTML = "Hint : Your guess was too Large. Please try again.";
            userInput = document.querySelector("#userInputNumber");
            userInput.value = '';
            count += 1;
            countMessage.innerHTML = `Current Number of Attempts is ${count}`;
        }
    }
});


/*
const randomNumber = () => {
    computerNumber = Math.floor(Math.random() * Number(rangeInput.value)) + 1;
    document.querySelector(".randomResult").innerHTML = computerNumber;
};

rangeInput.addEventListener('change', () => randomNumber);

rangeInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        randomNumber();
    }
})
*/