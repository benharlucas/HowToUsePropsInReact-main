import {useEffect, useState} from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'

function App() {

  const [diary, setDiary] = useState('')
  
  const [example, setExample]=
  useState('')
  useEffect(() => {
    console.log('Render')

  return() => {
    console.log('Unmount')
  }
  },[example])
  const changeHandler = (e) => {
    setDiary(e.target.value)
  }

  return (
    <>
    <Header />
    <main>
    <input name='example' value=
    {example} onChange={(e) =>
    setExample(e.target.value)}/>
    <Form myDiary={diary } handleChange={changeHandler}/>
    </main>
    <Footer />
    </>

  );
}

export default App;
