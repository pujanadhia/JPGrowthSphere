import { NextResponse } from "next/server";
// In a real project: import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { to, subject, type } = await req.json();

    if (!to || !subject || !type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Mock sending email
    console.log(`Sending a ${type} email to ${to} with subject "${subject}"...`);

    /*
    const data = await resend.emails.send({
      from: 'JP Growth Sphere <hello@jpgrowthsphere.com>',
      to: [to],
      subject: subject,
      html: `<strong>Hello!</strong><br /> Here is your requested information...`,
    });
    */

    return NextResponse.json({ status: "success", message: "Email mocked/sent" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
