/*
Una pila, en el contexto de estructuras de datos y programación, es una colección ordenada de elementos que sigue la política
de "último en entrar, primero en salir" (LIFO, por sus siglas en inglés: Last In, First Out). Esta estructura de datos tiene
dos operaciones principales:

Push: Agrega un elemento a la parte superior de la pila.
Pop: Elimina y devuelve el elemento superior de la pila.

Imagina una pila de platos; solo puedes tomar o poner el plato que está en la parte superior de la pila. No puedes acceder
directamente a un plato que esté en medio de la pila sin antes quitar los que están encima de él.

Características de una Pila:

Acceso Restringido:
Solo se puede acceder al elemento superior de la pila. Esto hace que las operaciones sean muy predecibles y fáciles de controlar.

Simplicidad:
Las pilas son estructuras de datos simples con un conjunto limitado de operaciones, lo que las hace fáciles de implementar y entender.

Uso en Algoritmos y Sistemas:
Se utilizan en muchos algoritmos y sistemas, como en el manejo de llamadas a funciones en programas (pila de llamadas), en algoritmos
de reversión, en la evaluación de expresiones (como en calculadoras) y en navegadores para manejar el historial de navegación.
*/


// Implementación de una estructura de datos de tipo pila en JavaScript.
class Stack {
    // La pila se implementa utilizando un arreglo para almacenar los elementos.
    // Se utiliza un campo privado (indicado por el prefijo #) para restringir el acceso directo a los elementos.
    #items = [];

    // Método 'push': Añade un elemento al final de la pila.
    // Este método toma un elemento como argumento y lo añade al final del arreglo '#items'.
    push(item) {
        this.#items.push(item);
    }

    // Método 'pop': Elimina y devuelve el último elemento de la pila.
    // Este método elimina el elemento en la parte superior de la pila (el final del arreglo) y lo devuelve.
    pop() {
        return this.#items.pop();
    }

    // Método 'peek': Retorna el último elemento de la pila sin eliminarlo.
    // Este método permite ver cuál es el elemento en la parte superior de la pila sin modificar la pila.
    peek() {
        return this.#items[this.#items.length - 1];
    }

    // Método 'size': Devuelve el número de elementos en la pila.
    // Este método es útil para determinar cuántos elementos hay en la pila en cualquier momento.
    size() {
        return this.#items.length;
    }

    // Método 'isEmpty': Verifica si la pila está vacía.
    // Retorna 'true' si la pila no tiene elementos y 'false' en caso contrario.
    isEmpty() {
        return this.#items.length === 0;
    }
}

// Creación de una instancia de la clase Stack.
const stack = new Stack();

// Demostración del uso de la pila:
console.log(stack.isEmpty()); // Verifica si la pila está vacía al inicio (debería ser 'true').
stack.push("Octavio"); // Añade "Octavio" a la pila.
stack.push("Israel"); // Añade "Israel" a la pila.
stack.push("Villafranco"); // Añade "Villafranco" a la pila.
console.log(stack.peek()); // Muestra el elemento en la parte superior de la pila ("Villafranco").
console.log(stack.size()); // Muestra el tamaño de la pila (3 elementos).
console.log(stack.isEmpty()); // Verifica si la pila está vacía después de añadir elementos (debería ser 'false').

// Ciclo para vaciar la pila:
while (!stack.isEmpty()) {
    console.log(stack.pop()); // Elimina y muestra cada elemento de la pila.
}
