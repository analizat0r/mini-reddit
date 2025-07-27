import { v4 as uuidv4 } from 'uuid'; 

const baseURL = "https://www.reddit.com/api/v1";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const URI = "http://localhost:3000";
const SCOPE_STRING = "identity";
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export function redirectToReddit() {
    const RANDOM_STRING = uuidv4();
    localStorage.setItem("reddit_auth_state", RANDOM_STRING); // saves RANDOM_STRING across reload
    const requestParams = `?client_id=${CLIENT_ID}&response_type=code&state=${RANDOM_STRING}&redirect_uri=${URI}&duration=permanent&scope=${SCOPE_STRING}`;
    const authorizationURL = baseURL+"/authorize"+requestParams;

    window.location.href = authorizationURL;
};

export async function handleRedirectCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const responseCode = urlParams.get('code');
    const responseState = urlParams.get('state');
    const savedRandomString = localStorage.getItem("reddit_auth_state");

    if (responseCode && responseState === savedRandomString) {
        const encodedCreds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`); // encodes credentials in a format 'username:password' and then encodes it with Base64 to smth like 'bXlVc2VyOm15U2VjcmV0
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${encodedCreds}`
        };
        const body = new URLSearchParams({
            grant_type: "authorization_code",
            code: responseCode,
            redirect_uri: URI
        });

        try {
            const response = await fetch(`${baseURL}/access_token`,{
                method: "POST",
                headers: headers,
                body: body.toString()

            });

            if(response.ok) {
                const jsonResponse = await response.json();
                console.log("Access Token Response:", jsonResponse);
            } else {
                console.error("Failed to fetch token", response.status);
            }
        } catch (error) {
            console.error("Error during token fetch", error);
        }
    }
};