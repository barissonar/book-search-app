import { useBooks } from "./Context/BooksContext";
import { useEffect } from "react";

function Header() {


    const {setBooks} = useBooks();  // get context state
    const apikey = "AIzaSyC11PTLzwuv0Ch_I04GoxhwQlgd0VKeC5U"; 
    const fetchData = async (title) => {      // Makes API request for book data.
      
      try {
      const responseBooks = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=40&key=${apikey}`);
      const data = await responseBooks.json();
      setBooks(data);              // set context state.
      }
      catch(error) {
        console.log('Error fetching data:', error.message)
    }
    }
  

    const getBooks = (e) => {        // Runs when user clicks on search button.
      
      const titleDOM = document.getElementById("title-input");  // get input value.
      const titleConcat = titleDOM.value.split(' ').join('+');  // change spaces to +
      fetchData(titleConcat);   
    
    }
    
    useEffect(() => {       // Bring random books when the page is first opened.
        fetchData("random");
        document.title = "Book Search App";
    } ,[]);
   
    
  

    return (
      <div className="header">
        <h1 className="title">Book Search App</h1>
        <div className="inputandbutton">
           <input id="title-input" placeholder="Please enter a book name."></input>
           <button type="button" onClick={getBooks} className="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 
            12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 
            416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 
            144 0 1 0 0 288z"/>
           </svg>
           </button>
        </div>
      </div>
    );
  }
  
  export {Header};