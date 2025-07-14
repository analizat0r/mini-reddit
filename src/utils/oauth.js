//const { v4: uuidv4 } = require('uuid');
import { v4 as uuidv4 } from 'uuid';

const RANDOM_STRING = uuidv4();
const CLIENT_ID = "exh5IqGa3I425saNed4SRA";
const endpoint = "/api/v1/me";
const SCOPE_STRING = "identity";
const URI = "http://localhost:3000";

const getTokenUrl = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=permanent&scope=${SCOPE_STRING}`;
console.log(getTokenUrl);


async function getData() {
  const url = getTokenUrl;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response;
    const formatedResponse = json.cookies.map(i => {console.log(i)})
    console.log(formatedResponse);
  } catch (error) {
    console.error(error.message);
  }
}

export default getData;

//Need to refactor this to not use fetch(), but instead redirect user to the URL to use window.location.href