import React, {useState} from 'react'
import Header from './components/Header'
import Body from './components/body'

function App() {

const [langauge, setLanguage] = useState('')



function handleLangauge(value){

  setLanguage(value)

}

  return (
    <div>
      <Header
      headerLangauge = {langauge ? langauge : handleLangauge("Japanese")}
      
      />
      <Body changeLanguage={handleLangauge} />
    </div>
  )
}

export default App