import axios from "axios"
import { toast } from "react-toastify"

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

//Register Supplier
export const registerSupplier = async (supplierData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/suppliers/register`,supplierData, { withCredentials: true })

        if (response.statusText === "OK") {
            toast.success("Supplier Registered Successfully")
        }

        return response.data
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message
        ) || error.message || error.toString();

        toast.error(message)
    }
}


//Log in Supplier
export const loginSupplier = async (supplierData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/suppliers/login`, supplierData,)

        if (response.statusText === "OK") {
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

//Log-out Supplier
export const logoutSupplier = async () => {
    try {
        await axios.get(`${BACKEND_URL}/api/suppliers/logout`)

    }catch (error){
        const message = (
            error.response && error.response.data && error.response.data.message
        ) ||error.message || error.toString();

        toast.error(message)
    }
}


//get Supplier profile
export const getSupplier = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/api/suppliers/getsupplier`)

        return response.data
    }catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message
        ) || error.message ||error.toString();

        toast.error(message)
    }
};


//Update Supplier profile
export const updateSupplier = async (formdata) => {
    try {
     const response = await axios.patch(`${BACKEND_URL}/api/suppliers/updatesupplier `,formdata)

     return response.data
    } catch (error) {
     const message = (
         error.response && error.response.data && error.response.data.message
     ) || error.message || error.toString();

     toast.error(message)
    }
}

//new supplier application form
export const newSuppierForm = async (applicationData) => {
    try {
         const response = await axios.post(`${BACKEND_URL}/api/suppliers/supplierform`, applicationData, { withCredentials: true })

         if (response.statusText == "OK") {
            toast.success("Form Submitted succesfully")
         }
          
         return response.data
    } catch (error) {
           const message = (
            error.response && error.response.data && error.response.data.message
           ) || error.message || error.toString();

           toast.error(message)
    }
}

//add new supply
export const addsupply = async (addSupData) => {
    try {
         const response = await axios.post(`${BACKEND_URL}/api/supplys/create`, addSupData, { withCredentials: true })

         if (response.statusText == "OK") {
            toast.success("Supply addded succesfully")
         }
          
         return response.data
    } catch (error) {
           const message = (
            error.response && error.response.data && error.response.data.message
           ) || error.message || error.toString();

           toast.error(message)
    }
}