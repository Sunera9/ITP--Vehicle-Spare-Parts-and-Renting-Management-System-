const PDFDocument = require ("pdfkit");
const PendingBill = require ("../models/pendingBillModel");

async function downloadPendingBillReport (req, res) {
    try {
        //query the mongodb database for the data
        const data = await PendingBill.find ({});

        //set the response headers to indicate that we are sending a pdf file
        res.setHeader ("Content-Type", "application/pdf");
        res.setHeader ("Content-Disposition", "attachment; filename = pending_bill_report.pdf");

        //create a new instance of the PDFDocument class and pipe it to the response object
        const doc = new PDFDocument();
        doc.pipe (res);

        //display the topic
        doc.font ('Helvetica-Bold');
        doc.fontSize (20).text ("Shantha Motors", {align: 'center'});
        doc.fontSize (16).text ("Utility Control\nReport of Pending Bills\n\n", {align: 'center'});

        //loop through the data and add it to the pdf document
        data.forEach ((pendingBill) => {
            doc.font ('Helvetica');
            doc.fontSize (12);
            doc.text (`Bill ID : ${pendingBill._id}`);
            doc.text (`Name : ${pendingBill.name}`);
            doc.text (`Month : ${pendingBill.month}`);
            doc.text (`Year : ${pendingBill.year}`);
            doc.text (`Amount : ${pendingBill.amount}`);
            doc.text (`Due Date : ${pendingBill.date}`);
            doc.text (`Note : ${pendingBill.note}`);
            doc.moveDown();
        });

        //finalize the pdf document and end the response
        doc.end();

    } catch (error) {

        console.error (error);
        res.status (500).send ("Server error");
    }
}

module.exports = { downloadPendingBillReport };