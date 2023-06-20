const nodemailer = require ('nodemailer');
const PendingBill = require ('../models/pendingBillModel');

const sendEmail = async (req, res) => {
    try {
        //retrieve bills that have due date of tomorrow
        const tomorrow = new Date();
        tomorrow.setDate (tomorrow.getDate() + 1);
        const bills = await PendingBill.find ({dueDate: tomorrow});

        //set up email transporter
        let transporter = nodemailer.createTransport ({
            service: 'gmail',
            auth: {
                user: 'wishmi105@gmail.com',
                pass: 'wish123'
            }
        });

        //send email for each bill that has a due date of tomorrow
        for (let i = 0; i < bills.length; i++) {
            const bill = bills[i];

            let mailOptions = {
                from: "wishmi105@gmail.com",
                to: "wishmisasika@gmail.com",
                subject: "Reminder: Payment due tomorrow",
                text: `Dear ${bill.name}, \n\nThis is a friendly reminder that your payment of $${bill.amount} for ${bill.name} is due tomorrow, ${bill.dueDate.toDateString()}. Please make sure to complete the payment on time to avoid any late fees. \n\nSincerely, \nSystem manager`
            };

            await transporter.sendMail (mailOptions);
            console.log (`Email sent to ${bill.name}`);
        } 
        
        res.send ('Reminder email sent successfully');
        
        } catch (err) {
            console.log (err);
            res.status (500).send ('Error sending reminder emails');
    }
};

module.exports = { sendEmail };