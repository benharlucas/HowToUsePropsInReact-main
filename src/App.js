import {useEffect, useState} from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'

function App() {

  const [diary, setDiary] = useState('')
  
  const [showForm, setShowForm]=
  useState(true)


  const changeHandler =(e) => {
    setDiary(e.target.value)
  }
  return (
    <>
    <Header />
    <main>
    <button onClick={() => setShowForm
    (!showForm)} >Toggle</button>
    {showForm &&
    <Form myDiary={diary}
     handleChange={changeHandler}/>
    }
    </main>
    <Footer />
    </>

  );
}

export default App;
