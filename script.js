const changeColorBtn = document.getElementById("changeColorBtn");

const resetColorBtn = document.getElementById("resetColorBtn");

const keyDisplay = document.getElementById("keyDisplay");

const textInput = document.getElementById("textInput");

const textDisplay = document.getElementById("textDisplay");

const combinedOutput = document.getElementById("combinedOutput");


function changeBackgroundColor() {

    const colors = [
        "#ffadad",
        "#ffd6a5",
        "#fdffb6",
        "#caffbf",
        "#9bf6ff",
        "#a0c4ff",
        "#bdb2ff"
    ];

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;

    combinedOutput.textContent =
        `Background changed to ${randomColor}`;
}


function resetBackgroundColor() {

    document.body.style.backgroundColor = "white";

    combinedOutput.textContent =
        "Background reset to white";
}


function displayKeyPress(event) {

    keyDisplay.textContent =
        `You pressed: ${event.key}`;

    combinedOutput.textContent =
        `Keyboard event detected: ${event.key}`;
}


function displayUserInput() {

    textDisplay.textContent = textInput.value;

    combinedOutput.textContent =
        `Typing: ${textInput.value}`;
}


function dynamicInteraction(event) {

    console.log("Event Triggered:", event.type);

    combinedOutput.textContent =
        `Event Type: ${event.type}`;
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
    dynamicInteraction
);

document.addEventListener(
    "keydown",
    dynamicInteraction
);

textInput.addEventListener(
    "input",
    dynamicInteraction
);