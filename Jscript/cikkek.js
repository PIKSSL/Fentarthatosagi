
window.addEventListener("load", init);



function init(){
feltolt();
}


function feltolt(){
    let tartalom = "";
    let i = 0;
    fetch('../Tartalom/cikkek/cikktarolo.json')
    .then(response => response.json())
    .then(data => {
      //console.log(data.cikkek);
      var tomb=data.cikkek
      console.log(tomb);
      tomb.forEach(element => {
          tartalom += "<div id='cikk' class='"+i+"'><div class='keskep'><img src='"+element.kep+"' alt='#'></div><h3>"+element.focim+"</h3><p>"+element.be1+"</p></div>";
          i++;
      });
      document.getElementById("ctarolo").innerHTML=tartalom;
    })
}
