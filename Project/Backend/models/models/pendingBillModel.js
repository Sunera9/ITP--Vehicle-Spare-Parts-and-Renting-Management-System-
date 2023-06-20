const mongoose = require ("mongoose")

const pendingBillSchema = mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please add the name"]
    },
    month: {
        type: String,
        required: [true, "Please enter the month"]
    },
    year: {
        type: Number,
        required: [true, "Please enter the year"]
    },
    amount: {
        type: Number,
        required: [true, "Please enter the amount"]
    },
    date: {
        type: String,   //mm/dd/yy
        required: [true, "Please enter the due date"]
    },
    note: {
        type: String
    }
}, {
    Timestamps: true,
});

const PendingBill = mongoose.model ("PendingBill", pendingBillSchema)
module.exports = PendingBill