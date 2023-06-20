const asyncHandler = require("express-async-handler");
const Employee = require("../models/employeeModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { response } = require("express");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");



const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"}) //token expires in one day > 1d
}

//Employee Registtration
const registerEmployee =asyncHandler( async(req,res) => {
   const {first_name,last_name,address,mobile, designation, email, password,profile_pic,date,empID} = req.body

   //validation
   if(!email || !password){
           res.status(400)
           throw  new Error("Please fill in all required feilds")
   }

   if(password.length < 6) {
    res.status(400)
    throw  new Error("Password must have minimum 6 characters")
   }

   //check if user email already exists
 const userExists = await Employee.findOne({email})
    if(userExists){
        res.status(400)
        throw  new Error("User Already exist, Please Try again with a new email")
    }

    //Handling image upload
      let fileData = {}
      if(req.file){
        fileData = {
            fileName : req.file.originalname,
            filePath : req.file.path,
            fileType : req.file.mimetype,
            fileSize : req.file.size,
        }
      }

    //creating a new employee
    const employee = await Employee.create({
        first_name,
        last_name,
        address,
        mobile,
        designation,
        email,
        password,
        date,
        empID,
        profile_pic : fileData,
    });

    //Generating Token
    const token = generateToken(employee._id)

    //sending HTTP-only cookie
    res.cookie("token", token, {
        path:"/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400),  // 1 day
        sameSite: "none",
        secure: true
    });

    if(employee){
        const{_id, first_name,last_name,address,mobile,designation,email, password,profile_pic,date,empID}= employee
        res.status(201).json({
            _id,
            first_name,
            last_name,
            address,
            mobile,
            designation,
            email,
            password,
            profile_pic,
            date,
            empID,
            token,
        })
    }else{
        res.status(400)
        throw new Error ("Could not create User")
    }

});

//Employee Login
const loginEmployee =asyncHandler( async (req,res) => {
    const {email, password} = req.body
    
    //validate Request
    if(!email || !password){
        res.status(400)
           throw  new Error("Please add email  and password") 
    }

    //checking if user already exists
    const employee = await Employee.findOne({email})
    if(!employee){
        res.status(400)
           throw  new Error("Employee not found! Please Sign Up!") 
    }

    //if user exist, checking if the password is correct
    const passwordCorrect = await bcrypt.compare(password, employee.password)

        //Generating Token
        const token = generateToken(employee._id)

        //sending HTTP-only cookie
        res.cookie("token", token, {
            path:"/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400),  // 1 day
            sameSite: "none",
            secure: true
        });

    if(employee && passwordCorrect){
        const{_id, first_name,last_name,address,mobile,designation,email, password,profile_pic,date,empID}= employee
        res.status(200).json({
            _id,
            first_name,
            last_name,
            address,
            mobile,
            designation,
            email,
            password,
            profile_pic,
            date,
            empID,
            token
        })
    } else{
        res.status(400)
        throw  new Error("Invalid email or password");
    }

});

//logout employee
const logout =asyncHandler( async(req,res) => {
          
    //Deleting the cookie by setting an expiration
        res.cookie("token", "", {
            path:"/",
            httpOnly: true,
            expires: new Date(0),  
            sameSite: "none",
            secure: true
        });
        return res.status(200).json({message: "Succesfully logged out"})
});

//get Employee data
const getEmployee = asyncHandler(async(req,res) => {
  const employee = await Employee.findById(req.employee._id)

  if (employee){
    const{_id, first_name,last_name,address,mobile,designation,email, password,profile_pic,date,empID}= employee
    res.status(200).json({
        _id,
        first_name,
        last_name,
        address,
        mobile,
        designation,
        email,
        password,
        profile_pic,
        date,
        empID
    })
} else{
    res.status(400)
    throw  new Error("Employee Not found");
  }
});

//Getting Log-in status
const loginStatus = asyncHandler(async (req,res) => {
    const token = req.cookies.token;

    if(!token){
        return res.json(false)
    }
    
     //verify the token 
     const verfied = jwt.verify(token, process.env.JWT_SECRET)
  
     if(verfied){
        return res.json(true)
     }
     return res.json(false)
});

//updating employee details 
const updateEmployee = asyncHandler(async(req,res) => {
   const employee = await Employee.findById(req.employee._id)

   if(employee){
    const{ first_name,last_name,address,mobile,designation,email,profile_pic} = employee;
    employee.first_name = req.body.first_name || first_name ;
    employee.last_name = req.body.last_name || last_name;
    employee.address = req.body.address || address;
    employee.mobile = req.body.mobile || mobile;
    employee.designation = req.body.designation || designation;
    employee.email = email;
    employee.profile_pic = req.body.profile_pic || profile_pic;

    const updatedEmployee = await employee.save()

    res.status(200).json({
        _id : updatedEmployee._id,
        first_name: updatedEmployee.first_name,
        last_name : updatedEmployee.last_name,
        address : updatedEmployee.address,
        mobile : updatedEmployee.mobile,
        designation : updatedEmployee.designation,
        email : updatedEmployee.email,
        profile_pic : updatedEmployee.profile_pic,
    })
   } else {
    res.status(404)
    throw new Error("User not found")
   }
});

