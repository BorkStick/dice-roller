// rolls a number between 1 - 20
function getRandomD20() {
    var critHit = new Audio('/assets/audio/mixkit-dagger-woosh-1487.mp3')
    var critFail = new Audio('/assets/audio/mixkit-falling-empty-can-389.wav')


    num = Math.floor(Math.random() * 20) + 1;

    if (num == 20) {
        console.log("D20: " + num);
        console.log("NAT20");
        critHit.play();
    } else if (num == 1) {
        console.log("D20: " + num);
        console.log("NAT1");
        critFail.play();
    } else
        console.log("D20: " + num);
    document.getElementById('d20-output').innerHTML = num;
}

// rolls a number between 1 - 6
function getRandomD6() {
    num = Math.floor(Math.random() * 6) + 1;
    console.log("D6: " + num);
    document.getElementById('d6-output').innerHTML = num;
}

// rolls a number between 1 - 4
function getRandomD4() {
    num = Math.floor(Math.random() * 4) + 1;
    console.log("D4: " + num);
    document.getElementById('d4-output').innerHTML = num;
}