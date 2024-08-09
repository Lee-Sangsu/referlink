export const airtableConfig = {
    endpointUrl: {
        users: "https://api.airtable.com/v0/appa0uqwipfGpVOkI/tbllDRbPL0iLEPYWs",
        questions: "https://api.airtable.com/v0/appa0uqwipfGpVOkI/tblKAzOcuhEUrtouG",
        aseessment: "https://api.airtable.com/v0/appa0uqwipfGpVOkI/tblIRsvU64cPdmspX",
        aseessRequest: "https://api.airtable.com/v0/appa0uqwipfGpVOkI/tblfz4874ab2JUEYu",
    },
    apikey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
};

/* ex)
    curl "https://api.airtable.com/v0/appa0uqwipfGpVOkI/users?maxRecords=3&view=Grid%20view" \
    -H "Authorization: Bearer YOUR_SECRET_API_TOKEN"
*/