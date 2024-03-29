//Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI construction
function UI(){};

UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    //create tr element
    const row = document.createElement('tr');
    //insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='' class='delete'>X</a></td>
    `;
    //append it to the list
    list.appendChild(row);
};

//show alert
UI.prototype.showAlert = function(message, className){
    //create div
    const div = document.createElement('div');
    //add classes
    div.className = `alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container')
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert between div and form
    container.insertBefore(div, form);
    // Timeout after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
};

// Delete book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
        //instantiate UI
        const ui = new UI();
        //show alert
        ui.showAlert('Book Removed!', 'success');
    };
};

//clear input fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};



//Event listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    //get form values
    const title = document.getElementById('title').value;
          author = document.getElementById('author').value;
          isbn = document.getElementById('isbn').value;
    
    //instantiate book
    const book = new Book(title, author, isbn);
    //instantiate UI
    const ui = new UI();

    // Validate
    if(title === '' || author === '' || isbn === '') {
        //error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        //add book to list
        ui.addBookToList(book);
        //clear fields after it
        ui.clearFields();
        //error alert
        ui.showAlert('Book Added', 'success');
    };

    e.preventDefault();
});

//event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    //instantiate UI
    const ui = new UI();
    //delete book
    ui.deleteBook(e.target);
    //prevent from redirecting
    e.preventDefault();
});