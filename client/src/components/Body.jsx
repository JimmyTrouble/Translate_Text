// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

function Body(props) {
  //state of the dropdown menu lang
  const [selectedLang, setSelectedLang] = useState();

  //uses the onChange function of the <select> to set the lang with useState
  const handleChange = (event) => {
    props.changeLanguage(event.target.value);
    setSelectedLang(event.target.value);
  };

  //passes the text and lanf as props to app
  const handleSubmit = (event) => {
    event.preventDefault();
    const text = event.target[0].value;
    props.textToConvert(text, selectedLang);
  };

  useEffect(() => {
    setSelectedLang("Japanese");
  }, []);

  return (
    <div className="body">
      <form>
        <label htmlFor="Languages">Choose language</label>
        <select placeholder="?" name="selector" onChange={handleChange}>
          <option value="Japanese">Japanese</option>
          <option value="Spanish">Spanish</option>
          <option value="Chinese">Chinese</option>
        </select>
      </form>
      <form onSubmit={handleSubmit}>
        <input placeholder="type here" type="text" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Body;
