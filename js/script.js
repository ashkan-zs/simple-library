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

function Book(title, author, page, isRead) {
    this.title = title;
    this.author = author;
    this.pages = page;
    this.isRead = isRead;
}

function loadBooks() {
    myLibrary.forEach((book, idx) => {
        const isExist = document.getElementById(`card-${idx}`);
    
        if(isExist) {
            return;
        }

        const btnClass = book.isRead ? 'fa-check-square' : 'fa-square';
        const card = `
        <div data-value=${idx} id="card-${idx}" class="card">
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
    });
}

const container = document.querySelector('.container');
const addBtn = document.querySelector('.bookForm button');
const titleTxt = document.getElementById('title');
const authorTxt = document.getElementById('author');
const pageNoTxt = document.getElementById('pageNo');
const isReadCheck = document.getElementById('isRead');
const showFormBtn = document.getElementById('addBtn');
const addForm = document.querySelector('.bookForm');

showFormBtn.addEventListener('click', () => {
    addForm.classList.toggle('active');
    container.classList.toggle('popup');
});

addBtn.addEventListener('click', () => {
    const newBook = new Book(titleTxt.value, authorTxt.value, pageNoTxt.value, isReadCheck.value);
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach( input => input.value = '');

    if(myLibrary.some(book => book.title === newBook.title)){
        return;
    }
    
    myLibrary.push(newBook);
    loadBooks();
});


loadBooks();