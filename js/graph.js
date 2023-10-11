

var fonts ={ strokeWidth: 2,size:35 }


var nodes = [
  { id: 100, label: "START", group: 0, shape: "triangle"},
  { id: 0, label: "q00", group: 0 },
  { id: 1, label: "q01", group: 0 },
  { id: 2, label: "q02", group: 0 },
  { id: 3, label: "q03", group: 1 },
  { id: 4, label: "q04", group: 1 },
  { id: 5, label: "q05", group: 1 },
  { id: 6, label: "q06", group: 2 },
  { id: 7, label: "q07", group: 2 },
  { id: 8, label: "q08", group: 2 },
  { id: 9, label: "q09", group: 3 },
  { id: 10, label: "q10", group: 3 },
  { id: 11, label: "q11", group: 3 },
  { id: 12, label: "q12", group: 4 },
  { id: 13, label: "q13", group: 4 },
  { id: 14, label: "q14", group: 4 },
  { id: 15, label: "q15", group: 5 },
  { id: 16, label: "q16", group: 5 },
  { id: 17, label: "q17", group: 5 },
  { id: 18, label: "q18", group: 6 },
  { id: 19, label: "q19", group: 6 },
  { id: 20, label: "q20", group: 6 },
  { id: 21, label: "q21", group: 7 },
  { id: 22, label: "q22", group: 7 },
  { id: 23, label: "q23", group: 7 },
  { id: 24, label: "q24", group: 8 },
  { id: 25, label: "q25", group: 8 },
  { id: 26, label: "q26", group: 8 },
  { id: 27, label: "q27", group: 9 },
  { id: 28, label: "q28", group: 9 },
];
var edges = [
  //rama principal de b
  { from: 100, to: 0, label: "", font:fonts, arrows:'to'},
  { from: 0, to: 1, label: "b", font:fonts, arrows:'to'},
  { from: 1, to: 16, label:"a", font:fonts, arrows:'to'},
  { from: 16, to: 17,label:"a", font:fonts, arrows:'to'},
  { from: 17, to: 18,label:"a", font:fonts, arrows:'to'},
  { from: 18, to: 19,label:"a", font:fonts, arrows:'to'},
  { from: 19, to: 20,label:"a", font:fonts, arrows:'to' },
  { from: 20, to: 21,label:"a", font:fonts, arrows:'to' },
  { from: 20, to:26, label:"b", font:fonts, arrows:'to'},
  { from: 1, to: 22, label:"b", font:fonts, arrows:'to' },
  { from: 22, to: 23, label:"a", font:fonts, arrows:'to' },
  { from: 17, to: 22, label:"b", font:fonts, arrows:'to' },
  { from: 18, to: 22, label:"b", font:fonts, arrows:'to' },
  { from: 23, to: 24, label:"a", font:fonts, arrows:'to' },
  { from: 24, to: 25, label:"a", font:fonts, arrows:'to' },
  { from: 22, to: 26, label:"b", font:fonts, arrows:'to' },
  { from: 24, to: 26, label:"b", font:fonts, arrows:'to' },
    //rama principal de a
  { from: 0, to: 10, label:"a", font:fonts, arrows:'to' },
  { from: 10, to: 2, label:"a", font:fonts, arrows:'to' },
  { from: 2, to: 28, label:"b", font:fonts, arrows:'to' },
  { from: 2, to: 3, label:"a", font:fonts, arrows:'to' },
  { from: 3, to: 4, label:"a", font:fonts, arrows:'to' },
  { from: 4, to: 5, label:"a", font:fonts, arrows:'to' },
  { from: 3, to: 11, label:"b", font:fonts, arrows:'to' },
  { from: 5, to: 27, label:"b", font:fonts, arrows:'to' },
  { from: 5, to: 6, label:"a", font:fonts, arrows:'to' },
  { from: 6, to: 7, label:"a", font:fonts, arrows:'to' },
  { from: 7, to: 8, label:"a", font:fonts, arrows:'to' },
  { from: 8, to: 9, label:"a", font:fonts, arrows:'to' },
  { from: 11, to: 12, label:"a", font:fonts, arrows:'to' },
  { from: 12, to: 13, label:"a", font:fonts, arrows:'to' },
  { from: 13, to: 14, label:"a", font:fonts, arrows:'to' },
  { from: 11, to: 15, label:"b", font:fonts, arrows:'to' },
  { from: 13, to: 15, label:"b", font:fonts, arrows:'to' },
  { from: 28, to: 27, label:"b", font:fonts, arrows:'to' },
  { from: 27, to: 7, label:"a", font:fonts, arrows:'to' },
  { from: 6, to: 26, label:"b", font:fonts, arrows:'to' },
  { from: 8, to: 26, label:"b", font:fonts, arrows:'to' },
  { from: 28, to: 4, label:"a", font:fonts, arrows:'to' },
  { from: 27, to: 26, label:"b", font:fonts, arrows:'to' },
  
];

