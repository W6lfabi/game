nevekjatekos = ["Lilcsi","Tesch","Roli","Patrik","Zsigi","Imó","Valentin","Dani","Zalán","Bende","Tomi","Philipp","Flóri","Abi","Lackó"];
nevek = ["Scientists","Star Wars","Harry Potter","The Lord of the Rings"];
nevekellenfel = [
    ["Ada Byron       ", "Marie Curie  ", "Albert Einstein", "Erdős Pál       ", "Steven Hawking"],
    ["Obi-Wan Kenobi  ", "Yoda         ", "Sith nagyúr    ", "Anakin Skywalker", "Padmé Amidala "],
    ["Draco Malfoy    ", "Dobby        ", "Perselus Piton ", "Voldemort       ", "Harry Potter  "],
    ["Borbak Trufiadok", "Csavardi Samu", "Gollam         ", "Sauron          ", "Zsákos Frodó  "]
]; // Ellenfelek nevei
nevekfegyver = ["alufólia", "szivacs", "iskolatáska", "lézerkard", "pisztoly", "pálca", "seprű", "kavics", "kard"]; // fegyverek nevei
sebzesfegyver = [1, 2, 3, 2, 3, 2, 3, 2, 3]; // fegyverek sebzései
ellenfelhp = [1, 2, 2, 4, 6]; // ellenfél életerő

