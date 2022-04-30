
window.addEventListener("load", init);



function init(){
fetch('../Tartalom/cikkek/cikktarolo.json')
  .then(response => response.json())
  .then(data => {
    console.log(data.cikkek);
    var tomb=data.cikkek
    tomb.forEach(element => {
        document.getElementById("ctarolo").innerHTML = "<div id='cikk' class='1'><div class='keskep'><img src='"+element.kep+"' alt='#'></div><h3>"+element.focim+"</h3><p>Rövidleirásrövidleirásasdasdasdasdadasdasdasd</p></div>";;

    });
    

  })
    
}


function feltolt(){
    let tartalom = "";
    let i = 0;
    adatok.forEach(adat => {
        tartalom+="<div id='cikk' class='"+i+"'><div class='keskep'><img src='"+adat.kep+"' alt='#'></div><h3>"+adat.focim+"</h3><p>Rövidleirásrövidleirásasdasdasdasdadasdasdasd</p></div>";
        i++;
    });
    document.getElementById(tartalom).innerHTML=tartalom;
}
