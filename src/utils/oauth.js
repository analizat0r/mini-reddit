//const { v4: uuidv4 } = require('uuid');
import { v4 as uuidv4 } from 'uuid';

const CLIENT_ID = "exh5IqGa3I425saNed4SRA";
const SCOPE_STRING = "identity";
const CLIENT_SECRET = "XpJHLNSv0H_gLKwRDaIGnypfzXMMrQ";
const URI = "http://localhost:3000";
const baseURL = "https://www.reddit.com/api/v1";


let accessToken;

async function getAccessToken() {
  if (accessToken) {
    return accessToken;
  }

  const RANDOM_STRING = uuidv4();
  const requestParams = `?client_id=${CLIENT_ID}&response_type=code&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=permanent&scope=${SCOPE_STRING}`;
  const authorizationURL = baseURL+"/authorize"+requestParams;

  window.location.href = authorizationURL;
  const urlParams = new URLSearchParams(window.location.search);
  const responseCode = urlParams.get('code');
  const responseState = urlParams.get('state');

  if (responseState === RANDOM_STRING) {
    const endpoint = "/access_token";
    const url = baseURL + endpoint;
    
    // Base64 encoding of user credentials
    const encodedCreds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": `Basic ${encodedCreds}`
    };

    const body = new URLSearchParams({
      grant_type : "authorization_code",
      code : responseCode,
      redirect_uri : URI
    });

    try {
      const response = await fetch(url, { 
        method: "POST", 
        headers: headers,
        body: body.toString() 
      }); 
      if (response.ok) {
        const jsonResponse = await response.json();
        return console.log(jsonResponse);
      }
    } catch (error) {
        console.log(error);
      } 
  }    

};
export default getAccessToken;