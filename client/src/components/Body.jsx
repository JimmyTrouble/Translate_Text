import React, {useState} from 'react';

function Body(props) {

  const [selectedLang, setSelectedLang] = useState()

  const handleChange = (event) => {
    props.changeLanguage(event.target.value);
    setSelectedLang(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // This will prevent the form from being submitted in the traditional way (which would cause a page refresh)
    const text = event.target[0].value;
    props.textToConvert(text, selectedLang);
  };
 


  return (
    <div>
      <form>
        <label htmlFor="Languages">Choose language</label>
        <select placeholder='?' name="selector" onChange={handleChange}>
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
