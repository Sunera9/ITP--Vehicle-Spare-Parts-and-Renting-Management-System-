import axios from "axios"
import {toast} from "react-toastify"

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

//register Employee
 export const registerEmployee = async (employeeData) => {
       try {
        const response = await axios.post(`${BACKEND_URL}/api/employees/register`,employeeData, {withCredentials: true})

        if(response.statusText === "OK"){
            toast.success("Employee Registered Successfully")
        }

        return response.data
       } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message
        ) || error.message || error.toString();

        toast.error(message)
       }
 }

 //Log in Employee
 export const loginEmployee = async (employeeData) => {
    try {
     const response = await axios.post(`${BACKEND_URL}/api/employees/login`,employeeData,)

     if(response.statusText === "OK"){
         toast.success("Login Successful!")
     }

     return response.data
    } catch (error) {
     const message = (
         error.response && error.response.data && error.response.data.message
     ) || error.message || error.toString();

     toast.error(message)
    }
}

//log-out employee
export const logoutEmployee = async () => {
    try {
      await axios.get(`${BACKEND_URL}/api/employees/logout`)

    } catch (error) {
     const message = (
         error.response && error.response.data && error.response.data.message
     ) || error.message || error.toString();

     toast.error(message)
    }
}

//get Employee profile
export const getEmployee = async () => {
    try {
     const response = await axios.get(`${BACKEND_URL}/api/employees/getEmployee`)

     return response.data
    } catch (error) {
     const message = (
         error.response && error.response.data && error.response.data.message
     ) || error.message || error.toString();

     toast.error(message)
    }
}


//Update Employee profile
export const updateEmployee = async (formdata) => {
    try {
     const response = await axios.patch(`${BACKEND_URL}/api/employees/updateEmployee`,formdata)

     return response.data
    } catch (error) {
     const message = (
         error.response && error.response.data && error.response.data.message
     ) || error.message || error.toString();

     toast.error(message)
    }
}


// Change Employee password 
export const ChangeEmployeePwd = async (formdata) => {
    try {
     const response = await axios.patch(`${BACKEND_URL}/api/employees/changePassword`,formdata)

     return response.data
    } catch (error) {
     const message = (
         error.response && error.response.data && error.response.data.message
     ) || error.message || error.toString();

     toast.error(message)
    }
}