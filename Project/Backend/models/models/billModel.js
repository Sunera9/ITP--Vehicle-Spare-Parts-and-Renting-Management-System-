const mongoose = require ("mongoose")

const billSchema = mongoose.Schema ({
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
        required: [true, "Please enter the payment made date"]
    },
    note: {
        type: String
    }
}, {
    timestamps: true,
});

const Bill = mongoose.model ("Bill", billSchema)
module.exports = Bill