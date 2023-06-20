const asyncHandler = require ("express-async-handler");
const PendingBill = require ("../models/pendingBillModel");

// Create pending bill
const addPendingBill = asyncHandler (async (req, res) => {
    const {name, pendingBillId, month, year, amount, date, note} = req.body

    // Validation
    if (!name || !month || !year || !amount || !date) {
        res.status (400)
        throw new Error ("Please fill in all required fields")
    }

    // Create new pending bill
    const pendingBill = await PendingBill.create ({
        name,
        pendingBillId,
        month,
        year,
        amount,
        date,
        note
    })

    if (pendingBill) {
        const {_id, name, month, year, amount, date, note} = pendingBill
        res.status (201).json ({
            _id, name, month, year, amount, date, note
        })
    } else {
        res.status (400)
        throw new Error ("Invalid bill data")
    }
});

// Get all pending bills after sorting according to the due date
const getPendingBills = asyncHandler (async (req, res) => {
    const pendingBills = await PendingBill.find().sort({ date: 1 }).then ((pendingBills) => {
        res.status (200).json (pendingBills)
    }).catch ((err) => {
        console.log (err)
    })
});

// Get single pending bill
const getPendingBill = async (req, res) => {
    const {id} = req.params
    
    const pendingBill = await PendingBill.findById (id)
    
    if (!pendingBill) {
        return res.status (404).json ({error : "Not found"})
    }
    
    res.status (200).json (pendingBill)
}

// Delete pending bills
const deletePendingBill = async (req, res) => {
    const {id} = req.params

    const pendingBill= await PendingBill.findOneAndDelete ({_id: id})

    // Check the bill is availability
    if (!pendingBill) {
        return res.status (404).json ({error: "Not found"})
    }

    res.status (200).json (pendingBill)
};

// Update pending bill details
const updatePendingBill = async (req, res) => {
    const {id} = req.params

    const pendingBill = await PendingBill.findOneAndUpdate ({_id: id}, {
        ...req.body
    })

    // Check the bill is available
    if (!pendingBill) {
        return res.status (404).json ({error: "Not found"})
    }

    res.status (200).json (pendingBill)
}

// search a pending bill
const searchPendingBill = async (req, res) => {
    //console.log (req.params.key);

    let data = await PendingBill.find (
        {
            "$or": [
                {name: {$regex: req.params.key}},
                {month: {$regex: req.params.key}}
            ]
        }
    )
    res.send (data);
}

module.exports = {
    addPendingBill,
    getPendingBills,
    getPendingBill,
    deletePendingBill,
    updatePendingBill,
    searchPendingBill
};