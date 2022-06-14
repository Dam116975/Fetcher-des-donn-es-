import axios from 'axios';
import './App.css';
import {useState} from "react";
import DisplaySimpson from './components/citation';

const sampleCitation = 
  {
  quote : "By chilling my loins I increase the chances of impregnating my wife.",
  character : "Apu Nahasapeemapetilon",
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left"
  }

  

function App() {
  const [citation, setSimpson] = useState(sampleCitation);

  const getEmployee = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpson(data[0]);
      });
  };

  return (
    <div className="App">
      <DisplaySimpson citation={citation} />
      <button type="button" onClick={getEmployee}>Change</button>
    </div>
  );
}


export default App;

