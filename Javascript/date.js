// Importar la función "differenceInMonths" de la biblioteca date-fns
const modulo = require('./modulo');
const { differenceInMonths } = require('date-fns');

// Objeto para asociar los números de mes con los nombres de los meses
const meses = {
  1: "Enero",
  2: "Febrero",
  // ... otros meses aquí ...
  49: "Enero"
};

// Fecha seleccionada
const fechaSeleccionada = new Date(2023, 6, 29); // 29 de julio del 2023 (meses se cuentan desde 0, por eso 6 es julio)

// Última fecha en el objeto de meses (mes 49)
const ultimaFecha = new Date(2022, 0, 1); // 1 de enero del 2022

// Calcular la diferencia en meses
const diferenciaMeses = differenceInMonths(fechaSeleccionada, ultimaFecha);

// Número base de meses
const numeroBaseMeses = 49;

// Calcular el número total de meses
const numeroTotalMeses = numeroBaseMeses + diferenciaMeses;

// Obtener el nombre del mes correspondiente
const nombreMes = meses[numeroTotalMeses];

console.log("Nombre del mes correspondiente:", nombreMes);