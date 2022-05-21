window.addEventListener("load",kezdolap);

var leirasok=["<h1>A zero waste kollekció:</h1><p>Egy jól tervezett folyamat lényege, hogy ne keletkezzen szemét, legfeljebb hulladék. A természetben az anyagok folyamatos átalakuláson mennek keresztül, de sohasem kerülnek ki egy zárt körforgásból. Vagyis körkörösen, a lehető leghatékonyabban újrahasznosítható erőforrások. Ezzel szemben az átgondolatlan termelési folyamatok felesleget eredményeznek. Ez a szemét. Teljesen mindegy, hogy a szemét elpazarolt alapanyag, energia, vagy humán tőke. <br>hulladék nélküli öltözékek elkészítése magas szintű szabászati és kivitelezési ismereteket feltételez, ami korlátozta volna a lehetőségeket. Ezért a hulladék mentesség bemutatására három tervezési és kivitelezési koncepciót választottunk:</p><ul><li>hulladékmentes szabászati és kivitelezési megoldásokkal készített öltözékek,</li><li>maradék anyagok felhasználásával készített öltözékek,</li><li>upcycle koncepcióval készített öltözékek.</li></ul><p>Ezekkel az eljárásokkal azok számára is adhatnak a diákok kreatív ötleteket, akik tudnak varrni és azoknak is, akik most kapnak kedvet ahhoz, hogy megtanulják</p>","            <h1>A kreatív kísérletek kollekció:</h1><p>A kreatív kísérletek kollekció bepillantást enged a tervezési folyamat egyik fázisába, ahol a diákok kötöttségek nélkül, a formákkal szabadon kísérletezve alkothatták meg az elképzeléseiket régi férfiingeket használva alapanyagként. <br>A feladat az ing alkotóelemeire bontása, a kapott alkatrészek újrakomponálása volt. <br>A bemutatásra kerülő modellek a tervezési folyamat egy pillanatfelvételét testesítik meg, a kibontakozó ötletek egy-egy lehetséges irányát mutatják meg a számtalan lehetőség közül, amelyeket továbbfejlesztve születnek majd meg a végső öltözékek</p>"];
function kezdolap(){
    document.querySelector(".zlink .le").addEventListener("click",le1);
    document.querySelector(".klink .le").addEventListener("click",le2);
    document.getElementById("leiras").style.display="none";
}

function le1(){
    let leiras = document.getElementById("leiras");
    leiras.style.display="inline";
    leiras.innerHTML=leirasok[0];
}
function le2(){
    let leiras = document.getElementById("leiras");
    leiras.style.display="inline";
    leiras.innerHTML=leirasok[1];
}


function Show() {
    let navList = document.getElementById("nav-lists");
    navList.classList.add("_Menus-show");
    }
    
function Hide(){
    let navList = document.getElementById("nav-lists");
    navList.classList.remove("_Menus-show");
    }

