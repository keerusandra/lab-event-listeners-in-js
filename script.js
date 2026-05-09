const changeColorBtn =
    document.getElementById("changeColorBtn");

const resetColorBtn =
    document.getElementById("resetColorBtn");

const keyDisplay =
    document.getElementById("keyDisplay");

const textInput =
    document.getElementById("textInput");

const textDisplay =
    document.getElementById("textDisplay");

function changeBackgroundColor() {

    const randomColor =
        `rgb(
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)}
        )`;

    document.body.style.backgroundColor =
        randomColor;
}

function resetBackgroundColor() {

    document.body.style.backgroundColor = "";
}

function displayKeyPress(event) {

    keyDisplay.textContent =
        `Key pressed: ${event.key}`;
}

function displayUserInput() {

    textDisplay.textContent =
        `You typed: ${textInput.value}`;
}

function combinedEvents(event) {

    console.log(`Event Triggered: ${event.type}`);
}

changeColorBtn.addEventListener(
    "click",
    changeBackgroundColor
);

resetColorBtn.addEventListener(
    "dblclick",
    resetBackgroundColor
);

document.addEventListener(
    "keydown",
    displayKeyPress
);

textInput.addEventListener(
    "input",
    displayUserInput
);

changeColorBtn.addEventListener(
    "click",
    combinedEvents
);

document.addEventListener(
    "keydown",
    combinedEvents
);

textInput.addEventListener(
    "input",
    combinedEvents
);