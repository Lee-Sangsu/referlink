import { NextResponse } from "next/server";

// const environment = process.env.NEXT_PUBLIC_PAYPAL_ENVIRONMENT || 'sandbox';
// const environment ='sandbox';
const client_id = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_PAYPAL_SECRET;

// export const baseURL = environment === 'sandbox' ? "https://api-m.sandbox.paypal.com" : "https://api-m.paypal.com";
const baseURL = "https://api-m.paypal.com";

async function generateAccessToken () {
    try {
        if (!client_id || !client_secret) {
          throw new Error("MISSING_API_CREDENTIALS");
        }
        const auth = Buffer.from(
          client_id + ":" + client_secret,
        ).toString("base64");
        const response = await fetch(`${baseURL}/v1/oauth2/token`, {
          method: "POST",
          body: "grant_type=client_credentials",
          headers: {
            Authorization: `Basic ${auth}`,
          },
        });
        
        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Failed to generate Access Token:", error);
    }
};

export async function POST(request: Request) {
    try {
        const accessToken = await generateAccessToken();
        const url = `${baseURL}/v2/checkout/orders`;
        const { cart } = await request.json();

        const payload = {
            intent: "CAPTURE",
            purchase_units: cart
        };
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`
            },
            method: "POST",
            body: JSON.stringify(payload),
        })
        const jsonResponse = await response.json();
        // console.log("WHATs HAPPENING::::", jsonResponse);
        return NextResponse.json(jsonResponse);
          
    } catch (error) {
        console.error(error); 
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};