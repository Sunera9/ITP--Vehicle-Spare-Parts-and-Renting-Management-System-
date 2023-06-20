const mongoose = require ("mongoose")

const pendingBillSchema = mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please add the name"]
    },
    pendingBillId: {
        type: String,
        required: true,
        default: function() {
            return "PB" + Math.floor (1000 + Math.random() * 9000);
        }, //generates a 4 digit random
        trim: true
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
    timestamps: true,
});

const PendingBill = mongoose.model ("PendingBill", pendingBillSchema)
module.exports = PendingBill