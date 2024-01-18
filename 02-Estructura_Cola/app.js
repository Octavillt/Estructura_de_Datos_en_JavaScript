// Implementación de una Clase Cola (Queue) en JavaScript
/**
 * Clase que representa una estructura de datos tipo Cola (Queue).
 * Permite operaciones básicas como encolar, desencolar, y observar el primer elemento.
 */
class Queue {
    #items = []; // Declaración de un array privado para almacenar los elementos de la cola.

    /**
     * Agrega un elemento al final de la cola.
     * @param {*} item - El elemento a agregar a la cola.
     */
    enqueue(item) { // Método para agregar un elemento al final de la cola.
        this.#items.push(item); // Agrega el elemento al final del array.
    };

    /**
     * Remueve y retorna el primer elemento de la cola.
     * @returns {*} El primer elemento de la cola.
     */
    dequeue() { // Método para remover y retornar el primer elemento de la cola.
        return this.#items.shift(); // Remueve el primer elemento del array y lo retorna.
    };

    /**
     * Devuelve el primer elemento de la cola sin removerlo.
     * @returns {*} El primer elemento de la cola, o undefined si la cola está vacía.
     */
    peek() { // Método para observar el primer elemento de la cola sin removerlo.
        return this.#items[0]; // Retorna el primer elemento del array.
    };

    /**
     * Devuelve el número de elementos en la cola.
     * @returns {number} La cantidad de elementos en la cola.
     */
    size() { // Método para obtener el tamaño de la cola.
        return this.#items.length; // Retorna la longitud del array.
    };

    /**
     * Verifica si la cola está vacía.
     * @returns {boolean} Verdadero si la cola está vacía, falso de lo contrario.
     */
    isEmpty() { // Método para verificar si la cola está vacía.
        return this.#items.length === 0; // Retorna true si la longitud del array es 0, de lo contrario false.
    };

    /**
     * Devuelve una copia de los elementos de la cola.
     * @returns {*[]} Una copia del array de elementos de la cola.
     */
    getItems() { // Método para obtener una copia de los elementos de la cola.
        return [...this.#items]; // Retorna una copia superficial del array.
    };

    /**
     * Limpia todos los elementos de la cola.
     */
    clearAll() { // Método para limpiar la cola.
        return this.#items = []; // Asigna un nuevo array vacío a los elementos, limpiando la cola.
    };
}

// Ejemplo de uso de la estructura de datos cola en una aplicación web.
const queueRequests = new Queue(); // Instancia de la clase Queue.

// Obtención de elementos del DOM para mostrar las solicitudes y resultados.
const divReq = document.getElementById("req");
const divResult = document.getElementById("result");
const url = "jsonplaceholder.typicode.com/posts"; // URL base para las solicitudes fetch.
let i = 1; // Contador para las solicitudes.

/**
 * Función para agregar una solicitud a la cola y actualizar la visualización.
 */
function add() { // Función para agregar una solicitud a la cola.
    queueRequests.enqueue(i++); // Agrega el valor actual de 'i' a la cola y luego incrementa 'i'.
    showReq(); // Actualiza la visualización de las solicitudes en la cola.
}

/**
 * Función asíncrona para procesar las solicitudes de la cola.
 * Realiza solicitudes HTTP y muestra los resultados.
 */
async function request() { // Función asíncrona para procesar las solicitudes de la cola.
    if (queueRequests.isEmpty()) { // Verifica si la cola está vacía.
        alert('Debe de Agregar Registros a la Cola'); // Muestra una alerta si la cola está vacía.
        return;
    }
    while (!queueRequests.isEmpty()) { // Mientras la cola no esté vacía, procesa las solicitudes.
        // Realiza una solicitud fetch a la URL correspondiente al primer elemento de la cola.
        const res = await fetch(`https://${url}/${queueRequests.dequeue()}`);
        const data = await res.json(); // Espera y convierte la respuesta a JSON.
        await new Promise(r => setTimeout(r, 333)); // Espera 333 milisegundos entre solicitudes.
        showReq(); // Actualiza la visualización de las solicitudes en la cola.
        // Actualiza el contenido de 'divResult' con los datos de la respuesta.
        divResult.innerHTML = `<p>${data.id} ${data.title}</p>` + divResult.innerHTML;
    }
}

/**
 * Función para reiniciar la cola y las visualizaciones.
 */
function resetQueue() { // Función para reiniciar la cola y las visualizaciones.
    queueRequests.clearAll(); // Limpia la cola.
    showReq(); // Actualiza la visualización de las solicitudes.
    i = 1; // Reinicia el contador de solicitudes.
    divResult.innerHTML = ''; // Limpia el contenido de 'divResult'.
}

/**
 * Función para mostrar las solicitudes actuales en la cola en el DOM.
 */
function showReq() { // Función para mostrar las solicitudes en la cola.
    const items = queueRequests.getItems(); // Obtiene los elementos de la cola.
    if (items.length === 0) { // Si la cola está vacía, muestra un mensaje.
        divReq.innerHTML = "Sin solicitudes";
        return;
    }
    divReq.innerHTML = ""; // Limpia el contenido actual de 'divReq'.
    items.forEach((item) => divReq.innerHTML += `${item} | `); // Muestra cada elemento de la cola.
}
