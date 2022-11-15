

// authEndpoint url is from spotify ...it is for redirect to offical spotify for useAcoount

 export const authEndpoint="https://accounts.spotify.com/authorize"
// redirectUri is like --our local host url
 const redirectUri="http://localhost:3000/"
//  step1-click Login button
// step2-redirect to Spotify login page
// step3-Redirect to home page after loged
// this clientId i got when i go in SPOTIFY DEVELOPER site and create account there for develop
const clientId="29ad2918f0f14b10b05c13b97f3843a1"   

// scopes is like --that what use in spotify account like--play recently played ...we can not delete any form spotify
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];
// ............ confusion here
  export const getToken= () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
};
// ............ confusion here
//   we are useing this url for redirec to offical spotify account
// after clicking on login please anilize url 
  export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;