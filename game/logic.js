nevek = ["Scientists","Star Wars","Harry Potter","The Lord of the Rings"];
mappak = ["scientists","starwars","Potter","rings"];
idlist = [
    [
        [
            "A mi családunk a költészet és a matematika váltakozó rétege.",
            "Isten nem adott nekünk az elképzeléseink és érzéseink nagyon korlátozott kifejezési képességénél többet.",
            'A "gép" bármely határozatlan funkció anyagi kifejeződése, bármilyen fokú általánosságban és összetettségben.'
        ].sort((a,b) => Math.random() - 0.5),
        ["S21","S22","s23","s24","s25"].sort((a,b) => Math.random() - 0.5),
        ["S31","S32","s33","s34","s35"].sort((a,b) => Math.random() - 0.5),
        ["S41","S42","s43","s44","s45"].sort((a,b) => Math.random() - 0.5),
        ["S51","S52","s53","s54","s55"].sort((a,b) => Math.random() - 0.5)
    ],
    [
        ["sw11","sw12"].sort((a,b) => Math.random() - 0.5),
        ["sw21","sw22"].sort((a,b) => Math.random() - 0.5),
        ["sw31","sw32"].sort((a,b) => Math.random() - 0.5),
        ["sw41","sw42"].sort((a,b) => Math.random() - 0.5),
        ["sw51","sw52"].sort((a,b) => Math.random() - 0.5)
    ],
    [
        ["hp1","hp2"].sort((a,b) => Math.random() - 0.5),
        ["hp1","hp2"].sort((a,b) => Math.random() - 0.5),
        ["hp1","hp2"].sort((a,b) => Math.random() - 0.5),
        ["hp1","hp2"].sort((a,b) => Math.random() - 0.5),
        ["hp1","hp2"].sort((a,b) => Math.random() - 0.5)
    ],
    [
        ["lor1","lotr2","lotr3"].sort((a,b) => Math.random() - 0.5),
        ["lor1","lotr2","lotr3"].sort((a,b) => Math.random() - 0.5),
        ["lor1","lotr2","lotr3"].sort((a,b) => Math.random() - 0.5),
        ["lor1","lotr2","lotr3"].sort((a,b) => Math.random() - 0.5),
        ["lor1","lotr2","lotr3"].sort((a,b) => Math.random() - 0.5)
    ]
    
]
window.addEventListener("load", e => {
    s = "<div class='c'>" + Array(4)
            .fill(0)
            .map((v, i) => `<div onclick="start(${i})"><img class="x" src="../pic/o${i}.pgj.png"><br>${nevek[i]}</div>`)
            .join("") + "</div>";
    document.getElementById("bsx").innerHTML = s;
});
xm = window.innerWidth;
ym = window.innerHeight;
tx = xm / 2 - 25;
ty = ym - 150;
xv = 0;
yv = 0;
ci = 0;
speed = 20;
sz = 0;
xx = 0
hi = 0
function start(x) {
    xx = x
    document.getElementById("o1").innerHTML = `<img id="szer" class="ka" src="./${mappak[x]}/c1.png"></img>`
    kar = window.location.search.split("=")[1];
    document.getElementById("body").addEventListener("keydown", f);
    document.getElementById("bsx").style.display = "none";
    document.getElementById("o1").style.display = "inline-block";
    tank = document.getElementById("tank");
    tank.innerHTML = `<img id="tk" class="tank" src="../pic/${kar}c.png">`;
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
                fds = 0
                if (sz < 5) {
                    document.getElementById("szer").style.display = "none"
                    setTimeout(quiz, 2000)
                } else {
                    alert("Az utolsó szereplő is meghalt, You WIN!")
                }
            }
        });
    }, 10);
}
function quiz() {
    document.getElementById("quiz").innerHTML=`
        <button onclick="endquiz()">Quiz vége</button>
    `
}
function endquiz() {
    document.getElementById("quiz").innerHTML=``
    setTimeout(() => {
        sz++ ;
        document.getElementById("szer").style.display = "inline-block"
        document.getElementById("szer").setAttribute("src", `./${mappak[xx]}/c${sz}.png`)
    }, 1000)
}
function fd() {
    if (fds) {
        fds = 0
        document.getElementById("szer").style="display: none;"
        document.getElementById("idezet").style.display="inline-block"
        document.getElementById("idezet").innerHTML=`${idlist[xx][sz][hi]}`
        if (hi<2) {
            setTimeout(()=>{
                document.getElementById("idezet").style.display="none";
                document.getElementById("szer").style="display: inline-block;";
            },1000)
            hi++
        }
        else {
            setTimeout(()=>{
                document.getElementById("idezet").innerHTML='Game OVER'
            },1000)
        } 
    }
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
        case " ":
            document.getElementById("tk").setAttribute("src", `../pic/${kar}cd.png`)
            setTimeout( () => {
                document.getElementById("tk").setAttribute("src", `../pic/${kar}c.png`)
            }, 200)
            fds = 1
            setTimeout(fd, 900)
            xv = 0;
            yv = 0;
            st = document.createElement('style');
            st.type = "text/css";
            st.id = `gg${ci}`;
            tn = document.createTextNode(`@keyframes g${ci} {
                0% {
                    left: ${tx + 20}px;
                    top: ${ty}px;
                }
                100% {
                    left: ${tx + 20 + Math.round(Math.random()*200-100)}px;
                    top: 0px;
                }
            }`);
            st.appendChild(tn);
            g = document.createElement("div");
            setTimeout((id) => {
                document.getElementById(id).remove();
                document.getElementById("g" + id).remove();
            }, 1000, `g${ci}`);
            g.id = `g${ci}`;
            g.className = "golyo";
            g.style = `animation-name: g${ci};
            background-color: rgb(${
                Math.round(Math.random() * 200)
            }, ${
                Math.round(Math.random() * 200)
            }, ${
                Math.round(Math.random() * 200)
            });`;
            ci++;
            document.getElementById("body").appendChild(st);
            document.getElementById("body").appendChild(g);
            break;

    }
}