import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,     // your email address
        pass: process.env.EMAIL_PASS      // your email app password
    }
});

const sendBirthdayEmail = async (user) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: "Happy Birthday! 🎂",
        html: `
            <h2>Happy Birthday, ${user.name}! 🎉</h2>
            <p>Wishing you a wonderful day filled with joy and celebration.</p>
            <p>From all of us, have an amazing birthday!</p>
        `
    };

    await transporter.sendMail(mailOptions);
    console.log(`Birthday email sent to ${user.name} (${user.email})`);
};

export default sendBirthdayEmail;