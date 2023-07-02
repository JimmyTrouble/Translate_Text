// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/body";
import Response from "./components/Response";
import "./App.css";

function App() {
  const [langauge, setLanguage] = useState("");
  const [response, setResponse] = useState("");

  const env = import.meta.env.VITE_APP_API_URL;

  //set the language on mount
  useEffect(() => {
    handleLangauge("Japanese");
  }, []); // Empty dependency array means this effect runs once on mount

  const handleLangauge = async (value) => {
    //sets the Header langauge variable
    setLanguage(value);
  };

  const convertText = async (text, lang) => {
    let isoCode = "";

    switch (lang) {
      case "Japanese":
        isoCode = "ja";
        break;
      case "Spanish":
        isoCode = "es";
        break;
      case "Chinese":
        isoCode = "zh";
        break;
    }

    try {
      const response = await fetch(`${env}/translate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Text: text,
          Lang: isoCode,
        }),
      });

      const data = await response.json();

      console.log(data.textKey);
      setResponse(data.textKey);
    } catch (error) {
      console.log("Catch Error" + error);
    }
  };

  return (
    <div className="container">
      <Header headerLangauge={langauge} />
      <Body textToConvert={convertText} changeLanguage={handleLangauge} />
      <Response responseText={response} />
    </div>
  );
}

export default App;
