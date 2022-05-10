window.addEventListener("load", function (){
    fetch("../Tartalom/galeria/ruhak.json")
        .then(valasz => valasz.json())
        .then(adat => {
            console.log(adat);
            console.log(adat.ruhak);
            megjelenit(adat.ruhak);
            })
        .catch((error)=>console.log("hiba",error));
});
function megjelenit(ruhak){
    let txt=" ";
    ruhak.forEach(ruha => {
         txt+="<ul>";
         for (const key in ruha) {
             console.log(key,ruha[key])
             txt+=`<li>${key}:${ruha[key]}</li>`;
         }
         txt+="</ul>";
    });
     document.querySelector("article").innerHTML=txt;
}