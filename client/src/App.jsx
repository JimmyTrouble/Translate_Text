import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Body from './components/body'

function App() {

const [langauge, setLanguage] = useState('')

const env  = import.meta.env.VITE_APP_API_URL;

useEffect(() => {
  handleLangauge("Japanese")
}, []); // Empty dependency array means this effect runs once on mount

const handleLangauge = async (value) => {
  //sets the Header langauge variable
  setLanguage(value) 

}

const convertText = async (text, lang) => {

  console.log(text, lang)

}

  return (
    <div>
      <Header
      headerLangauge = {langauge }
      
      />
      <Body textToConvert={convertText} changeLanguage={handleLangauge}/>
    </div>
  )
}

export default App