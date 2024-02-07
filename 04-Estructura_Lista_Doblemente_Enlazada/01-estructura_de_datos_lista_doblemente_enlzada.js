// Definición de la clase Node
class Node {
    // El constructor es un método especial que se ejecuta al crear un objeto de esta clase.
    constructor(value) {
        this.value = value; // Esta línea guarda el valor pasado al nodo.
        this.next = null;  // 'next' es inicializado como null, indicando que no hay un siguiente nodo aún.
        this.prev = null;  // 'prev' también se inicializa como null, indicando que no hay un nodo previo.
    }
}

// Definición de la clase DoublyLinkedList
class DoublyLinkedList {
    // El constructor es un método que se llama al crear una nueva instancia de la lista.
    constructor() {
        this.head = null;  // 'head' representa el principio de la lista. Inicialmente es null, indicando que la lista está vacía.
        this.tail = null;  // 'tail' representa el final de la lista. Al igual que 'head', comienza como null.
        this.length = 0;   // 'length' lleva la cuenta de cuántos nodos hay en la lista. Comienza en 0.
    }

    // Método para añadir un nuevo nodo a la lista
    add(value) {
        this.length++;  // Incrementa la longitud de la lista en uno.
        const node = new Node(value); // Crea un nuevo nodo con el valor proporcionado.
        // Verifica si la lista está vacía.
        if (this.head === null) {
            this.head = node; // Establece el nuevo nodo como el principio de la lista.
            this.tail = node; // También establece el nuevo nodo como el final de la lista.
        } else {
            // Si la lista ya tiene nodos:
            this.tail.next = node; // Enlaza el actual nodo final con el nuevo nodo.
            node.prev = this.tail; // Establece el nodo actual como el nodo previo del nuevo nodo.
            this.tail = node; // Actualiza 'tail' para que ahora sea el nuevo nodo.
        }
    }


    // Método para mostrar el estado actual de la lista
    show() {
        let current = this.head; // Comienza con el nodo cabeza de la lista.
        console.log("-----------------------------------------");
        console.log(`Cabeza ${this.head?.value}`); // Muestra el valor del nodo cabeza.
        console.log(`Cola ${this.tail?.value}`); // Muestra el valor del nodo cola.
        // Recorre la lista desde el principio hasta el final.
        while (current !== null) {
            // Imprime el valor actual, y los valores del siguiente y del anterior nodo, si existen.
            console.log(`valor: ${current.value} 
        siguiente: ${current.next?.value} 
        anterior: ${current.prev?.value}`);
            current = current.next; // Avanza al siguiente nodo.
        }
    }

    // Método para mostrar el estado de la lista en reversa
    reverse() {
        let current = this.tail; // Comienza con el nodo cola de la lista.
        console.log("-----------------------------------------");
        console.log(`Cabeza ${this.head?.value}`); // Muestra el valor del nodo cabeza.
        console.log(`Cola ${this.tail?.value}`); // Muestra el valor del nodo cola.
        // Recorre la lista desde el final hasta el principio.
        while (current !== null) {
            // Imprime el valor actual, y los valores del siguiente y del anterior nodo, si existen.
            console.log(`valor: ${current.value} 
        siguiente: ${current.next?.value} 
        anterior: ${current.prev?.value}`);
            current = current.prev; // Retrocede al nodo anterior.
        }
    }

    // Método para limpiar toda la lista
    clear() {
        this.head = null; // Establece la cabeza de la lista como null.
        this.tail = null; // Establece la cola de la lista como null.
        this.length = 0;  // Restablece la longitud de la lista a 0.
    }

    // Método para eliminar un nodo con un valor específico de la lista
    delete(value) {
        // Si la lista está vacía, no hay nada que eliminar.
        if (this.length === 0) return;
        // Caso 1: Eliminar el nodo cabeza si contiene el valor.
        if (this.head.value === value) {
            // Si solo hay un nodo en la lista, limpia la lista.
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                // Si hay más de un nodo, mueve la cabeza al siguiente nodo y actualiza su previo.
                this.head = this.head.next;
                this.head.prev = null;
            }
            this.length--; // Disminuye la longitud de la lista.
        }
        // Caso 2: Eliminar el nodo cola si contiene el valor.
        else if (this.tail.value === value) {
            this.tail = this.tail.prev; // Mueve la cola al nodo anterior.
            this.tail.next = null; // Elimina la referencia al nodo eliminado.
            this.length--; // Disminuye la longitud de la lista.
        }
        // Caso 3: Eliminar un nodo intermedio.
        else {
            let current = this.head;
            while (current.next !== null) {
                if (current.next.value === value) {
                    current.next = current.next.next; // Salta el nodo a eliminar.
                    if (current.next) { // Verifica si no es el último nodo.
                        current.next.prev = current; // Actualiza el previo del siguiente nodo.
                    }
                    this.length--; // Disminuye la longitud de la lista.
                    break; // Sale del bucle una vez que se elimina el nodo.
                }
                current = current.next; // Avanza al siguiente nodo.
            }
        }
    }
}

// Creación de una nueva lista enlazada doble.
const list = new DoublyLinkedList();
console.log("-----------------------------------------");
console.log('Agregando Elementos a la Lista Enlzada');

// Agregando elementos a la lista.
list.add(1);
list.add(2);
list.add(3);

// Mostrando el estado actual de la lista.
list.show();
console.log("-----------------------------------------");

// Visualizando la lista en orden inverso.
console.log('Visualizando la Lista Enlazada Invertida');
list.reverse();

// Mostrando el estado actual de la lista de nuevo. 
// (Aquí podrías haber querido mostrar la lista invertida con list.reverse() sin llamar a list.show() después)
list.show();
console.log("-----------------------------------------");

// Eliminando un elemento de la lista.
console.log('Eliminando un Elemento de la Lista Enlazada');
list.delete(3);

// Mostrando el estado actual de la lista después de la eliminación.
list.show();
console.log("-----------------------------------------");

// Limpiando toda la lista.
console.log('Limpiando toda la Lista Enlazada');
list.clear();

// Mostrando el estado actual de la lista después de limpiarla.
list.show();
