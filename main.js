
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







var listbutton = document.getElementsByClassName('BouttonRadio');

listbutton[0].addEventListener("click",add);
listbutton[1].addEventListener("click",add);
listbutton[2].addEventListener("click",add);
listbutton[3].addEventListener("click",add);


function add(){
alert();

}