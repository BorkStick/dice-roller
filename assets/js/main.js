// rolls a number between 1 - 20
function getRandomD20 () {
    num = Math.floor(Math.random() * 20) + 1;
    console.log("D20: " + num);
    document.getElementById('d20-output').innerHTML = num;
}

// rolls a number between 1 - 6
function getRandomD6 () {
    num = Math.floor(Math.random() * 6) + 1;
    console.log("D6: " + num);
    document.getElementById('d6-output').innerHTML = num;
}

// rolls a number between 1 - 4
function getRandomD4 () {
    num = Math.floor(Math.random() * 4) + 1;
    console.log("D4: " + num);
    document.getElementById('d4-output').innerHTML = num;
}
