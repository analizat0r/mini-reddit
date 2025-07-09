const { v4: uuidv4 } = require('uuid');

const RANDOM_STRING = uuidv4();
const CLIENT_ID = "exh5IqGa3I425saNed4SRA";
const endpoint = "/api/v1/me";
const SCOPE_STRING = "identity";

const getTokenUrl = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=${RANDOM_STRING}&redirect_uri=URI&duration=permanent&scope=${SCOPE_STRING}`;

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

getData();

//bad as i should open this link via browser to give an access only then i will get the access token