/*
    lista enlazada en JavaScript a través de dos clases: Node y LinkedList. La clase Node representa cada elemento de la lista, y la clase LinkedList
    maneja la lista en su conjunto, proporcionando métodos para agregar, eliminar, mostrar y contar nodos, así como limpiar la lista.
*/

// La clase Node representa un nodo en la lista enlazada.
class Node {
    constructor(value) { // Constructor de la clase.
        this.value = value; // Almacena el valor del nodo.
        this.next = null; // 'next' es una referencia al siguiente nodo en la lista. Inicialmente es nulo.
    }
}

// La clase LinkedList representa la lista enlazada en sí.
class LinkedList {
    constructor() { // Constructor de la clase LinkedList.
        this.head = null; // 'head' es una referencia al primer nodo de la lista. Inicialmente es nulo.
    }

    // Método para agregar un nuevo nodo al final de la lista.
    add(value) {
        const node = new Node(value); // Crea un nuevo nodo con el valor proporcionado.
        if (this.head === null) { // Si la lista está vacía (sin cabeza),
            this.head = node; // establece el nuevo nodo como cabeza de la lista.
        } else { // Si la lista ya contiene nodos,
            let current = this.head; // empieza desde la cabeza.
            while (current.next !== null) { // Recorre la lista hasta encontrar el último nodo.
                current = current.next;
            }
            current.next = node; // Agrega el nuevo nodo al final de la lista.
        }
    }

    // Método para eliminar un nodo por su valor.
    delete(value) {
        if (this.head.value === value) { // Si el valor está en la cabeza de la lista,
            this.head = this.head.next; // elimina el primer nodo actualizando la cabeza.
        } else {
            let current = this.head;
            while (current.next !== null) { // Recorre la lista buscando el nodo a eliminar.
                if (current.next.value === value) { // Si encuentra el valor,
                    current.next = current.next.next; // elimina el nodo actualizando la referencia 'next'.
                    break;
                }
                current = current.next;
            }
        }
    }

    // Método para mostrar los valores de la lista.
    show() {
        let current = this.head; // Comienza desde la cabeza de la lista.
        while (current !== null) { // Recorre la lista hasta el final.
            console.log(current.value); // Imprime el valor de cada nodo.
            current = current.next;
        }
    }

    // Método para obtener el tamaño de la lista.
    size() {
        let count = 0; // Contador para el tamaño de la lista.
        let current = this.head;
        while (current !== null) { // Recorre la lista incrementando el contador.
            count++;
            current = current.next;
        }
        return count; // Devuelve el tamaño de la lista.
    }

    // Método para limpiar la lista.
    clear() {
        this.head = null; // Establece la cabeza de la lista como nula.
    }
}

// Uso de la Clase LinkedList
const linkedList = new LinkedList(); // Crea una instancia de la lista enlazada.

linkedList.add('A'); // Agrega 'A' a la lista.
linkedList.add('B'); // Agrega 'B' a la lista.
linkedList.add('C'); // Agrega 'C' a la lista.

console.log(linkedList.size()); // Muestra el tamaño de la lista.

linkedList.show(); // Muestra los elementos de la lista.

linkedList.delete('B'); // Elimina 'B' de la lista.

console.log(linkedList.size()); // Muestra el tamaño actualizado de la lista.
linkedList.show(); // Muestra los elementos actuales de la lista.
