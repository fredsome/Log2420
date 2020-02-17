
var btn = document.createElement("input"); 
var label =document.createElement("label");
document.body.appendChild(btn);
btn.set;
btn.name ="radio";

fetch('https://log2420-serve.herokuapp.com/JSON/output.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    
  for (var i =0;i< data.Elections.length ;i++){
       document.getElementsByClassName('SousTitreEcole')[i].innerHTML = "<div>" + data.Elections[i].name + "</div>";
       document.getElementsByClassName('SousSoustitreEcole')[i].innerHTML = "<div>" + data.Elections[i].date + "</div>";
   
  }
    for (var i =0;i< data.PartisProvinciaux.length ;i++){
    
      document.getElementsByClassName('SousTitreEcoleMillieu2')[i].innerHTML = "<div>" + data.PartisProvinciaux[i].abreviation + "</div>";
      document.getElementsByClassName('SousSoustitreEcoleMilieu2')[i].innerHTML = "<div>" + data.PartisProvinciaux[i].fullname + "</div>";
    
    }
    for (var i =0;i< data.PartisFederaux.length ;i++){
    
      document.getElementsByClassName('SousTitreEcoleMillieu')[i].innerHTML = "<div>" + data.PartisFederaux[i].abreviation + "</div>";
      document.getElementsByClassName('SousSoustitreEcoleMilieu')[i].innerHTML = "<div>" + data.PartisFederaux[i].fullname + "</div>";
    
    }
   
  })
  .catch(function (err) {
    console.log(err);
  });

  var Titre = document.getElementById("miniTitre");
  var CanvasP = document.getElementById("typeprovincial");
  var CanvasF = document.getElementById("typeFederaux");
  var listbutton = document.getElementsByClassName('BouttonRadio');
listbutton[0].addEventListener("click",Federaux);
listbutton[1].addEventListener("click",Provinciaux);
listbutton[2].addEventListener("click",Federaux);
listbutton[3].addEventListener("click",Provinciaux);

var type;

function Federaux(){
Titre.textContent ="Partis politiques fédéreaux"
    CanvasP.style.display ="none";
    CanvasF.style.display ="block";
}
  
function Provinciaux(){
  Titre.textContent ="Partis politiques provinciaux"
  CanvasP.style.display ="block";
  CanvasF.style.display ="none";
  
}

