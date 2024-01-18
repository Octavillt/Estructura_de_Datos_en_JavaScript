/*
    Una cola (Queue) en estructuras de datos es un tipo de estructura de datos lineal que sigue un orden 
    particular en el que las operaciones de adición y eliminación de elementos se realizan en extremos diferentes. 
    Las colas se basan en el principio de "First In, First Out" (FIFO), lo que significa que el primer elemento 
    agregado a la cola será el primero en ser eliminado. Esta característica las distingue de las pilas, 
    que funcionan en un orden "Last In, First Out" (LIFO).
*/

// Implementación de Cola (Queue) en JavaScript

class Queue {
    // Declaración de la cola usando una variable privada.
    #items = []; // La variable '#items' almacena los elementos de la cola.

    // Método para agregar (encolar) un elemento a la cola.
    enqueue(item) {
        this.#items.push(item); // Agrega el elemento 'item' al final de la cola.
    };

    // Método para eliminar (desencolar) el primer elemento de la cola.
    dequeue() {
        return this.#items.shift(); // Elimina el primer elemento de la cola y lo retorna.
    };

    // Método para observar el primer elemento de la cola sin eliminarlo.
    peek() {
        return this.#items[0]; // Retorna el primer elemento de la cola sin eliminarlo.
    };

    // Método para obtener la cantidad de elementos en la cola.
    size() {
        return this.#items.length; // Retorna el número de elementos en la cola.
    };

    // Método para verificar si la cola está vacía.
    isEmpty() {
        return this.#items.length === 0; // Retorna 'true' si la cola está vacía, de lo contrario 'false'.
    };

    // Método para obtener una copia de los elementos de la cola.
    getItems() {
        return [...this.#items]; // Retorna una copia del arreglo de elementos.
    };

     // Método para vaciar los elementos de la cola.
    clearAll() {
        return this.#items = []; // Retorna el arreglo vacío.
    };
}

// Creación y uso de la cola
const queue = new Queue(); // Crea una nueva instancia de la cola.

queue.enqueue("Octavio");  // Agrega 'Octavio' a la cola.
queue.enqueue("Israel");   // Agrega 'Israel' a la cola.
queue.enqueue("Octavillt");// Agrega 'Octavillt' a la cola.

console.log(queue.peek()); // Muestra el primer elemento en la cola, 'Octavio'.
queue.dequeue();           // Elimina el primer elemento ('Octavio') de la cola.
console.log(queue.peek()); // Muestra el nuevo primer elemento, 'Israel'.
