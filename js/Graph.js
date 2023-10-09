var len = undefined;

var fonts ={ strokeWidth: 2,size:35 }

var nodes = [
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

// create a network
var container = document.getElementById("box_automaton");
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
network = new vis.Network(container, data, options);



// Arreglo de identificadores de estados finales
const estadosFinales = [0, 10, 1, 3, 11, 22, 28, 18, 14, 15, 27, 6, 26, 9, 25, 21];

// Función para verificar una palabra
function verificarPalabra(palabra) {
  let estadoActual = 0; // El estado inicial
  for (let i = 0; i < palabra.length; i++) {
    const simbolo = palabra[i];
    // Buscar la transición desde el estado actual con el símbolo actual
    const transicion = edges.find((edge) => edge.from === estadoActual && edge.label === simbolo);
    if (!transicion) {
      return false; // No se encontró una transición válida, la palabra es rechazada
    }
    estadoActual = transicion.to; // Moverse al siguiente estado
  }
  // Verificar si el estado actual es un estado final
  return estadosFinales.includes(estadoActual);
}

// Ejemplo de uso
const palabra = "abab"; // Cambia esto por la palabra que quieras verificar
const esAceptada = verificarPalabra(palabra);
if (esAceptada) {
  console.log("La palabra es aceptada por el autómata.");
} else {
  console.log("La palabra es rechazada por el autómata.");
}

// Función para validar una palabra ingresada
function validarPalabra() {
  const inputElement = document.getElementById("input_regular_phrase");
  const palabra = inputElement.value;
  const esAceptada = verificarPalabra(palabra);

  const acceptedWordsElement = document.getElementById("accepted_words");
  const unacceptedWordsElement = document.getElementById("unaccepted_words");

  if (esAceptada) {
    acceptedWordsElement.value += palabra + "\n";
  } else {
    unacceptedWordsElement.value += palabra + "\n";
  }

  // Limpiar el campo de entrada después de la validación
  inputElement.value = "";

  // Poner el cursor en el campo de entrada
  inputElement.focus();
}
