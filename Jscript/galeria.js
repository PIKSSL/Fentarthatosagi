window.addEventListener("load", function (){
    fetch("../Tartalom/galeria/ruhakz.json")
        .then(valasz => valasz.json())
        .then(adat => {
            console.log(adat);
            console.log(adat.ruhakz);
            megjelenit(adat.ruhak);
            tomb=adat.ruhak;
            })
        .catch((error)=>console.log("hiba",error));
});
function megjelenit(ruhakz){
    let txt=" ";
    ruhakz.forEach(ruha => {
         txt+="<ul>";
         for (const key in ruha) {
             console.log(key,ruha[key])
             txt+=`<li>${key}:${ruha[key]}`+`</li>`;
         }
         txt+="</ul>";
    });
     document.querySelector("article").innerHTML=txt;
}

function ID(elem){
    return document.getElementById(elem);
}
function CLASS(elem){
    return  document.getElementsByClassName(elem)
}
function $(elem){
    return  document.querySelectorAll(elem)
}


