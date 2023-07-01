import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Body from './components/body'

function App() {

const [langauge, setLanguage] = useState('')

const env  = import.meta.env.VITE_APP_API_URL;

function handleLangauge(value){

  setLanguage(value)
  fetch(`${env}/translate`)

}

useEffect(() => {
  handleLangauge("Japanese")
}, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <Header
      headerLangauge = {langauge }
      
      />
      <Body changeLanguage={handleLangauge} />
    </div>
  )
}

export default App