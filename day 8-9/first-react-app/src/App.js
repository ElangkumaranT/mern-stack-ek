 import back from './logo.svg';
import './App.css';
import logo from './logo.svg';
function App() {
  const endPointURL = "http://randomuser.me/api/";
  const restAPICall = async ()=>{
const response = await fetch(endPointURL);
 const jsonresponse =response;
console.log(jsonresponse);
  }

  restAPICall();
  return (


    <div className="App">
      { <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          EK <code>src/App.js</code> and save to reload.
        </p>
        <img src={back} className='img1' alt="no video"></img>
        <a
          className="App-link"
          href="https://eseccsd.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>}
    </div>
  );
  }

 export default App;
