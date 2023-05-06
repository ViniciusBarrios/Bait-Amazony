import { renderToString } from "react-dom/server";

import { NextApiRequest, NextApiResponse } from "next";

import dayjs from "dayjs";
import { google } from "googleapis";
import nodemailer from "nodemailer";

import FreeEbook from "@components/Emails/FreeEbook";

type DataType = {
  name: string;
  whatsapp: string;
  email: string;
  country: string;
  city: string;
  uncomfortable: string;
  used_solutions: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(405).send({ message: "Only POST requests are allowed" });

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const data = req.body as DataType;

    const sheets = google.sheets({ version: "v4", auth });

    const name = data.name
      .toLowerCase()
      .split(" ")
      .map(
        namePart => `${namePart.charAt(0).toUpperCase()}${namePart.slice(1)}`,
      )
      .join(" ");

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: "A1:I1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            name.split(" ")[0],
            name,
            data.whatsapp,
            data.email,
            data.country,
            data.city,
            data.uncomfortable,
            data.used_solutions,
            dayjs(new Date()).format("DD/MM/YYYY - HH:mm:ss"),
          ],
        ],
      },
    });

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS,
      },
      secure: process.env.EMAIL_SECURE === "true",
    });

    const mailOptions: nodemailer.SendMailOptions = {
      from: {
        name: "Dra. Clara Souza",
        address: process.env.EMAIL_ADDRESS,
      },
      to: data.email,
      subject:
        "Livro Gratuito: Os 6 segredos de cuidados com a pele do antigo Egito...",
      html: renderToString(
        FreeEbook({ firstName: name.split(" ")[0], whatsapp: data.whatsapp }),
      ),
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      data: response.data,
    });
  } catch (err: any) {
    return res.status(500).send({ message: "Algo deu errado" });
  }
};
