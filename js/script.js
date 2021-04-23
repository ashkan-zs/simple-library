let myLibrary = [
    {
        id: 0,
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J.K Rowling',
        pages: 223,
        isRead: true 
    },
    {
        id: 1,
        title: 'Harry Potter and the Chamber of Secret',
        author: 'J.K Rowling',
        pages: 251,
        isRead: true 
    },
    {
        id: 2,
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J.K Rowling',
        pages: 317,
        isRead: false 
    },
    {
        id: 3,
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J.K Rowling',
        pages: 636,
        isRead: true 
    },
    {
        id: 4,
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

function deleteItem(id) {

    myLibrary = myLibrary.filter( (book) => book.id != id);
    console.log(`book with id ${id} removed.`);
    
    loadBooks();
}

function loadBooks() {
    console.log('library updated!');
    console.log(myLibrary);
    container.innerHTML = '';
    myLibrary.forEach((book) => {
        
        const card = `
        <div data-id=${book.id} id="card-${book.id}" class="card">
            <h2 class="card-title">${book.title}</h2>
            <small>by ${book.author}</small>
            <div class="footer">
                <h5>Pages: <u>${book.pages}</u></h5>
                <div class="btn">
                    <i data-id=${book.id} class="far ${book.isRead ? 'fa-check-square read' : 'fa-square not-read'}"></i>
                </div>
                <div class="btn deleteBtn">
                    <i data-id=${book.id} class="fas fa-trash-alt"></i>
                </div>
            </div>
        </div>`;

        container.innerHTML += card;
    });
    const deleteBtn = document.querySelectorAll('div.deleteBtn');
    
    deleteBtn.forEach( (btn) => {
        btn.addEventListener('click', (e) => {
            deleteItem(e.target.dataset.id);
        })
    });
}

function showPopup() {
    addForm.classList.toggle('active');
    container.classList.toggle('popup');
}

function clearForm() {
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach( input => input.value = '');
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
    clearForm();
    showPopup();
});

addBtn.addEventListener('click', () => {
    const id = myLibrary[myLibrary.length - 1].id;
    const newBook = new Book(titleTxt.value, authorTxt.value, pageNoTxt.value, isReadCheck.value);

    newBook.id = id + 1;

    clearForm();

    if(myLibrary.some(book => book.title === newBook.title)){
        return;
    }

    myLibrary.push(newBook);
    showPopup();
    loadBooks();
});

loadBooks();

