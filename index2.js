const firstNames = [
    'Lucie',
    'Adrien',
    'Cécile', 
    'Steeven',
    'Kevin',
    'Florian',
    'Cedric',
    'Kenny',
    'Thomas',
    'Aymeric',
    'Olivier',
    'Aurore'
      ];
       
var newNames = [];




for (var i = 0; i < 2; i++) {
  var idx = Math.floor(Math.random() * firstNames.length);
  newNames.push(firstNames[idx]);
  firstNames.splice(idx, 1);
}

const setRandomNames = () => {
document.getElementById("randomNames").innerText = newNames;
}

 document.getElementById("generate")
    .addEventListener("click", setRandomNames);    
     
     
     
    