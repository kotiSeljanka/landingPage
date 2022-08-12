const containerInput = document.getElementById("containerInput");
const inputTest = document.getElementById("codeInputTest");
const containerAnswers = document.getElementById("containerAnswers");

containerInput.children[0].focus();
containerInput.addEventListener("keyup", function() {
    focusNext();
})

let currentIndex = 0;
function focusNext() {
    if (currentIndex === 4) {
        createAnswerTile(getInput(), checkPassword(currentPassword));
        checkVictory();
        currentIndex = 0;
        clearInputs();
    }
    containerInput.children[currentIndex].focus();
    currentIndex++;
}

function clearInputs() {
    for (const child in containerInput.children) {
        containerInput.children[child].value = "";
    }
}

function setPassword() {
    const secretPassword = String(Math.floor(Math.random() * 10000)); 
    if (secretPassword.length !== 4) { setPassword(); return; }

    //inputTest.innerText = secretPassword;
    return secretPassword;
}

function getInput() {
    return ("" + containerInput.children[0].value + containerInput.children[1].value + containerInput.children[2].value + containerInput.children[3].value)
}

function checkPassword(truePw) {
    const inputPw = getInput()
    let truePwArray = String(truePw).split("");
    for (let i = 0; i < 4; i++) {
        const ourIndex = truePwArray.indexOf(inputPw[i]);
        if (ourIndex !== -1) { truePwArray.splice(ourIndex, 1); }
    }

    let countInPlace = 0;
    for (let i = 0; i < 4; i++) truePw[i] === inputPw[i] ? countInPlace++ : 0;

    return [Number(4 - truePwArray.length), countInPlace];
}

function checkVictory() {
    const checkResult = checkPassword(currentPassword);
    if ((checkResult[0] === 4) && (checkResult[1] === 4) ) runVictory();
}

function setMatches(matchesData) {
    currentlyMatches.innerText = String(matchesData[0]);
    currentlyInPlace.innerText = String(matchesData[1]);
}

function createAnswerTile(ansInput, matchesData) {
    const containerAnswer = document.createElement("div");
    containerAnswer.classList.toggle("containerAnswer");
    containerAnswer.innerHTML =
    `
    <div class="answerInput">${ansInput}</div>
    <div class="containerMatches">
        <div class="matchesChild">Matches:</div>
        <div class="matchesChild">${matchesData[0]}</div>
        <div class="matchesChild">In place:</div>
        <div class="matchesChild">${matchesData[1]}</div>
    </div>
    `

    containerAnswers.appendChild(containerAnswer);
}

const currentPassword = setPassword();



// Ending Screen
const winnerSrceen = document.getElementById("winnerScreen");
const dishResulut = document.getElementById("dishResult");

// Thanks, Dan Dascalescu!
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// If all of the three dish-inputs are locked, modifies the ending screen and shows it.
async function runVictory() {
    await sleep(1000);
    winnerSrceen.style.display = "block";
    winnerSrceen.classList.toggle("screenVisible");
    dishResulut.innerText = "Congratulations!";

}

// Invoked by a button on the ending screen in the top-right corner.
function closeScreen() {
    winnerSrceen.classList.toggle("screenVisible");
}