mappak = ["scientists","starwars","Potter","rings"]; // pályák grafikáját tartalmazó mappák nevei
idlist = [ // idézetek
    [
        [
            'A mi családunk a költészet és a matematika váltakozó rétege.',
            'Isten nem adott nekünk az elképzeléseink és érzéseink nagyon korlátozott kifejezési képességénél többet.',
            'A motor bármely határozatlan funkció anyagi kifejeződése, bármilyen fokú általánosságban és összetettségben.'
        ].sort((a,b) => Math.random() - 0.5),
        [
            'Nekem azt tanították, hogy a haladás útja se nem gyors, se nem könnyű.',
            'Az életben semmi félelmetes nincsen. Csak meg kell próbálnunk megérteni. Ha többet értenénk belőle, máris nem lenne annyi félnivalónk.',
            'Hinnünk kell, hogy tehetségesek vagyunk valamiben, és azt a valamit bérmi áron is el kell érnünk.'
        ].sort((a,b) => Math.random() - 0.5),
        [   
            'Csak a hülyék tudnak mindent, a többiek életük végéig tanulnak! ',
            'Aki még sosem követett el hibát, valószínűleg még sosem próbált semmi új dolgot.',
            'Ne sikeres ember próbálj lenni, hanem értékes'
        ].sort((a,b) => Math.random() - 0.5),
        [
            'A sírban majd eleget pihenünk',
            'Rossz az öregség, ha butasággal párosul.',
            'XIV. Lajos azt monda: "Az állam én vagyok."; Trockij azt mondhatta volna: "A társadalom én vagyok."; én azt mondom: "A valóság én vagyok."'
        ].sort((a,b) => Math.random() - 0.5),
        [   
            'Az élet tragikus lenne, ha nem lenne vicces.',
            'Az intelligencia a változáshoz való alkalmazkodóképesség.',
            'Minden értelmes ember önfejűnek tűnik időnként.'
        ].sort((a,b) => Math.random() - 0.5)
    ],
    [
        [
            "A harc senkit sem tesz naggyá.",
            "A szerencsejáték a vesztesek sportja.",
            "Az erő veled lesz. Mindig."
        ].sort((a,b) => Math.random() - 0.5),
        [
            "Tedd, vagy ne tedd, de sose próbáld!",
            "A félelem a sötét oldal kapuja.",
            "Az erő hatalmas."
        ].sort((a,b) => Math.random() - 0.5),
        [
            "Hitvány tudásod nem vetekedhet a sötét oldal hatalmával!",
            "Ne tétovázz, és ne kegyelmezz!",
            "Felejtsd el a múltat. Töröld el, hogy ha muszáj. Csak így válhatsz azzá, akivé válnod kell"
        ].sort((a,b) => Math.random() - 0.5),
        [
            "Igyekezz megválni önként mindentől, amit fájna elveszítened.",
            "Ne feledd! Amire figyelsz, az a világod.",
            "Rá fogsz jönni, hogy sok igazság, amihez ragaszkodunk, javarészt a mi szemszögünkön múlik."
        ].sort((a,b) => Math.random() - 0.5),
        [
            "Így száll hát sírba a szabadság: tapsvihar közepette.",
            "Minden meghal egyszer, még a csillagok is kihunynak.",
            "Meghalni a népért igen nagy áldozat. De élni a népért annál is nagyobb áldozat."
        ].sort((a,b) => Math.random() - 0.5)
    ],
    [
        [
            "A nagyság irigységet vet, az irigység gyűlöletet teremt, a gyűlölet hazugságot szül.",
            "Van amikor muszáj a nagyobb jóra figyelni!",
            "Sötétség nélkül nem létezik a fény sem.",
        ].sort((a,b) => Math.random() - 0.5),
        [
            "„Ne szánd a halottakat! Az élőket sajnáld, s legfőképpen azokat, akik szeretet nélkül élnek.”",
            "Dobby mostmár szabad manó.",
            "Mindenkiben van fény és némi sötétség is. A kérdés az, hogy melyik részre hallgatunk."
        ].sort((a,b) => Math.random() - 0.5),
        [
            "Ennyi idő után is? -Örökké",
            "Mered használni a saját varázslataimat ellenem, Potter?",
            "lehet, hogy elkerülte a figyelmedet, de az élet nem igazságos",
        ].sort((a,b) => Math.random() - 0.5),
        [
            "Ostobaság volt azt hinnem, hogy ez a kölyök valaha is erősebb volt, mint én.",
            "Nem tudott elpusztítani az átok, ami bárki mást a halálba küldött volna.",
            "Titokzatos dolog az idő. Hatalma van. És ha játszunk vele, veszélyes!",
        ].sort((a,b) => Math.random() - 0.5),
        [
            "A döntéseinkben, nem pedig a képességeinkben mutatkozik meg, hogy kik is vagyunk valójában.",
            "Csak azért, mert te egy teáskanál érzelmi színvonalán állsz, nem kell másokról is ezt feltételezned.",
            "Van amikor muszáj a nagyobb jóra figyelni!"
        ].sort((a,b) => Math.random() - 0.5)
    ],
    [
        [
            "Sok mindent elfelejtettem, amiről azt hittem, hogy tudom, és sok mindent megtanultam, amit már elfelejtettem.",
            "Nem akarok harcolni. De ölbe tett kézzel várni az elkerülhetetlent még rosszabb.",
            "Na jó, de mi lesz a 2. reggelivel?",
        ].sort((a,b) => Math.random() - 0.5),
        [
            "Szívünknek mégis a béke, a nyugalom, és a jól művelt föld a legkedvesebb.",
            "Akad még jó ebben a világban, amiért érdemes küzdeni.",
            "Ha én egyszer alszom, akkor alszom, akár legurulok, akár nem"
        ].sort((a,b) => Math.random() - 0.5),
        [
            "menj el és ne gyere többet vissza",
            "A drágaság a miénk kell, hogy legyen",
            "A komisz kis hobbitkák ellopták tőlünk",
        ].sort((a,b) => Math.random() - 0.5),
        [   "Nem bújhatsz el. Látlak téged!",
            "Nincs élet utánam, csak halál.",
            "Az éj átfest sok gondolatot."
        ].sort((a,b) => Math.random() - 0.5),
        [
            "Ne menj oda tanácsért, mert nemet és igent is fognak mondani.",
            "Felesleges a bosszú; nem fog meggyógyítani semmit.",
            "Sokan élnek, akik halált érdemelnek, és néhányan meghalnak, akik élhetnének."
        ].sort((a,b) => Math.random() - 0.5)
    ]   
]


