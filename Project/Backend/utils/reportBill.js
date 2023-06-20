const PDFDocument = require ("pdfkit");
const Bill = require ("../models/billModel");

async function downloadBillReport (req, res) {
    try {
        //query the mongodb database for the data
        const data = await Bill.find ({});

        //set the response headers to indicate that we are sending a pdf file
        res.setHeader ("Content-Type", "application/pdf");
        res.setHeader ("Content-Disposition", "attachment; filename = bill_report.pdf");

        //create a new instance of the PDFDocument class and pipe it to the response object
        const doc = new PDFDocument();
        doc.pipe (res);
		
		//display the topic
        doc.font ('Helvetica-Bold');
        doc.fontSize (20).text ("Shantha Motors", {align: 'center'});
        doc.fontSize (16).text ("Utility Control\nReport of Settled Bills\n\n", {align: 'center'});

        //loop through the data and add it to the pdf document
        data.forEach ((bill) => {
			doc.font ('Helvetica');
            doc.fontSize (12);
            doc.text (`Bill ID : ${bill._id}`);
            doc.text (`Name : ${bill.name}`);
            doc.text (`Month : ${bill.month}`);
            doc.text (`Year : ${bill.year}`);
            doc.text (`Amount : ${bill.amount}`);
            doc.text (`Date : ${bill.date}`);
            doc.text (`Note : ${bill.note}`);
            doc.moveDown();
        });

        //finalize the pdf document and end the response
        doc.end();

    } catch (error) {

        console.error (error);
        res.status (500).send ("Server error");
    }
}

module.exports = { downloadBillReport };