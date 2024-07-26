// Implementación de la clase Stack para crear una estructura de datos de pila.

/**
 * Clase que representa una estructura de datos tipo Pila (Stack).
 * Permite operaciones básicas como apilar, desapilar, y observar el elemento superior.
 */
class Stack {
    #items = []; // Uso de un campo privado para almacenar los elementos de la pila.

    /**
     * Añade un elemento al final de la pila.
     * @param {*} item - El elemento a añadir a la pila.
     */
    push(item) {
        this.#items.push(item); // Método para añadir un elemento al final de la pila.
    }

    /**
     * Elimina y retorna el último elemento de la pila.
     * @returns {*} El último elemento de la pila.
     */
    pop() {
        return this.#items.pop(); // Método para eliminar y devolver el último elemento de la pila.
    }

    /**
     * Devuelve el último elemento de la pila sin eliminarlo.
     * @returns {*} El último elemento de la pila, o undefined si la pila está vacía.
     */
    peek() {
        return this.#items[this.#items.length - 1]; // Método para obtener el último elemento sin eliminarlo.
    }

    /**
     * Devuelve el número de elementos en la pila.
     * @returns {number} La cantidad de elementos en la pila.
     */
    size() {
        return this.#items.length; // Método para obtener el tamaño de la pila.
    }

    /**
     * Verifica si la pila está vacía.
     * @returns {boolean} Verdadero si la pila está vacía, falso de lo contrario.
     */
    isEmpty() {
        return this.#items.length === 0; // Método para verificar si la pila está vacía.
    }

    /**
     * Devuelve una copia de los elementos de la pila.
     * @returns {*[]} Una copia del array de elementos de la pila.
     */
    getItems() {
        return [...this.#items]; // Método para obtener una copia de los elementos de la pila.
    }
}

// Ejemplo de uso de la pila en una aplicación web.

// Aquí se asocia la pila con elementos del DOM para manejar una lista de nombres.
const inputName = document.getElementById("name"); // Obtiene el elemento de entrada para nombres.
const divContent = document.getElementById("content"); // Obtiene el div donde se mostrarán los nombres.
const stackNames = new Stack(); // Crea una nueva instancia de Stack para almacenar nombres.

// Función para añadir un nombre a la pila y actualizar el contenido en el DOM.
/**
 * Función para añadir un nombre a la pila y actualizar la visualización en el DOM.
 */
function addToStack() {
    let valeName = inputName.value; // Obtiene el valor ingresado en el campo de entrada para nombres.
    if (valeName !== '') {
        stackNames.push(valeName); // Añade el nombre de la entrada a la pila 'stackNames'.
        showNames(); // Llama a la función 'showNames' para actualizar la visualización de nombres en la interfaz.
        inputName.value = ""; // Limpia el campo de entrada después de añadir el nombre a la pila.
        inputName.focus(); // Coloca el foco de vuelta en el campo de entrada para facilitar la introducción de un nuevo nombre.
        return;
    }
    alert('El Campo es Obligatorio'); // Si el campo de entrada está vacío, muestra una alerta al usuario.
}

// Función para eliminar el último nombre de la pila y actualizar el contenido en el DOM.
/**
 * Función para eliminar el último nombre de la pila y actualizar la visualización en el DOM.
 */
function deleteToStack() {
    stackNames.isEmpty() ? alert('La Pila está Vacia') : null; // Si la pila está vacía, muestra una alerta al usuario.
    stackNames.pop(); // Elimina el último nombre de la pila.
    showNames(); // Actualiza la visualización de nombres.
}

// Función para mostrar los nombres actuales en la pila en el elemento divContent.
/**
 * Función para mostrar los nombres actuales en la pila en el DOM.
 */
function showNames() {
    const items = stackNames.getItems(); // Obtiene una copia de los nombres en la pila.
    divContent.innerHTML = ""; // Limpia el contenido actual del div.
    items.forEach((item) => divContent.innerHTML += `<p>${item}</p>`); // Añade cada nombre a divContent.
}
