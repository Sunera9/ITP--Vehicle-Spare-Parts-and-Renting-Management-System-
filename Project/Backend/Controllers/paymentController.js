const { default: mongoose } = require("mongoose");
const paymentSchema = require("../models/payment");
const { response } = require("express");
const PDFDocument = require("pdfkit");
const paymentModel = mongoose.model("payment", paymentSchema);

function createPayment(req, res) {
  const {
    subtotal,
    bonus,
    shipping,
    type,
    status,
    address,
    phone,
    custName,
    paymentName,
  } = req.body;
  let newPay = new paymentModel();
  newPay.subtotal = subtotal;
  newPay.bonus = bonus;
  newPay.shipping = shipping;
  newPay.type = type;
  newPay.status = status;
  newPay.address = address;
  newPay.phone = phone;
  newPay.custName = custName;
  newPay.paymentName = paymentName;
  newPay.save().then((response) => {
    res.send(response);
  });
}
function getAllPayments(req, res) {
  paymentModel.find().then((response) => {
    res.send(response);
  });
}
function markAsRecieved(req, res) {
  const paymentId = req.params.id;
  console.log(paymentId);
  paymentModel
    .updateOne(
      { _id: paymentId },
      {
        $set: {
          status: "recieved",
        },
      }
    )
    .then((response) => {
      res.send(response);
    });
}

async function genPDF(req, res) {
  console.log("generating pdf");
  let subTotal = 0;
  try {
    const doc = new PDFDocument({ size: "A4" });
    let tot=0;
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=Gross Income Report.pdf`);

    doc.pipe(res);

    doc
      .roundedRect(50, 50, 500, 750, 10)
      .strokeColor("black")
      .lineWidth(2)
      .stroke();

    //displaying the topics
    doc.font("Helvetica-Bold");
    doc.fillColor("#321375");
    doc.fontSize(20).text("Shantha Motors", { align: "center" });
    doc.fillColor("black");
    doc.fontSize(16).text("Gross Income Report\n", { align: "center" });

    doc.moveDown();

    // Displaying Details
    doc.font("Helvetica");
    doc.fillColor("black");
    await paymentModel.find().then((response) => {
      if (response) {
        let x = 0;
        response.forEach((item) => {

          doc.fontSize(10).text(`Date : ${item.date}\n`);
          doc.fontSize(10).text(`Customer Name : ${item.custName}\n`);
          doc.fontSize(10).text(`Status : ${item.status}\n`);
          doc.fontSize(10).text(`Address : ${item.address}\n`);
          doc.fontSize(10).text(`Type : ${item.type}\n`);
          doc
            .fontSize(10)
            .text(`Total : ${item.subtotal - item.bonus + item.shipping}\n`);
          doc.moveDown();
          tot+=(item.subtotal - item.bonus + item.shipping)
          x++;
          if (x === 8) {
            doc.addPage();
            x = 0;
            doc
              .roundedRect(50, 50, 500, 750, 10)
              .strokeColor("black")
              .lineWidth(2)
              .stroke();
          }
        });
      }
    });
    doc.moveDown();
    doc.fontSize(16).text(`Gross Income: LKR ${tot}`)
    doc.end();
    console.log("pdf sent");
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .send({ message: "An error occurred while generating te pdf", error: e });
  }
}
module.exports = {
  createPayment,
  getAllPayments,
  markAsRecieved,
  genPDF,
};
