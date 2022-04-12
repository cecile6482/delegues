const firstNames = [
    'Lucie',
    'Adrien',
    'Cécile', 
    'Kevin M',
    'Kevin L',
    'Florian',
    'Cedric',
    'Kenny',
    'Thomas',
    'Aymeric',
    'Olivier',
    'Aurore'
      ];

      const secondNames = [
        'Lucie',
        'Adrien',
        'Cécile', 
        'Kevin M',
        'Kevin L',
        'Florian',
        'Cedric',
        'Kenny',
        'Thomas',
        'Aymeric',
        'Olivier',
        'Aurore'
          ];

          const getRandomName = () => `${firstNames[Math.floor(Math.random() * firstNames.length)]} & ${secondNames[Math.floor(Math.random() * secondNames.length)]}`;

          const setRandomNames = () => {
          document.getElementById("randomNames").innerText = getRandomName();
          }

          document.getElementById("generate")
            .addEventListener("click", setRandomNames);