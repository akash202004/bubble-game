var count = 60;
var rn = 0;
var scoreinc = 0;

function bubble() {
    var clutter = "";
    for (i = 1; i <= 112; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function timer() {
    var clrtimer = setInterval(function () {
        if (count > 0) {
            count--;
            document.querySelector("#timeinter").textContent = count;
        } else {
            clearInterval(clrtimer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1> <h1>score = ${scoreinc}</h1>`
        }
    }, 1000)
}

function setHit() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = rn;
}

function score(){
    scoreinc += 10;
    document.querySelector("#scoreval").textContent = scoreinc
}

document.querySelector("#pbtm").addEventListener("click", function(dets) {
    var clicked = Number(dets.target.textContent);
    if(clicked === rn){
        score();
        setHit();
        bubble();
    }
});


setHit();
timer();
bubble();