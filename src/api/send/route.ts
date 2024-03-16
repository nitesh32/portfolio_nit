import { EmailTemplate } from '../../components/email-template'
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    console.log("ewfrgthjhjgfd");
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@niteshdev.tech>',
      to: ['nit8339@gmail.com'],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}