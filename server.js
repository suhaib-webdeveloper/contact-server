const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = 3000;

// إعدادات أساسية
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// نقطة إرسال الرسائل
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  // إعداد الإيميل
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "suhaib2025almaqalh@gmail.com",
      pass: "gbgw wani vnla sqxy"
    }
  });

 let mailOptions = {
  from: '"Suhaib Website" <suhaib2025almaqalh@gmail.com>', // اسم موقعك + بريدك
  to: "suhaib2025almaqalh@gmail.com", // بريدك لاستلام الرسائل
  replyTo: email, // ← هنا السحر
  subject: `💌 رسالة جديدة من ${name}`,
  html: `
    <h3>رسالة جديدة من موقعك:</h3>
    <p><strong>الاسم:</strong> ${name}</p>
    <p><strong>البريد:</strong> ${email}</p>
    <p><strong>الرسالة:</strong><br>${message}</p>
  `
};
 

try {
  let info = await transporter.sendMail(mailOptions);
  console.log("✅ message sent! information:", info);
  res.status(200).json({ message: "✅ message sent!" });
} catch (err) {
  console.error("❌ خطأ أثناء الإرسال:", err);
  res.status(500).json({ error: "❌ حدث خطأ أثناء الإرسال. راجع الطرف الخلفي." });
}

});

app.listen(port, () => {
  console.log(`🚀 Server is running on https://contact-server-1-b3s1.onrender.com:${port}`);
});
