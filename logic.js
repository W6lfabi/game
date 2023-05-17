// Játékosok listájához nevek
nevek=["Lilcsi","Tesch","Roli","Patrik","Zsigi","Imó","Valentin","Dani","Zalán","Bende","Tomi","Philipp","Flóri","Abi","Lackó"];

window.addEventListener("load", e => {
    s = "<h1>Válassz játékost!</h1><div class='c'>" // a játékosok listája
    s +=    // a neveket módosítjuk a játékosok képeit is tartalmazó div-ekre
            nevek.map((v, i) => `<div onclick="f(event)"><img class="def" src="pic/p${i}.jpg"><br>${v}</div>`)
            // a listát összefűzzük egy szöveggé
            .join("");
    document.getElementById("b1").innerHTML = s+ "</div>"; 
})
function f(e) {
    x = e.target.getAttribute("src");
    v = x.split(".")[0].substring(5);
    l = "f" // a legtöbben fiúk
    // kiveéve a 0. 5. 12. és 13. szereplő, ők (mi) lányok (vagyunk)
    if (v==0 || v==5 || v==12 || v==13) l = "l" 
        document.location.href="game/index.html?n="+l+"&id="+v;
}
