import React from 'react';

function Body(props) {


  const handleChange = (event) => {
    props.changeLanguage(event.target.value);
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
      <form>
        <input placeholder="type here" type="text" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Body;
