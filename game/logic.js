nevek = ["Steven Howking","Yoda","Jack Sparrow","Einstein"]
window.addEventListener("load", e => {
    s = "<div class='c'>" + Array(4)
            .fill(0)
            .map((v, i) => `<div onclick="start(${i})"><img src="../pic/o${i}.pgj.png"><br>${nevek[i]}</div>`)
            .join("") + "</div>";
    document.getElementById("bsx").innerHTML = s;
});
function f(e) {
    x=e.target.getAttribute("src");
    v=x.split(".")[0].substring(5);
    document.getElementById("b1").innerHTML = `<a href="game/"><img src="${x}"></a><br>`+nevek[v]
}

xm = window.innerWidth;
ym = window.innerHeight;
tx = xm / 2 - 50;
ty = ym - 150;
xv = 0;
yv = 0;
speed = 20;
function start(x) {
    document.getElementById("bsx").style.display = "none";
    document.getElementById("o1").style.display = "inline-block";
    tank = document.getElementById("tank");
    tank.innerHTML = `<img src="../pic/o${x}.pgj.png">`;
    tank.style.display = "inline-block";
    tank.style.position = "fixed";
    tank.style.top = `${ty}px`;
    tank.style.left = `${tx}px`;
    setInterval(() => { 
        tx += xv;
        ty += yv;
        if (tx + 160 > xm || tx < 0) xv = -xv;
        if (ty + 160 > ym || ty < 0) yv = -yv;
        tank.style.top = `${ty}px`;
        tank.style.left = `${tx}px`;
    }, 200);
    l = setInterval(() => {
        document.querySelectorAll(".golyo").forEach( v => {
            x1 = v;
            x2 = document.getElementById("o1");
            if (coll(x1, x2)) {
                clearInterval(l);
                setTimeout(() => {
                    x1.style.display = "none";
                    x2.style.display = "none";
                }, 50);
            }
        })
    }, 10);
}
function coll(el1, el2) {
    var rect1 = el1.getBoundingClientRect();
    var rect2 = el2.getBoundingClientRect();
    return !(
      rect1.top > rect2.bottom ||
      rect1.right < rect2.left ||
      rect1.bottom < rect2.top ||
      rect1.left > rect2.right
    );
}
function f(e) {
    switch (e.key) {
        case "ArrowRight":
            xv = speed;
            yv = 0;
            break;
        case "ArrowLeft":
            xv = -speed;
            yv = 0;
            break;
        case "ArrowUp":
            yv = -speed;
            xv = 0;
            break
        case "ArrowDown":
            yv = speed;
            xv = 0;
            break
        case " ":
            xv = 0;
            yv = 0;
            st = document.createElement('style');
            st.type = "text/css"
            tn = document.createTextNode(`@keyframes g1 {
                0% {
                    left: ${tx + 45}px;
                    top: ${ty}px;
                }
                100% {
                    left: ${tx + 45}px;
                    top: -20px;
                }
            }`);
            st.appendChild(tn);
            g = document.createElement("div");
            g.className = "golyo";
            document.getElementById("body").appendChild(st);
            document.getElementById("body").appendChild(g);
            break;

    }
}