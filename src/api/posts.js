import { getValidAccessToken } from "./reddit";

// const baseURL = "https://oauth.reddit.com";
// const endpoint = "/api/v1/me";

export async function getUserIdentity() {
    const url = "http://localhost:4000/api/me";

    const access_token = await getValidAccessToken();    
    const headers = {
        "Authorization": `Bearer ${access_token}`,
        "Accept": "application/json"
    };

    try {
        const response = await fetch(url, { headers });
        if (response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse);
        } else {
            console.error("Failed to fetch identity", response.status);
        }
    } catch (error) {
        console.log(`Smth went wrong with getting user identity ${error}`);
        
    }
}
