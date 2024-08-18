import { airtableConfig } from "../config/airtableConfig";


export async function isUserWithEmailExists (email: string): Promise<boolean> {
    try {
        const response = await fetch(`${airtableConfig.endpointUrl.users}/${email}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${airtableConfig.apikey}`,
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);
        if (data) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('There has been a problem with the fetch operation:', error);
        return false;
    }
};

export async function retrieveUserInfo (userId: string) {
    const asdf = "salkdfm";
    return 
};

export async function signedUpUser () {
    const asdf = "salkdfm";
    return 
}