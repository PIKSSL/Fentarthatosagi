
window.addEventListener("load", init);



function init(){
feltolt();
}


function feltolt(){
    let tartalom = "";
    var i = 0;
    fetch('../Tartalom/cikkek/cikktarolo.json')
    .then(response => response.json())
    .then(data => {
      //console.log(data.cikkek);
      let tomb=data.cikkek
      //console.log(tomb);
      tomb.forEach(element => {
          tartalom += "<div id='cikk' class='"+i+"'><div class='keskep'><img src='"+element.kep+"' alt='#'></div><div class='szoveg'><h3>"+element.focim+"</h3><p>"+element.be1+"</p></div></div>";
          i++;
      });
      document.getElementById("ctarolo").innerHTML=tartalom;
      for (let index = 0; index < i; index++) {
          let item = document.getElementsByClassName(index)[0];
        item.addEventListener("click", overlayOn);
        item.style.cursor = "pointer";

    }
    });
    
}
//HIBÁS:
/*function DZS(eleresi){
    fetch('../Tartalom/cikkek/cikktarolo.json')
    .then(response => response.json())
    .then(data => {
      let tomb=data.cikkek
      return tomb;
    })
}*/

function overlayOn(){
    //console.log("teszt");
    let item = event.target;
    let tartalom ="";
    document.getElementById("nagycikk").style.display="block";
    fetch('../Tartalom/cikkek/cikktarolo.json')
    .then(response => response.json())
    .then(data => {
      let tomb=data.cikkek
      console.log(tomb[1]);
      
      console.log(item)
      document.getElementById("cikktartalom").innerHTML = tartalom;
    });
    
}
function overlayOff(){
    document.getElementById("nagycikk").style.display="none";
}