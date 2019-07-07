//Practice js
document.addEventListener('DOMContentLoaded',function(){
    var banner=document.getElementById('page-banner');
    console.log("hi! From practice");
    var titles=document.getElementsByClassName('title');
    console.log(titles);
    var h11=document.getElementsByTagName('h1');

    console.log(Array.isArray(titles));
    console.log(Array.isArray(Array.from(titles)));
    Array.from(titles).forEach(function(item){
        console.log(item);
    });
    console.log("wrapper");
    const wrap=document.querySelector('#wrapper');
    console.log(wrap);
    console.log('Book 2  of book-list');
    const book_2=document.querySelector('#book-list li:nth-child(2) .name');
    console.log(book_2);
    console.log("all books");
    var all_books=document.querySelectorAll('div ul li .name');
    console.log(Array.from(all_books));

    /* working-
    Array.from(all_books).forEach(function(book){
        console.log(book.textContent);
        book.textContent="Oh Yeah"; 
    });
    */

    console.log(wrap.nodeType);
    console.log(wrap.nodeName);
    console.log(wrap.hasChildNodes());
    /*
    const cloned=banner.cloneNone(true);
    console.log(cloned);
    */
    const bookList=document.querySelector('#book-list');
    console.log(bookList.parentNode);
    console.log(bookList.parentNode);
    console.log(bookList.childNodes);
    console.log(bookList.children);
    Array.from(bookList.childNodes).forEach(function(book){
        console.log(book);
    });
    console.log("Children(see the diff between childNodes and children");
    Array.from(bookList.children).forEach(function(book){
        console.log(book);
    });
    console.log("next sibling",bookList.nextSibling.nextSibling); // 2 times next sibling is to remove #text(nextline charecter)
    console.log("next sibling",bookList.nextElementSibling);
    console.log(bookList.previousElementSibling);

    var h2=document.querySelector('#book-list h2');
    h2.addEventListener('click',function(event){
        console.log(event.target);
        console.log(event);
    });


    const a=document.querySelector('#page-banner a');
    x=0;
    a.addEventListener('click',function(event){
        event.preventDefault();
        console.log(event.target.textContent,'was prevented');
        //console.log(event.target);
        if(event.target.textContent==="My Instagram")
        event.target.textContent="Cannot go to my profile";
        else event.target.textContent="My Instagram";
    });

    const adi=a=>{
        console.log(a);
        return a+' is edited';
    }
    console.log(adi('Hello'));
    words=["adithya","is","amazing!"];
    words=words.filter(word=> word.length<8);
    console.log(words);

    const xa=a=> {return a+' xa';}
    console.log(xa("fun"));


    var book1=document.querySelector('li:first-child .name');
    console.log(book1);
    console.log(book1.getAttribute('class'));
    //book1.setAttribute('class','name-2');
    console.log(book1.hasAttribute('class'));
    //book1.removeAttribute('class');
    console.log('Test JS Ended');
});
