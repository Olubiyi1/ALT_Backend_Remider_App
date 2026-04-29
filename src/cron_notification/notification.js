import cron from "node-cron"
import User from "../users/users.model.js"
import sendBirthdayEmail from "../helpers/email.js";


const sendBirthdayNotifications = async () => {
    try {
        const today = new Date();
        const month = today.getMonth() + 1;
        const day = today.getDate();

        const users = await User.find({
            $expr: {
                $and: [
                    { $eq: [{ $month: "$birthday" }, month] },
                    { $eq: [{ $dayOfMonth: "$birthday" }, day] }
                ]
            },
            notified: false
        });

        if (!users.length) {
            console.log("No birthday users to notify today.");
            return;
        }

        for (const user of users) {
            await sendBirthdayEmail(user); 
            await User.findByIdAndUpdate(user._id, { notified: true });
        }

        console.log(`Birthday emails sent to ${users.length} user(s).`);

    } catch (err) {
        console.error("Error sending birthday notifications:", err);
        process.exit(0);
    }
};

const startBirthdayManager = () => {
    cron.schedule("0 7 * * *", async () => {
        console.log("Running daily birthday notification job...");
        await sendBirthdayNotifications();
    });

    console.log("Birthday manager started. Scheduled daily at 7AM.");
};

export default startBirthdayManager;