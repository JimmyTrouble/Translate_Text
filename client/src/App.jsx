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

  let isoCode = ''

  switch(lang){
    case "Japanese":
      isoCode = "ja";
      break;
    case "Spanish":
      isoCode = "es"
      break;
    case "Chinese":
      isoCode = "zh";
      break;
  }

  try {

    const response = await fetch(`${env}/translate`, {
      method: "POST",
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({
        Text: text,
        Lang: isoCode,
      }),
    });

    
    const data = await response.json()
    console.log(data)
    
  } catch (error) {
    
  }

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