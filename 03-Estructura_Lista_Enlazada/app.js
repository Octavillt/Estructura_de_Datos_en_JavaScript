// Implementación de una Lista Enlazada para manejar una colección de películas.

/**
 * Clase Node para representar cada nodo en la lista enlazada.
 */
class Node {
    constructor(value) {
        this.value = value; // Almacena el valor del nodo.
        this.next = null;   // Enlace al siguiente nodo, inicialmente nulo.
    }
}

/**
 * Clase LinkedList para representar la lista enlazada.
 */
class LinkedList {
    constructor() {
        this.head = null; // Inicio de la lista, inicialmente nulo.
    }

    /**
     * Método para agregar un nuevo nodo al final de la lista.
     * @param {*} value Valor del nuevo nodo a agregar.
     */
    add(value) {
        const node = new Node(value); // Crea un nuevo nodo.
        if (this.head === null) {
            this.head = node; // Si la lista está vacía, establece el nuevo nodo como cabeza.
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next; // Recorre la lista hasta encontrar el último nodo.
            }
            current.next = node; // Establece el nuevo nodo como el siguiente del último nodo.
        }
    }

    /**
     * Método para eliminar un nodo por su valor.
     * @param {*} value Valor del nodo a eliminar.
     */
    delete(value) {
        if (this.head.value === value) {
            this.head = this.head.next; // Si el nodo a eliminar es la cabeza, la cabeza se mueve al siguiente nodo.
        } else {
            let current = this.head;
            while (current.next !== null) {
                if (current.next.value === value) {
                    current.next = current.next.next; // Elimina el nodo enlazando el anterior con el siguiente del eliminado.
                    break;
                }
                current = current.next;
            }
        }
    }
}

// Funciones para manipular la interfaz de usuario.
const title = document.getElementById('title'); // Obtención de elementos del DOM.
const image = document.getElementById('image');
const divNext = document.getElementById('next');

const moviesLinkedList = new LinkedList(); // Creación de una nueva lista enlazada.

// Agregando películas a la lista enlazada.
moviesLinkedList.add({ name: 'Spiderman', picture: 'images/spiderman.jpg' });
moviesLinkedList.add({ name: 'Titanic', picture: 'images/titanic.jpg' });
moviesLinkedList.add({ name: 'El señor de los anillos', picture: 'images/lotr.jpg' });

/**
 * Función para mostrar la película actual en la interfaz.
 */
function showMovie() {
    const movie = moviesLinkedList.head.value;
    title.innerHTML = movie.name; // Muestra el nombre de la película.
    image.src = movie.picture;    // Muestra la imagen de la película.

    // Muestra la siguiente película en la lista, si existe.
    if (moviesLinkedList.head.next) {
        const movieNext = moviesLinkedList.head.next.value;
        divNext.innerHTML = 'Siguiente Pelicula: ' + movieNext.name;
    } else {
        divNext.innerHTML = 'No hay más películas...';
    }
}

/**
 * Función para avanzar a la siguiente película y actualizar la interfaz.
 */
function nextMovie() {
    if (moviesLinkedList.head.next !== null) {
        moviesLinkedList.delete(moviesLinkedList.head.value);
        showMovie();
    } else {
        alert('No hay más registros disponibles...');
    }
}

/**
 * Función para recargar la página.
 */
function refreshPage() {
    location.reload();
}

showMovie(); // Muestra la primera película al cargar la página.