const finalStates = [0, 1, 3, 11, 22, 28, 18, 14, 15, 27, 6, 26, 9, 25, 21];


nodes[0].size = 0;
nodes[0].font = {
  size: 30,
}

nodes.forEach(element => {
  if(finalStates.includes(element.id)) {
    element.color = '#44ff55';
    element.borderWidth = 3;
  }else {
    element.color = "lightgreen";
  }
});

edges.forEach(element => {
  element.color = "red";
})

var data = {
  nodes: nodes,
  edges: edges,
};

var options = {
  nodes: {
    shape: "circle",
    font: {
      size:48,
    },
    borderWidth: 2,
    shadow: false,
  },
  edges: {
    width: 2,
    shadow: false,
    font: {
      size: 48,
    },
  },
  physics: {
    enabled: true,
    solver: "forceAtlas2Based",
    forceAtlas2Based: {
      gravitationalConstant: -100, // Puedes ajustarlo según tu preferencia
      springConstant: 0.08, // Puedes ajustarlo según tu preferencia
      springLength: 100, // Puedes ajustarlo según tu preferencia
    },
    timestep: 0.35, // Puedes ajustarlo según tu preferencia
    stabilization: {
      enabled: true,
      iterations: 1000,
      fit: true,
    },
  
  },
  
};

var container = document.getElementById("box_automaton");

// create a network
var network = new vis.Network(container, data, options);

// hasta aqui debe llegar este modulo ------------------------------------------------------------------------------------------

var speechLanguage = {
  accepted: {
    es: "La palabra es aceptada por el autómata",
    en: "The word is accepted by the automaton",
    fr: "Le mot est accepté par l'automate",
    pt: "A palavra é aceita pelo autômato"
  },
  unaccepted: {
    es: "La palabra es rechazada por el autómata",
    en: "The word is rejected by the automaton",
    fr: "Le mot est rejeté par l'automate",
    pt: "A palavra é rejeitada pelo autômato"
  }
};

function textToSpeech(isAccepted) {
  var message = '';
  var languageSelector = document.getElementById("languageSelector");
  var selectedLanguage = languageSelector.value; // Obtiene el idioma seleccionado del select
   
  if (isAccepted) {
    if (selectedLanguage == 'en') message = speechLanguage.accepted.en;
    else if (selectedLanguage == 'es') message = speechLanguage.accepted.es;
    else if (selectedLanguage == 'fr') message = speechLanguage.accepted.fr;
    else if (selectedLanguage == 'pt') message = speechLanguage.accepted.pt;
  } else {
    if (selectedLanguage == 'en') message = speechLanguage.unaccepted.en;
    else if (selectedLanguage == 'es') message = speechLanguage.unaccepted.es;
    else if (selectedLanguage == 'fr') message = speechLanguage.unaccepted.fr;
    else if (selectedLanguage == 'pt') message = speechLanguage.unaccepted.pt;
  }
  var utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = selectedLanguage; // Establece el idioma de la voz según la selección del select
  speechSynthesis.speak(utterance);
}


// fin modulo textToEspeech **********************************************************************************

