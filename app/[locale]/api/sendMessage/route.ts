import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

export async function POST(req: Request, res: Response) {
  const accountSid = <string>process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
  const token = <string>process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, token);
  const requestBody = await req.json();
  const { phone, message } = requestBody;
  // console.log(phone, message);
  client.messages
    .create({
      body: message,
      from: process.env.NEXT_PUBLIC_TWILIO_PHONE_NUMBER,
      to: phone,
    })
    .then((message) =>
      Response.json({
        success: true,
      })
    )
    .catch((error) => {
      console.log(error);
      Response.json({
        success: false,
      });
    });
}
