class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
    }

    delete(value) {
        if (this.head.value === value) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            while (current.next !== null) {
                if (current.next.value === value) {
                    current.next = current.next.next;
                    break;
                }
                current = current.next;
            }
        }
    }
}


// Caso de uso de la lista enlazada
const title = document.getElementById('title');
const image = document.getElementById('image');
const divNext = document.getElementById('next');

const moviesLinkedList = new LinkedList();

moviesLinkedList.add({
    name: 'Spiderman',
    picture: 'images/spiderman.jpg'
});
moviesLinkedList.add({
    name: 'Titanic',
    picture: 'images/titanic.jpg'
});
moviesLinkedList.add({
    name: 'El señor de los anillos',
    picture: 'images/lotr.jpg'
});

function showMovie() {
    const movie = moviesLinkedList.head.value;

    title.innerHTML = movie.name;
    image.src = movie.picture;

    if (moviesLinkedList.head.next) {
        const movieNext = moviesLinkedList.head.next.value;
        divNext.innerHTML = 'Siguiente Pelicula: ' + movieNext.name;
    } else {
        divNext.innerHTML = 'No hay más películas...';
    }
}

function nextMovie() {
    if (moviesLinkedList.head.next !== null) {
        moviesLinkedList.delete(moviesLinkedList.head.value);
        showMovie();
        return;
    }
    alert('No hay más registros disponibles...');
}

function refreshPage() {
    location.reload();
}


showMovie();