function resetRout() {
  for (let i = 0; i < edges.length; i++) {
    edges[i].background = false
  }
}
// crear modulo validateWord para lo de abajo *****************************************************************************
function getInputRunTime() {
  const inputRunTime = document.getElementById("input_run_time");
  var inputValue = inputRunTime.value;

  // Convierte el valor a un número y multiplica por 1000
  return Number(inputValue);
}

function resetRout() {
  for (let i = 0; i < edges.length; i++) {
    edges[i].background = false
  }
}
async function enabledRout(rout) {
  resetRout();
  delay = getInputRunTime();
  for (let i = 0; i < rout.length; i++) {

    if(rout[i]) {
      let from = rout[i].from;
      let to = rout[i].to;

      let edge = edges.find((edge) => edge.from === from && edge.to === to);
      
      if (edge) {
        edge.background = {
          enabled: true,
          color: "black",
          size: 10,
          dashes: [40, 20],
        };
        
        network.setOptions(options);
        network.setData(data);
        console.log(delay*1000);

        await new Promise((resolve) => setTimeout(resolve, delay*1000));
      }
    }
  }
}


// Función para verificar una palabra
function verifyWord(word) {
  let currentState = 0; // The initial state
  var rout = []
  for (let i = 0; i < word.length; i++) {
    const symbol = word[i];
    // Buscar la transición desde el estado actual con el símbolo actual
    const transition = edges.find((edge) => edge.from === currentState && edge.label === symbol);
    rout.push(transition)
    if (!transition) {
      enabledRout(rout);
      return false; // No se encontró una transición válida, la palabra es rechazada
    }
    
    currentState = transition.to; // Mover al siguiente estado
  }
  enabledRout(rout);
  return finalStates.includes(currentState);
}

// Función para validar una palabra ingresada
function validateWord() {
  const inputElement = document.getElementById("input_regular_phrase");
  const word = inputElement.value;
  const isAccepted = verifyWord(word);

  const acceptedWordsElement = document.getElementById("accepted_words");
  const unacceptedWordsElement = document.getElementById("unaccepted_words");


  if (isAccepted) {
    acceptedWordsElement.value += word + "\n";
  } else {
    unacceptedWordsElement.value += word + "\n";
  }

  textToSpeech(isAccepted);

  // Limpiar el campo de entrada despues de la validación
  inputElement.value = "";

  //Establecer el cursor sobre el campo de entrada
  inputElement.focus();
}

// fin modulo validateWord ************************************************************************



// crear modulo language para lo de abajo *******************************************************************
document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("languageSelector");

  // Cargar las traducciones iniciales
  loadTranslations(languageSelector.value); // Cargar el idioma seleccionado inicialmente

  // Escuchar cambios en el selector de idioma
  languageSelector.addEventListener("change", function () {
    const selectedLanguage = languageSelector.value;
    loadTranslations(selectedLanguage); // Cargar traducciones según el idioma seleccionado
  });

  function loadTranslations(language) {
    fetch(`data/translations.json`) // Ruta al archivo translations.json
      .then((response) => response.json())
      .then((translations) => {
        const languageTranslations = translations[language]; // Obtener las traducciones para el idioma
        // Aplicar las traducciones a los elementos
        if (languageTranslations) {
          for (const key in languageTranslations) {
            if (languageTranslations.hasOwnProperty(key)) {
              const element = document.getElementById(key);
              const translation = languageTranslations[key];
              // Verificar si el elemento existe antes de cambiar su contenido
              if (element) {
                // Si es una etiqueta de entrada, actualiza su atributo "for" en lugar del contenido
                if (element.tagName === "LABEL" && element.hasAttribute("for")) {
                  const inputElement = document.getElementById(element.getAttribute("for"));
                  if (inputElement) {
                    element.textContent = translation;
                  }
                } else {
                  element.textContent = translation;
                }
              }
            }
          }
        }
      })
      .catch((error) => console.error("Error loading translations:", error));
  }
  
});
// fin modulo language *******************************************************************************


