import { v4 as uuidv4 } from 'uuid';

function redirectToReddit() {
    const baseURL = "https://www.reddit.com/api/v1";
    const CLIENT_ID = "exh5IqGa3I425saNed4SRA";
    const RANDOM_STRING = uuidv4();
    const URI = "http://localhost:3000";
    const SCOPE_STRING = "identity";
    const requestParams = `?client_id=${CLIENT_ID}&response_type=code&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=permanent&scope=${SCOPE_STRING}`;
    const authorizationURL = baseURL+"/authorize"+requestParams;

    window.location.href = authorizationURL;
}

export default redirectToReddit;

// this function redirects user to reddit
// i need another function to handle then user comes back which will do the actual token retrieval