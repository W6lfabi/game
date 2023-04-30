nevek = ["Scientists","Star Wars","Harry Potter","The Lord of the Rings"];
mappak = ["scientists","starwars","Potter","rings"];
idlist = [
    [
        [
            "A mi családunk a költészet és a matematika váltakozó rétege.",
            "Isten nem adott nekünk az elképzeléseink és érzéseink nagyon korlátozott kifejezési képességénél többet.",
            'A motor bármely határozatlan funkció anyagi kifejeződése, bármilyen fokú általánosságban és összetettségben.'
        ].sort((a,b) => Math.random() - 0.5),
        ["Nekem azt tanították, hogy a haladás útja se nem gyors, se nem könnyű.",
        "Az életben semmi félelmetes nincsen. Csak meg kell próbálnunk megérteni. Ha többet értenénk belőle, máris nem lenne annyi félnivalónk.",
        "Hinnünk kell, hogy tehetségesek vagyunk valamiben, és azt a valamit bérmi áron is el kell érnünk.",
        ].sort((a,b) => Math.random() - 0.5),
        ["Csak a hülyék tudnak mindent, a többiek életük végéig tanulnak! ",
        "Aki még sosem követett el hibát, valószínűleg még sosem próbált semmi új dolgot.",
        "Ne sikeres ember próbálj lenni, hanem értékes",
        ].sort((a,b) => Math.random() - 0.5),
        ["A sírban majd eleget pihenünk",
        "Rossz az öregség, ha butasággal párosul.",
        'XIV. Lajos azt monda: "Az állam én vagyok."; Trockij azt mondhatta volna: "A társadalom én vagyok."; én azt mondom: "A valóság én vagyok."',
        ].sort((a,b) => Math.random() - 0.5),
        ["Az élet tragikus lenne, ha nem lenne vicces.",
        "Az intelligencia a változáshoz való alkalmazkodóképesség.",
        "Minden értelmes ember önfejűnek tűnik időnként.",
        ].sort((a,b) => Math.random() - 0.5)
    ],
    [
        ["A harc senkit sem tesz naggyá.",
        "A szerencsejáték a vesztesek sportja.",
        "Az erő veled lesz. Mindig.",
        ].sort((a,b) => Math.random() - 0.5),
        ["Tedd, vagy ne tedd, de sose próbáld!",
        "A félelem a sötét oldal kapuja.",
        "Az erő hatalmas."
        ].sort((a,b) => Math.random() - 0.5),
        ["Hitvány tudásod nem vetekedhet a sötét oldal hatalmával!",
        "Ne tétovázz, és ne kegyelmezz!",
        "Felejtsd el a múltat. Töröld el, hogy ha muszáj. Csak így válhatsz azzá, akivé válnod kell",
        ].sort((a,b) => Math.random() - 0.5),
        ["Igyekezz megválni önként mindentől, amit fájna elveszítened.",
        "Ne feledd! Amire figyelsz, az a világod.",
        "Rá fogsz jönni, hogy sok igazság, amihez ragaszkodunk, javarészt a mi szemszögünkön múlik.",
        ].sort((a,b) => Math.random() - 0.5),
        ["Így száll hát sírba a szabadság: tapsvihar közepette.",
        "Minden meghal egyszer, még a csillagok is kihunynak.",
        "Meghalni a népért igen nagy áldozat. De élni a népért annál is nagyobb áldozat."
        ].sort((a,b) => Math.random() - 0.5)
    ],
    [
        ["A nagyság irigységet vet, az irigység gyűlöletet teremt, a gyűlölet hazugságot szül.",
        "Van amikor muszáj a nagyobb jóra figyelni!",
        "Sötétség nélkül nem létezik a fény sem.",
        ].sort((a,b) => Math.random() - 0.5),
        ["„Ne szánd a halottakat! Az élőket sajnáld, s legfőképpen azokat, akik szeretet nélkül élnek.”",
        "Dobby mostmár szabad manó.",
        "Mindenkiben van fény és némi sötétség is. A kérdés az, hogy melyik részre hallgatunk."
        ].sort((a,b) => Math.random() - 0.5),
        ["Ennyi idő után is? -Örökké",
        "Mered használni a saját varázslataimat ellenem, Potter?",
        "lehet, hogy elkerülte a figyelmedet, de az élet nem igazságos",
        ].sort((a,b) => Math.random() - 0.5),
        ["Ostobaság volt azt hinnem, hogy ez a kölyök valaha is erősebb volt, mint én.",
        "Nem tudott elpusztítani az átok, ami bárki mást a halálba küldött volna.",
        "Titokzatos dolog az idő. Hatalma van. És ha játszunk vele, veszélyes!",
        ].sort((a,b) => Math.random() - 0.5),
        ["A döntéseinkben, nem pedig a képességeinkben mutatkozik meg, hogy kik is vagyunk valójában.",
        "Csak azért, mert te egy teáskanál érzelmi színvonalán állsz, nem kell másokról is ezt feltételezned.",
        "Van amikor muszáj a nagyobb jóra figyelni!",
    ].sort((a,b) => Math.random() - 0.5)
    ],
    [
        ["Sok mindent elfelejtettem, amiről azt hittem, hogy tudom, és sok mindent megtanultam, amit már elfelejtettem.",
        "Nem akarok harcolni. De ölbe tett kézzel várni az elkerülhetetlent még rosszabb.",
        "Na jó, de mi lesz a 2. reggelivel?",
        ].sort((a,b) => Math.random() - 0.5),
        ["Szívünknek mégis a béke, a nyugalom, és a jól művelt föld a legkedvesebb.",
        "Akad még jó ebben a világban, amiért érdemes küzdeni.",
        "Ha én egyszer alszom, akkor alszom, akár legurulok, akár nem"
        ].sort((a,b) => Math.random() - 0.5),
        ["menj el és ne gyere többet vissza",
        "A drágaság a miénk kell, hogy legyen",
        "A komisz kis hobbitkák ellopták tőlünk",
        ].sort((a,b) => Math.random() - 0.5),
        ["nem bújhatsz el. látlak!",
        "Nincs élet utánam, csak halál",
        "Az éj átfest sok gondolatot."
        ].sort((a,b) => Math.random() - 0.5),
        ["Ne menj oda tanácsért, mert nemet és igent is fognak mondani.",
        "Felesleges a bosszú; nem fog meggyógyítani semmit.",
        "Sokan élnek, akik halált érdemelnek, és néhányan meghalnak, akik élhetnének."
        ].sort((a,b) => Math.random() - 0.5)
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