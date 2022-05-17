import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8a98272d8d65bf",
    pass: "fc51814709b4b5"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Ruan Signori <ruansignoripreto@gmail.com>",
      to: "Ruan <ruansignoripreto@gmail.com>",
      subject,
      html: body,
    });
  };
}