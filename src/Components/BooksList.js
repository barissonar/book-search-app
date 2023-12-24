import { useBooks } from "./Context/BooksContext";

function BooksList() {

  const {books} = useBooks();  // get context state.
  
 
  
  return (
    
    <div className="container">        
    {
     
      books.items ?             // Make the necessary checks and bring the books.
      books.items.map((item,index) => (

      <a href={item.volumeInfo.infoLink} key={index}> 
        <div className="card" >
          
              <div className="card-img-container">
                <img className="card-img" alt="Image not found" src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : "https://books.google.com.tr/googlebooks/images/no_cover_thumb.gif"}></img>
              </div>   
                <hr/>
                <label className="card-title">{item.volumeInfo.title}</label>
                <hr/>
                <label className="card-authors">{item.volumeInfo.authors}</label>
          
        </div> 
      </a>   )
    ):
      console.error("books.items bulunamadı.")
    }
  </div>
  );
}

export {BooksList};