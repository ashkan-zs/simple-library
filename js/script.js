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

        const card = `
        <div data-value=${idx} id="card-${idx}" class="card">
            <h2 class="card-title">${book.title}</h2>
            <small>by ${book.author}</small>
            <div class="footer">
                <h5>Pages: <u>${book.pages}</u></h5>
                <div class="btn">
                    <i data-value=${idx} class="far ${book.isRead ? 'fa-check-square read' : 'fa-square not-read'}"></i>
                </div>
                <div class="btn deleteBtn">
                    <i data-value=${idx} class="fas fa-trash-alt" onclick="deleteItem()"></i>
                </div>
            </div>
        </div>`;

        container.innerHTML += card;
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
    const newBook = new Book(titleTxt.value, authorTxt.value, pageNoTxt.value, isReadCheck.value);

    clearForm();

    if(myLibrary.some(book => book.title === newBook.title)){
        return;
    }

    myLibrary.push(newBook);
    showPopup();
    loadBooks();
});

loadBooks();

const deleteBtn = document.querySelectorAll('div.deleteBtn');

function deleteItem(e) {
    const arrayIdx = e.target.getAttribute('data-value');

    console.log(arrayIdx);

    myLibrary = myLibrary.slice(0, arrayIdx).concat(myLibrary.slice(arrayIdx + 1, myLibrary.length))
    
    loadBooks();
}