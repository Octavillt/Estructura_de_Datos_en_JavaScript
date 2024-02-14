/**
 * Definimos la clase Node, que representa un nodo en una lista doblemente enlazada
 * Clase para representar un nodo en una lista doblemente enlazada.
 * @class
 * @param {any} value - El valor que se almacenará en el nodo.
 */
class Node {
    constructor(value) {
        this.value = value; // Almacenamos el valor del nodo. Puede ser cualquier tipo de dato.
        this.next = null; // Propiedad 'next' para referenciar al siguiente nodo. Inicialmente es null.
        this.prev = null; // Propiedad 'prev' para referenciar al nodo anterior. También comienza como null.
    }
}

/**
 * Definimos la clase DoublyLinkedList, que representa una lista doblemente enlazada
 * Clase para representar una lista doblemente enlazada.
 * @class
 */
class DoublyLinkedList {
    constructor() {
        this.head = null; // 'head' es el inicio de la lista. Comienza como null ya que la lista está vacía.
        this.tail = null; // 'tail' es el final de la lista. Igualmente empieza en null.
        this.length = 0; // 'length' lleva la cuenta del número de nodos en la lista. Inicia en 0.
    }

    /**
     * Método 'add' para añadir un nuevo nodo al final de la lista
     * Añade un nuevo nodo al final de la lista.
     * @param {any} value - El valor del nuevo nodo a añadir.
     */
    add(value) {
        this.length++; // Incrementamos la longitud de la lista.
        const node = new Node(value); // Creamos un nuevo nodo con el valor proporcionado.

        if (this.head === null) {
            // Si la lista está vacía (head es null), establecemos el nuevo nodo como head y tail.
            this.head = node;
            this.tail = node;
        } else {
            // Si la lista ya tiene elementos, enlazamos el nuevo nodo al final de la lista.
            this.tail.next = node; // El actual tail apunta al nuevo nodo como su siguiente.
            node.prev = this.tail; // El nuevo nodo apunta al actual tail como su anterior.
            this.tail = node; // Actualizamos tail para que sea el nuevo nodo.
        }
    }
}

// Ejemplo de caso de uso lista doblemente enlazada

// Obtenemos referencias a los elementos del DOM donde se mostrarán los detalles de las películas
const title = document.getElementById('title'); // Referencia al elemento que mostrará el título de la película.
const image = document.getElementById('image'); // Referencia al elemento que mostrará la imagen de la película.
const divInfo = document.getElementById('info'); // Referencia a un contenedor adicional para información.

// Creamos una nueva instancia de DoublyLinkedList.
const moviesLinkedList = new DoublyLinkedList();

// Añadimos películas a la lista. Cada película es un objeto con propiedades 'name' y 'picture'.
moviesLinkedList.add({
    name: 'Spiderman', // Nombre de la primera película.
    picture: 'images/spiderman.jpg' // URL de la imagen de la primera película.
});
moviesLinkedList.add({
    name: 'Titanic', // Nombre de la segunda película.
    picture: 'images/titanic.jpg' // URL de la imagen de la segunda película.
});
moviesLinkedList.add({
    name: 'El señor de los anillos', // Nombre de la tercera película.
    picture: 'images/lotr.jpg' // URL de la imagen de la tercera película.
});

// Inicializamos una variable 'movie' que apunta al primer nodo (head) de la lista doblemente enlazada.
let movie = moviesLinkedList.head;

/**
 * Definimos la función 'showMovie' que actualiza el DOM para mostrar la película actual.
 * Añade un nuevo nodo al final de la lista.
 * @param {any} value - El valor del nuevo nodo a añadir.
 */
function showMovie() {
    // Actualizamos el título y la imagen en el DOM con los valores del nodo actual.
    title.innerHTML = movie.value.name; // Establece el título de la película en el elemento 'title'.
    image.src = movie.value.picture; // Establece la imagen de la película en el elemento 'image'.

    // Obtenemos los valores de los nodos siguiente y anterior, si existen.
    const movieNext = movie.next?.value; // Utiliza el operador opcional (?) para manejar el caso de que 'next' sea null.
    const moviePrev = movie.prev?.value; // Igualmente para 'prev'.

    // Actualizamos el 'divInfo' con información sobre las películas anterior y siguiente.
    // Usamos un operador ternario para manejar el caso de que no haya película anterior o siguiente.
    divInfo.innerHTML = (moviePrev ? 'Anterior: ' + moviePrev.name : 'No hay anterior');
    divInfo.innerHTML += (movieNext ? ' | Siguiente: ' + movieNext.name : ' | No hay siguiente');
}

/**
 * Definimos la función 'nextMovie' para navegar a la siguiente película en la lista.
 * Navega a la siguiente película en la lista.
 */
function nextMovie() {
    // Comprobamos si existe una 'siguiente' película en la lista.
    if (movie.next) {
        movie = movie.next; // Si existe, actualizamos la variable 'movie' para que apunte al siguiente nodo.
        showMovie(); // Llamamos a la función 'showMovie' para actualizar la visualización en el DOM con la nueva película.
    }
    // Si no existe un siguiente nodo, no se hace nada y la visualización actual permanece igual.
}

/**
 * Definimos la función 'prevMovie' para navegar a la película anterior en la lista.
 * Navega a la película anterior en la lista.
 */
function prevMovie() {
    // Comprobamos si existe una 'anterior' película en la lista.
    if (movie.prev) {
        movie = movie.prev; // Si existe, actualizamos la variable 'movie' para que apunte al nodo anterior.
        showMovie(); // Llamamos a la función 'showMovie' para actualizar la visualización en el DOM con la nueva película.
    }
    // Si no existe un nodo anterior, no se hace nada y la visualización actual permanece igual.
}

// Llamamos a 'showMovie' al inicio para mostrar la primera película en la lista.
showMovie();
