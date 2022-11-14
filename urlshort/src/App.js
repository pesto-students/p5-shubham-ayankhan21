import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [longurl, setlongUrl] = useState("");
  const [shorturl, setShortUrl] = useState("");

  // const Fetch=()=>{
  //         fetch(`https://api.shrtco.de/v2/shorten?url=${longurl}`)
  //         .then((response) => response.json())
  //         .then((data) => setShortUrl(data.result.full_short_link));
  // }

  const fetchData = async () => {
    if(longurl===shorturl){
      setShortUrl('URL ALREADY SHORTENED')
    }else{
      try {
        const response = await axios(
          `https://api.shrtco.de/v2/shorten?url=${longurl}`
        );
        setShortUrl(response.data.result.full_short_link);
      } catch (e) {
        setShortUrl("Error");
        console.log(e);
      }
    }
    };

  const handleClick = (event) => {
    console.log(event.target.value);
    setlongUrl(event.target.value);
  };
  return (
    <div>
    <div className="nav">
      <h1>Shortly 🔗</h1>
    </div>
    <div className="App">
      <div className="box">
        <div className="input">
          <input value={longurl} placeholder='Enter your URL here' onChange={handleClick} required></input>
          <button
            onClick={() => {
              fetchData();
            }}
          >
            Shorten
          </button>
        </div>

        <div className="shortlinkbox">
          <p>{shorturl}</p>
        </div>
        <div className="copybtn">
        <CopyToClipboard text={shorturl}>
          <button onClick={()=>{
            if(shorturl!==''){
              alert("URL Copied")
            }else{
              alert("Enter a URL")
            }
          }}>Copy</button>
        </CopyToClipboard>
        </div>
      </div>
    </div>
    </div>
  );
}
export default App;
