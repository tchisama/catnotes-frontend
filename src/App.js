import './App.css';
import Header from "./components/Header/Header"
import Books from "./components/BooksViewer/Books"
import Notes from "./components/NotesViewer/Notes"
import axios from "axios"
import Welcome from './components/Welcome/Welcome';



import { useEffect, useState} from "react"

function App() {
  const [bookSelected,setBookSelected]=useState("");
  const [changes,setChanges]=useState('')
  const [books,setBooks]=useState("")
  const [notes,setNotes]=useState("")
  const [bookData,setBookData]=useState('')
  const [userID,setUserID]=useState(localStorage.getItem("userID"))
  
  async function ref(){
    setUserID(localStorage.getItem("userID"))
    if(localStorage.getItem("userID")){
        await axios({
          method: 'get',
          url: 'http://localhost:1337/book/books/'+userID,
          responseType: 'stream'
        })
          .then(function (response) {
            setBooks(JSON.parse(response.data).reverse())
        });
    }
  }

  useEffect(() => {
    ref()
  }, [changes])

  useEffect(() => {
    ref()
  }, [books])
  useEffect(()=>{
    setBooks("")
    ref()
  },[userID])
  return (
    <div className="App">
      {
      userID?
      <div>
      <Header setChanges={setChanges} bookData={bookData} bookSelected={bookSelected} setBookSelected={setBookSelected}/>
      {
        bookSelected? 
        <Notes changes={changes} setChanges={setChanges}  bookSelected={bookSelected} /> 
        : 
        <Books setChanges={setChanges} userID={userID} setBookData={setBookData} setBooks={setBooks} setBookSelected={setBookSelected} books={books} />
      }
      </div>
      :
      <Welcome setChanges={setChanges}/>
      }
        
        
    </div>
  );
}

export default App;
