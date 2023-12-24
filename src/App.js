import './App.css';
import { BooksProvider } from './Components/Context/BooksContext';
import { Header } from './Components/Header';
import { BooksList } from './Components/BooksList';

function App() {
  return (
    <div className="App">
       <BooksProvider>
         <Header/>
         <BooksList/>
       </BooksProvider>
    </div>
  );
}

export default App;
