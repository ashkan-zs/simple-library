let myLibrary = [
    {
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J.K Rowling',
        pages: 223,
        isRead: true 
    },
    {
        title: 'Harry Potter and the Chamber of Secret',
        author: 'J.K Rowling',
        pages: 251,
        isRead: true 
    },
    {
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J.K Rowling',
        pages: 317,
        isRead: false 
    },
    {
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J.K Rowling',
        pages: 636,
        isRead: true 
    },
    {
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J.K Rowling',
        pages: 636,
        isRead: true 
    }
];

function Book(title, author) {
    this.author = author;
    this.title = title;
    this.pages = 0;
    this.isRead = false;
}

const container = document.querySelector('.container');

myLibrary.forEach((book, idx) => {

    const btnClass = book.isRead ? 'fa-check-square' : 'fa-square';
    const card = `
    <div data-value=${idx} class="card">
        <h2 class="card-title">${book.title}</h2>
        <small>by ${book.author}</small>
        <div class="footer">
            <h5>Pages: <u>${book.pages}</u></h5>
            <div class="btn">
                <i class="far ${btnClass}"></i>
            </div>
        </div>
    </div>`;

    container.innerHTML += card;
})