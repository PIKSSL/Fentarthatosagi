
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
          tartalom += "<div id='"+i+"' class='cikk'><div class='keskep'><img src='"+element.kapl+"' alt='#'></div><div class='szoveg'><h3>"+element.focim+"</h3><p>"+element.be1+"</p></div></div>";
          i++;
      });
      document.getElementById("ctarolo").innerHTML=tartalom;
      for (let index = 0; index < i; index++) {
          let item = document.getElementById(index);
        item.addEventListener("click", overlayOn,false);
        item.style.cursor = "pointer";
        
    }
    });
    
}

function overlayOn(event){
    //console.log("teszt");
    let item = event.currentTarget;
    let tartalom ="";
    document.querySelector("body").style.overflow="hidden";
    document.getElementById("nagycikk").style.display="block";
    fetch('../Tartalom/cikkek/cikktarolo.json')
    .then(response => response.json())
    .then(data => {
      let tomb=data.cikkek;
      console.log(item)
      
        for (const key in tomb[item.id]) {
          console.log(key)
          if(key.indexOf("focim")>=0){
            tartalom += "<h2>"+tomb[item.id][key]+"</h2>";
          }
          else if(key.indexOf("be")>=0){
            tartalom += "<p>"+tomb[item.id][key]+"<br></p>";
          }
          else if(key.indexOf("cim")>=0){
            tartalom += "<h3>"+tomb[item.id][key]+"</h3>";
          }
          else if(key.indexOf("kapl")>=0){
            tartalom += "<img src='"+tomb[item.id][key]+"' alt='"+item.id+"'>";
          }
          else if(key.indexOf("hiv")>=0){
            tartalom += "<a href='"+tomb[item.id][key]+"'>Külső forrás>>></a>";
          }
        }
      
  
      console.log(item)
      document.getElementById("cikktartalom").innerHTML = tartalom;
    });
    
}
function overlayOff(){
    document.querySelector("body").style.overflow="visible";
    document.getElementById("nagycikk").style.display="none";
}