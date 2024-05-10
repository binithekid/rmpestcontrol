import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { name, email, message, number, topic, pestType } = req.body;

    console.log(name, email);

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "onecloudmediauk1@gmail.com",
        pass: "huhngfiutxhtijpm",
      },
    });

    // Email options
    const mailOptions = {
      from: "onecloudmediauk1@gmail.com",
      to: "bini.tek1@gmail.com",
      subject: "RM PEST CONTROL WEBSITE SUBMISSION",
      text: `Name: ${name}\nNumber: ${number}\nEmail: ${email}\nTopic: ${topic}\nPest: ${pestType}\nMessage: ${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
