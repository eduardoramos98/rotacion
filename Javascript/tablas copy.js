 // Función para leer el archivo CSV y agregar los datos a la tabla
 async function leerCSV() {
    const response = await fetch('/data/Book1 - copia.csv'); // Reemplaza 'ejemplo.csv' con la ruta de tu archivo CSV
    const data = await response.arrayBuffer();
    const decoder = new TextDecoder('utf-8');
    const csvText = decoder.decode(data);
    const filas = csvText.split('\n');
    const tbody = document.querySelector('tbody');
    filas.forEach((fila, indice) => {
        if (indice === 0) return;
        const [NumEmpleados, nombre, departamento, Status, Pechaingreso] = fila.split(',');
        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `<td>${NumEmpleados}</td><td>${nombre}</td><td>${departamento}</td><td>${Status}</td><td>${Pechaingreso}</td>`;
        tbody.appendChild(nuevaFila);
    });
}

// Llamar a la función cuando la página haya cargado
window.addEventListener('load', leerCSV);