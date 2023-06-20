const asyncHandler = require ("express-async-handler");
const Bill = require ("../models/billModel");
 
// Create bill
const addBill = asyncHandler (async (req, res) => {
    const {name, billId, month, year, amount, date, note} = req.body

    // Validation
    if (!name || !month || !year || !amount || !date) {
        res.status (400)
        throw new Error ("Please fill in all required fields")
    }

    // Create new bill
    const bill = await Bill.create ({
        name,
        billId,
        month,
        year,
        amount,
        date,
        note
    })

    if (bill) {
        const {_id, name, month, year, amount, date, note} = bill
        res.status (201).json ({
            _id, name, month, year, amount, date, note
        })
    } else {
        res.status (400)
        throw new Error ("Invalid bill data")
    }
});

// Get all bills
const getBills = asyncHandler (async (req, res) => {
    const bills = await Bill.find ().then ((bills) => {
        res.status (200).json (bills)
    }).catch ((err) => {
        console.log (err)
    })
});

// Get single bill
const getBill = async (req, res) => {
    const {id} = req.params
    
    const bill = await Bill.findById (id)
    
    if (!bill) {
        return res.status (404).json ({error : "Not found"})
    }
    
    res.status (200).json (bill)
}

// Delete bills
const deleteBill = async (req, res) => {
    const {id} = req.params

    const bill= await Bill.findOneAndDelete ({_id: id})

    // Check the bill is availability
    if (!bill) {
        return res.status (404).json ({error: "Not found"})
    }

    res.status (200).json (bill)
};


// Update bill details
const updateBill = async (req, res) => {
    const {id} = req.params

    const bill = await Bill.findOneAndUpdate ({_id: id}, {
        ...req.body
    })

    // Check the bill is available
    if (!bill) {
        return res.status (404).json ({error: "Not found"})
    }

    res.status (200).json (bill)
}

// search a bill
const searchBill = async (req, res) => {
    //console.log (req.params.key);

    let data = await Bill.find (
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
    addBill,
    getBills,
    deleteBill,
    getBill,
    updateBill,
    searchBill,
 };
