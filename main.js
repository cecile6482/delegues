let firstNames = [
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
      
      let name1="";
      let name2="";
      let chiffre2 = 0;
      let chiffre1 = 0;

      function entierAleatoire(min, max)
      {
       return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      document.getElementById("generate")
      .addEventListener("click", function() {
         chiffre1 = entierAleatoire(0, (firstNames.length-1));
         console.log(JSON.parse(JSON.stringify(chiffre1)))  /*me sert à afficher en temps réel la valeur de chiffre 1 au clik*/
        do{
         chiffre2 = entierAleatoire(0, (firstNames.length-1));
         console.log(JSON.parse(JSON.stringify(chiffre2)))  /*me sert à afficher en temps réel la valeur de chiffre 2 au clik*/
          }
          while  (chiffre1 == chiffre2);
          name1 = (firstNames[chiffre1]);
          name2=  (firstNames[chiffre2]);
          document.getElementById("randomNames").innerText = name1;
          document.getElementById("randomNames2").innerText = name2;
                                             }
                        );




  