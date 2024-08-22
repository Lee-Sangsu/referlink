import { airtableConfig } from "../config/airtableConfig";

export async function retrieveUserReferences (email: string): Promise<object> {
    try {
        const filterQuery = encodeURIComponent(`Assessee = '${email}'`)
        const response = await fetch(`${airtableConfig.endpointUrl.aseessment}?filterByFormula=${filterQuery}`, {
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
            return data;
        } else {
            return {
                err: "No data retrieved"
            };
        }
    } catch (error) {
        console.error('There has been a problem with the fetch operation:', error);
        return {
            err: error
        };
    }
};