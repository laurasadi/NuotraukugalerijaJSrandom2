const rodyti = document.getElementById("rodyk");
const maisyti = document.getElementById("maisyk");
rodyti.addEventListener("click",parodymas);
maisyti.addEventListener("click", ismaisymas);

function parodymas() {
    var nuotraukos = document.getElementById("gallery");
    var mygtukasmaisyti = document.getElementById("maisyk")
    if (nuotraukos.style.display === "none" && mygtukasmaisyti.style.display ==="none") {
        nuotraukos.style.display = "block";
        mygtukasmaisyti.style.display ="inline-block";
        document.getElementById("rodyk").value = "Nerodyti";
    } else {
        nuotraukos.style.display = "none";
        mygtukasmaisyti.style.display="none";
        document.getElementById("rodyk").value = "Rodyti";
    }
}
function ismaisymas(){
let nuotraukos = document.querySelectorAll("img");
let kieknuotrauku = nuotraukos.length;
let random, keisti;
while (kieknuotrauku>0){
    random=Math.floor(Math.random()*kieknuotrauku);
    kieknuotrauku--;
    keisti=nuotraukos[kieknuotrauku].src;
    nuotraukos[kieknuotrauku].src=nuotraukos[random].src;
    nuotraukos[random].src=keisti;
}}
