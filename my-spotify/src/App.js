 import {getToken} from"./spotify"
import { useEffect, useState } from 'react';
import './App.css';
import Login from"./Login"
import Player from"./Player"
// i install   npm i spotify-web-api-js
import SpotifyWebApi from "spotify-web-api-js"
const spotify= new SpotifyWebApi()
function App() {
const [token,setToken]=useState(null)
  useEffect(()=>{
  const hash=getToken()
  window.location.hash=" "
const _token=hash.access_token;
  console.log("tokn:-", token)
  if(_token){
    setToken(_token)
    spotify.setAccessToken(_token);
    spotify.getMe().then(user=>{
      console.log("user",user)
    })
  }
  },[])

  return (
    <div className="app">
   {token?(<Player/>)
   
   
   :(<Login/>)}
{/* <Login/> */}
    </div>
  );
}

export default App;
