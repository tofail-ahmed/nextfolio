import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_HQ8EDLpH_GNTeWaYt8yyhwdhLPnphk2Rr");
const toEmail = "atofail50@gmail.com";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: email, // Set the 'from' field to the sender's email address
      to: toEmail, // Set the 'to' field to the recipient's email address
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