window.addEventListener("load", e => {
    s = "<div class='c'>" + "<h1>Válassz pályát!</h1>"
    s += nevek // pályaválasztáshoz pályák képeinek betöltése
            .map((v, i) => `<div onclick="start(${i})"><img class="x" src="../pic/o${i}.pgj.png"><br>${v}</div>`)
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
sz = 1;
xx = 0
hi = 0

// f-fiú/l-lány
let kar = '';
// játékos neve
let jatekos = '';
// cheat
let pause = false;
// fegyver sorszam + sebzes
let fegyver = 0;
let fegyversebzes = 1;
// ellenseg hp
let ehp = 1;
// lovesek szama
let lovesek = 3;

// sci 0..3
// sw 4..7
// hp 8..11
// lotr 12..15
// 0-kérdés 1..4-válaszok 5-helyes
let quizt = [];
quizt.push(["1. Miről ismert Ada Byron?", 
	"a lyukkártya feltatálója",
	"híres blues énekes New Orleans-ban", 
	"leírást készített a Charles Babbage által tervezett első mechanikai számítógéphez", 
	"semmiről, mert nem ismerem", 
	2 ]);
quizt.push(["2. Minek volt az úttörő kutatója Marie Curie?", 
	"a radioaktivitás", 
	"az elektromosság", 
	"a csillagászat", 
	"a kanyaró elleni oltás", 
	0]);
quizt.push(["3. Mi Albert Einstein leghíresebb egyenlete?", 
	"W=U*Q", 
	"P=U*I", 
	"Fe=m*a", 
	"E=m*c&sup2;", 
	3]);
quizt.push(["4. Mi volt Erdős Pál foglalkozása?", 
	"fizikus", 
	"programozó",  
	"kémikus", 
	"matematikus", 
	3]);
quizt.push(["1. Melyik Sithet ölte meg Obi-Wan Kenobi?", 
	"Count Dooku", 
	"Darth Vader", 
	"Emperor Palpatine", 
	"Darth Maul", 
	3]);
quizt.push(["2. Hogy hívják Baby Yodát?",
	"George", 
	"Krait", 
	"Grogu", 
	"Rancor", 
	2]);
quizt.push(["3. Kiből lett a Sith nagyúr?", 
	"Lando Calrissian", 
	"Kylo Ren", 
	"Boba Fett", 
	"Senator Palpatine", 
	3]);
quizt.push(["4. Ki lett Anakin Skywalkerből?", 
	"Darth Maul", 
	"Darth Vader", 
	"Darth Revan", 
	"Jedi Master Skywalker", 
	1]);	
quizt.push(["1. Melyik filmben derül ki, hogy Draco Malfoy halálfaló?", 
	"Harry Potter és a Főnix Rendje", 
	"Harry Potter és a Félvér Herceg", 
	"Harry Potter és a Halál ereklyéi 1. rész", 
	"Harry Potter és a Halál ereklyéi 2. rész", 
	1]);
quizt.push(["2. Melyik család házimanója Dobby?", 
	"Potter", 
	"Weasley", 
	"Malfoy", 
	"Black", 
	2]);	
quizt.push(["3. Milyen tantárgyakat tanított Perselus Piton?", 
	"bájitaltan, sötét varázslatok kivédése", 
	"bűbájtan, bájitaltan", 
	"átváltozástan, bájitaltan", 
	"asztronómia, mágiaörténet", 
	0]);	
quizt.push(["4. Melyik nem volt horcrux?", 
	"Hugrabug Helga kelyhe", 
	"Hollóháti Hedvig diadémja", 
	"Mardekár medálja", 
	"Griffendél kardja", 
	3]);	
quizt.push(["1. Kiket hozott a gyűrű szövetségébe a Trufa és Pippin?", 
	"törpök", 
	"entek", 
	"urukok", 
	"rohírok", 
	1]);
quizt.push(["2. Kivel utazott együtt lrgtöbbet Csavardi Samu?", 
	"Gandalf", 
	"Gimli", 
	"Zsákos Frodó", 
	"Legolas", 
	2]);	
quizt.push(["3. Mi volt Gollam drágasága?", 
	"a felesége", 
	"gyémánt nyaklánc", 
	"arany gyűrű", 
	"családi birtok", 
	2]);	
quizt.push(["4. Ki tartozott Sauron szolgái közé?", 
	"Fehér Gandalf", 
	"Szarumán", 
	"Szürke Gandalf", 
	"Boromir", 
	1]);

// hangok
let snd_lose = new Audio('080047_lose_funny_retro_video-game-80925.ogg');
let snd_sizzle = new Audio('8-bit-sizzle-102668.ogg');
let snd_bleep = new Audio('arcade-bleep-sound-6071.ogg');
let snd_explosion = new Audio('retro-explosion-102364.ogg');
let snd_pickup = new Audio('retro-video-game-coin-pickup-38299.ogg'); 

// fegyverek
let fegyverimgwidth = [50,50,50,10,50,30,20,30,30];
let fegyverimg = Array();
let fLen = nevekfegyver.length;
for (let i = 0; i < fLen; i++) {
    let img=document.createElement("img");
    img.src="../pic/fegyver"+i+".png";
    img.id="fegyver"+i;
    img.width=fegyverimgwidth[i];
    fegyverimg[i]=img;
}

function start(x) {
    xx = x
    document.getElementById("o1").innerHTML = `<img id="szer" class="ka" src="./${mappak[x]}/c1.png"></img>`
    urlParams = new URLSearchParams(window.location.search);
    kar = urlParams.get("n");
    jatekos =  urlParams.get("id");
    document.getElementById("body").addEventListener("keydown", f);
    document.getElementById("bsx").style.display = "none";
    document.getElementById("o1").style.display = "inline-block";
    tank = document.getElementById("tank");
    tank.innerHTML = `<img id="tk" class="tank" src="../pic/${kar}c.png">`;
    tank.style.display = "inline-block";
    tank.style.position = "fixed";
    tank.style.top = `${ty}px`;
    tank.style.left = `${tx}px`;
    setInterval(() => { //játékos mozgatása jobbra vagy balra
        tx += xv; // pozíció módosításához a változó értéke vx == -1 ha balra mozog, 1 ha jobbra, 0 ha nem mozog
        if (tx + 160 > xm || tx < 0) xv = -xv; // ha a szélén van pattanjon vissza
        tank.style.left = `${tx}px`; // pozíció módosítása
    }, 200);
    l = setInterval(() => { // lövedék mozgatása
        document.querySelectorAll(".golyo").forEach( v => {
            x1 = v;
            x2 = document.getElementById("o1");
            if (coll(x1, x2)) {
                snd_explosion.play(); 
                fds = 0
                if (sz < 5) {
                    document.getElementById("szer").style.display = "none"
                    setTimeout(quiz, 2000)
                } else {
                    alert("Az utolsó szereplő is meghalt, You WIN!")
                    document.getElementById("body").innerHTML = "<a href='../'>Új játék</a>"
                }
            }
        });
    }, 10);
    statusFrissit();
}

// Lili
function quiz() {
    let index = xx*4+sz-1;
    let helyes = quizt[index][5];

    document.getElementById("quiz").innerHTML=`
        <h1>Jelöld meg a helyes választ!</h1>
        <h2>${quizt[index][0]}</h2>
        <div class="left">
        <p>
            <input type="checkbox" id="q0" name="q0" onchange="endquiz(${helyes}, 0, '${quizt[index][1]}')">
            <label for="q0">${quizt[index][1]}</label><br>
        </p>
        <p>
            <input type="checkbox" id="q1" name="q1" onchange="endquiz(${helyes}, 1, '${quizt[index][2]}')">
            <label for="q0">${quizt[index][2]}</label><br>
        </p>
        <p>
            <input type="checkbox" id="q2" name="q2" onchange="endquiz(${helyes}, 2, '${quizt[index][3]}')">
            <label for="q0">${quizt[index][3]}</label><br>
        </p>
        <p>
            <input type="checkbox" id="q3" name="q3" onchange="endquiz(${helyes}, 3, '${quizt[index][4]}')">
            <label for="q0">${quizt[index][4]}</label>
        </p>
        </div>

        <!--button onclick="endquiz()">Quiz vége</button-->
    `
}
function endquiz(helyes, valasz, szoveg) {
    if (helyes == valasz) {
        document.getElementById("quiz").innerHTML=`<h1>Helyes válasz!<br>
        (${szoveg})<br>
        +1 lövést nyertél.</h1>`    
        lovesek++;
    } else {
        document.getElementById("quiz").innerHTML=`<h1>Helytelen válasz!<br>
        (${szoveg})<br></h1>`    
    }
    
    setTimeout(() => {
        document.getElementById("quiz").innerHTML=``
        novelsz();
        document.getElementById("szer").style.display = "inline-block"
        document.getElementById("szer").setAttribute("src", `./${mappak[xx]}/c${sz}.png`)
    }, 3000)
}

// Abi
function fd() {
    if (fds) {
        fds = 0
        document.getElementById("szer").style="display: none;"
        document.getElementById("idezet").style.display="inline-block"
        if (idlist[xx] !== undefined && idlist[xx][sz-1] !== undefined && idlist[xx][sz-1][hi] !== undefined) {
            document.getElementById("idezet").innerHTML=`<h1>${idlist[xx][sz-1][hi]}</h1>`
        } else {
            log("nincs definiálva idlist["+xx+"]["+sz+"]["+hi+"]" );
        }
        if (hi<2) {
            setTimeout(()=>{
                document.getElementById("idezet").style.display="none";
                document.getElementById("szer").style="display: inline-block;";
            },5000)
            hi++
        }
        else {
            setTimeout(()=>{
                document.getElementById("idezet").innerHTML='<h1>Game OVER</h1>'
                snd_lose.play(); 
            },3000)
        } 
    }
}
function coll(el1, el2) { // lövedék eltalálja-e a karaktert (ütközésvizsgálat)
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
            snd_sizzle.play(); 
            if (lovesek>0) {
                lovesek--;
                statusFrissit();
            }
            
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
            g.appendChild(fegyverimg[fegyver]);

            g.style = `animation-name: g${ci};`
            // background-color: rgb(${
            //     Math.round(Math.random() * 200)
            // }, ${
            //     Math.round(Math.random() * 200)
            // }, ${
            //     Math.round(Math.random() * 200)
            // });`;
            
            ci++;
            document.getElementById("body").appendChild(st);
            document.getElementById("body").appendChild(g);
            break;
        case "ő":
        case "Ő":
            if (pause) {
                pause = false;
                document.getElementById("o1").style.animationPlayState = 'running';
            } else {
                pause = true;
                document.getElementById("o1").style.animationPlayState = 'paused';
            }

    }
}

function statusFrissit() {
    document.getElementById("status").innerHTML=`
    <img width="100px" class="center" src="../pic/logo.png"><br>
    Pálya:<br>
    <b>${nevek[xx]}</b><br>
    Ellenfél:<br>
    <b>${nevekellenfel[xx][sz-1]}</b><br>
    Életerő:<br>
    <b>${ehp}</b><br>
    Játékos:<br>
    <img width="100px" class="center" src="../pic/p${jatekos}.jpg"><br>
    <div class="center"><b>${nevekjatekos[jatekos]}</b></div>
    Fegyver:<br> 
    <b>${nevekfegyver[fegyver]}</b><br>
    Sebzés:<br>
    <b>${fegyversebzes}</b><br>
    Lövések:<br>
    <b>${lovesek}</b><br>          
`;
document.getElementById("status").style.display="inline-block";
}

function novelsz() {
    if (sz<5) {
        sz++;
        if (sz == 1 || sz == 2) {
            fegyver = 0;
        }
        if (sz == 3 || sz == 4) {
            fegyver = xx*2+1;
        }
        if (sz == 5) {
            fegyver = xx*2+2;
        }
        fegyversebzes = sebzesfegyver[fegyver];
        ehp = ellenfelhp[sz-1];
        statusFrissit();
    }
}

function log(msg) {
    var d = new Date();
    var t = d.toLocaleTimeString('hu-HU') + `.${d.getMilliseconds()}`;
    console.log(t + ' ' + msg);
} 