// Actual JS for the index.html

document.addEventListener('DOMContentLoaded',function(){
    console.log("Hi! from app.js")

    /*var buttons=document.querySelectorAll('#book-list .del');
    Array.from(buttons).forEach(function(button){
        button.addEventListener('click',function(event){
            const li=event.target.parentElement;
            li.parentNode.removeChild(li);
        });
    });
    Better way below-
    */
    var list=document.querySelector('#book-list ul');
    list.addEventListener('click',event=>{
        if(event.target.className=="del"){
            const li=event.target.parentElement;
            //li.parentNode.removeChild(li); or
            list.removeChild(li);
        }
    });

    var list=document.querySelector('#book-list ul');
    var addBook=document.forms['add-book'];
    addBook.addEventListener('submit',event=>{
        event.preventDefault(); //to stop reloading when clicking button
        const value=addBook.querySelector('input[type="text"]').value;
        //console.log(value);
        addBook.querySelector('input[type="text"]').value='';
        const li=document.createElement('li');
        const bookName=document.createElement('span');
        const delBtn=document.createElement('span');
        /*bookName.className="name";
        delBtn.className="del";
        Bettere way is below
        */
        bookName.classList.add('name');
        delBtn.classList.add('del');
        bookName.textContent=value;
        delBtn.textContent="Delete";
        li.appendChild(bookName);
        li.appendChild(delBtn);
        list.appendChild(li); 
    });

    const hide=document.querySelector('#hide');
    hide.addEventListener('change',event=>{
        if(hide.checked){
            list.style.display="none";
        }
        else{
            list.removeAttribute('style');
        }
    });

    const searchBar=document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup',event=>{
        const term=event.target.value.toLowerCase();
        const books=document.getElementsByTagName('li');
        Array.from(books).forEach(function(book){
            if(book.firstElementChild!=null)
            {
                const title=book.firstElementChild.textContent.toLowerCase();
                if(title.indexOf(term)!=-1){
                    book.style.display="block";
                }
                else{
                    book.style.display="none";
                }
            }
        });
    });

    searchBar.addEventListener('keypress',event=>{
        var key=event.which || event.keyCode;
        if(key==13){
            event.preventDefault();
        }
    });

    const tabs=document.querySelector('.tabs');
    const panels=document.querySelectorAll('.panel');
    tabs.addEventListener('click',function(event){
        //console.log(event.target.dataset.target);
        const targetPanel=event.target.dataset.target;
        panels.forEach(panel=>{
            if('#'+panel.getAttribute('id')==targetPanel){
                panel.style.display="block";
            }
            else{
                panel.style.display="none";
            }
        })
    });
});