//Changing Password
const changePassword = asyncHandler ( async(req,res) =>{
    const employee = await Employee.findById(req.employee._id)
    const {oldPassword , password} = req.body

    if(!employee){
        res.status(400)
        throw new Error("User not found")
    }

    //validation
    if(!oldPassword || !password){
        res.status(400)
        throw new Error("Please include the relevent feilds")
    }

    //checking if entered password is matching the db password
    const passwordCorrect = await bcrypt.compare(oldPassword, employee.password)

    //saving the new password
    if (employee && passwordCorrect){
        employee.password = password
        await employee.save()
        res.status(200).send("Password changed Successfully")
    }else {
        res.status(400)
        throw new Error("Old password incorrect, Please try again")
    }

});

//deleting an employee
const deleteEmployee = asyncHandler(async(req,res) => {
    const {id} = req.params
    const employee = await Employee.findOneAndDelete({_id:id})

    if(!employee){
        res.status(400)
        throw new Error("User not found")
    }

    res.status(200).send("Employee deleted successfully")
});

//searching an employee
/*const searchEmployee = asyncHandler (async(req,res)=>{
    let empPattern = new RegExp("^" + req.body.query)
    Employee.find({first_name : {$regex:empPattern}})
    .then(employee => {
        res.json({employee})
    })
    .catch(err => {
        console.log(err)
    })
})*/

//getting all employee details
const getAllEmployees = asyncHandler(async(req,res)=>{
    const employee = await Employee.find({}).sort({createdAt: -1})

    res.status(200).json({employee})
});

//search function
const searchEmployee = asyncHandler( async(req,res)=>{
  // console.log(req.params.key)

   let data = await Employee.find(
      {
         "$or":[
            {email:{$regex:req.params.key}},
            {designation:{$regex:req.params.key}}
         ]
      }
   )
   res.send(data)
})


//genertaing pdf of employee ID
const printEmpID = asyncHandler ( async (req,res) => {
    try {
        const employeeID = req.params.id;
        const employee = await Employee.findById(employeeID);
    
        const doc = new PDFDocument();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=${employee.first_name}.pdf`);
    
        doc.pipe(res);

        doc.roundedRect(50, 50, 500, 250,10).strokeColor('black').lineWidth(2).stroke();
        
        //displaying the topics
        doc.font('Helvetica-Bold');
        doc.fillColor('#321375');
        doc.fontSize(20).text("Shantha Motors", {align: 'center'});
        doc.fillColor('black');
        doc.fontSize(16).text("Employee Identity Card\n", {align: 'center'});
    
        doc.moveDown();

        // Displaying Details
        doc.font('Helvetica');
        doc.fillColor('black');
        doc.text (`First Name  : ${employee.first_name}`,70,120);
        doc.text (`Last Name   : ${employee.last_name}`,70,140);
        doc.text (`Contact No  : ${employee.mobile}`,70,160);
        doc.text (`Email       : ${employee.email}`,70,180);
        doc.text (`Designation : ${employee.designation}`,70,200);
        doc.text (`Joined Date : ${employee.createdAt}`,70,220);
        //doc.image (` ${employee.profile_pic}`,{align: 'right'})

    
        doc.end();
      } catch (err) {
        console.error(err);
        res.status(500).send('Error generating PDF document');
      }
})

//Employee attendance
const markAttendance = async (req, res) => {
  const employeeId = req.params.id;

  try {
    // Find the logged-in employee by their ID
    const employee = await Employee.findById(employeeId);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    // Write attendance data to CSV file
   const csvData = `${employee._id},${employee.first_name},${new Date().toLocaleString()}\n`;

    fs.appendFile(path.join(__dirname, 'attendance.csv'), csvData, { encoding: 'utf8' }, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error saving attendance data' });
      }

      const attendanceData = {
        id: employee._id,
        name: employee.first_name,
        time: new Date().toLocaleString(),
      };

      return res.json({ message: 'Attendance marked successfully', attendanceData });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error marking attendance' });
  }
};

  
  //downloading the csv of employee Attendance
  const downloadAttendance = (req,res) =>{
    const csvFilePath = path.join(__dirname, 'attendance.csv');
    res.download(csvFilePath, 'attendance.csv');

  }

module.exports = {
    registerEmployee,
    loginEmployee,
    logout,
    getEmployee,
    loginStatus,
    updateEmployee,
    changePassword,
    deleteEmployee,
    searchEmployee,
    getAllEmployees,
    printEmpID,
    markAttendance,
    downloadAttendance
   
}