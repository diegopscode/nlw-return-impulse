import nodemailer from "nodemailer"

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "603cd25ad79fa2",
    pass: "3718c69acc0483"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe feedget <oi@feedget.com>",
      to: "Diego Pancera <yuukidps@gmail.com>",
      subject,
      html: body,
    })
  }
}