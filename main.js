
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
  })
  .catch(function (err) {
    console.log(err);
  });


  var CanvasP = document.getElementById("typeprovincial");
  var CanvasF = document.getElementById("typeFederaux");
  var listbutton = document.getElementsByClassName('BouttonRadio');
listbutton[0].addEventListener("click",Federaux);
listbutton[1].addEventListener("click",Provinciaux);
listbutton[2].addEventListener("click",Federaux);
listbutton[3].addEventListener("click",Provinciaux);

typeFederaux

function Federaux(){
  
    CanvasP.style.display ="none";
    CanvasF.style.display ="block";
}
  
function Provinciaux(){
  CanvasP.style.display ="block";
  CanvasF.style.display ="none";
  
}

