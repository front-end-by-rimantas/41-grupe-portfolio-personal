var project = setInterval(projectDone, 10);
var happy = setInterval(happyDone, 10);
var cups = setInterval(cupsDone, 10);
var prof = setInterval(profDone, 15);

let count1 = 1884;
let count2 = 6132;
let count3 = 1587;
let count4 = 1;

function projectDone() {
    count1++;
    document.getElementById('0101').innerHTML = count1;

    if (count1 == 2536) {
        clearInterval(project);
    }
}

function happyDone() {
    count2++;
    document.getElementById('0102').innerHTML = count2;

    if (count2 == 6784) {
        clearInterval(happy);
    }
}

function cupsDone() {
    count3++;
    document.getElementById('0103').innerHTML = count3;

    if (count3 == 2239) {
        clearInterval(cups);
    }
}

function profDone() {
    count4++;
    document.getElementById('0104').innerHTML = count4;

    if (count4 == 434) {
        clearInterval(prof);
    }
}
